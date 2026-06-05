import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const [{ data: votes }, { data: searches }] = await Promise.all([
    supabaseAdmin.from("video_votes").select("*"),
    supabaseAdmin.from("search_logs").select("*"),
  ]);

  const voteMap: Record<string, any> = {};
  (votes ?? []).forEach((v) => {
    if (!voteMap[v.video_id]) voteMap[v.video_id] = { video_id: v.video_id, video_title: v.video_title || v.video_id, channel_title: v.channel_title || "-", up: 0, down: 0, score: 0 };
    if (v.vote_type === "up") voteMap[v.video_id].up++;
    else voteMap[v.video_id].down++;
  });
  const voteStats = Object.values(voteMap).map((v: any) => ({ ...v, score: v.up - v.down })).sort((a: any, b: any) => b.score - a.score);

  const searchMap: Record<string, number> = {};
  (searches ?? []).forEach((s) => { searchMap[s.query] = (searchMap[s.query] || 0) + 1; });
  const searchStats = Object.entries(searchMap).map(([query, count]) => ({ query, count })).sort((a, b) => b.count - a.count).slice(0, 20);

  return NextResponse.json({
    voteStats,
    searchStats,
    totalVotes: (votes ?? []).length,
    totalSearches: (searches ?? []).length,
  });
}
