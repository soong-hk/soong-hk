import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  const { query, resultCount, searchType } = await request.json();

  if (!query) return NextResponse.json({ error: "No query" }, { status: 400 });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  const { error } = await supabase.from("search_logs").insert({
    query,
    result_count: resultCount ?? 0,
    search_type: searchType ?? "keyword",
  });

  if (error) console.error("[Search Log Error]", error);

  return NextResponse.json({ success: true });
}
