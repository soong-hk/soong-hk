import { NextRequest, NextResponse } from "next/server";
import { getCached, setCached, normalizeCacheKey } from "@/lib/cache";
import { searchVideos } from "@/lib/youtube";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || query.trim().length === 0) {
    return NextResponse.json({ error: "請提供搜尋關鍵字" }, { status: 400 });
  }

  const cacheKey = normalizeCacheKey(query);

  // 先查 Cache
  const cached = getCached(cacheKey);
  if (cached) {
    console.log(`[Cache HIT] "${query}"`);
    return NextResponse.json({ ...cached, fromCache: true });
  }

  // Cache 未命中，打 YouTube API
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
