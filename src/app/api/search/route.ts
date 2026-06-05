import { NextRequest, NextResponse } from "next/server";
import { getCached, setCached, normalizeCacheKey } from "@/lib/cache";
import { searchVideos } from "@/lib/youtube";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const batchParam = searchParams.get("batch"); // 逗號分隔的多個關鍵字

  // ── Batch 模式：情境分類用，多關鍵字合併搜尋 ──
  if (batchParam) {
    const keywords = batchParam.split(",").map((k) => k.trim()).filter(Boolean).slice(0, 5);
    const cacheKey = normalizeCacheKey("batch_" + keywords.join("_"));

    const cached = getCached(cacheKey);
    if (cached) {
      console.log(`[Cache HIT] batch: "${keywords.join(", ")}"`);
      return NextResponse.json({ ...cached, fromCache: true });
    }

    console.log(`[Cache MISS] batch: "${keywords.join(", ")}" — 並行搜尋`);
    try {
      // 並行發出所有請求，再合併去重
      const allResults = await Promise.all(keywords.map((kw) => searchVideos(kw)));
      const seen = new Set<string>();
      const merged = allResults.flat().filter((v) => {
        if (seen.has(v.id)) return false;
        seen.add(v.id);
        return true;
      });

      const result = {
        videos: merged,
        query: keywords[0],
        fromCache: false,
        cachedAt: new Date().toISOString(),
      };
      setCached(cacheKey, result);
      return NextResponse.json(result);
    } catch (error) {
      console.error("[Batch Search Error]", error);
      return NextResponse.json({ error: "搜尋服務暫時不可用" }, { status: 500 });
    }
  }

  // ── 一般單一搜尋 ──
  if (!query || query.trim().length === 0) {
    return NextResponse.json({ error: "請提供搜尋關鍵字" }, { status: 400 });
  }

  const cacheKey = normalizeCacheKey(query);
  const cached = getCached(cacheKey);
  if (cached) {
    console.log(`[Cache HIT] "${query}"`);
    return NextResponse.json({ ...cached, fromCache: true });
  }

  console.log(`[Cache MISS] "${query}" — 向 YouTube API 請求`);
  try {
    const videos = await searchVideos(query);
    const result = {
      videos,
      query,
      fromCache: false,
      cachedAt: new Date().toISOString(),
    };
    setCached(cacheKey, result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("[YouTube API Error]", error);
    return NextResponse.json({ error: "搜尋服務暫時不可用" }, { status: 500 });
  }
}
