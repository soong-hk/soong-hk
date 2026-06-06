import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  const { videoId, videoTitle, channelTitle, type } = await request.json();

  if (!videoId || !["up", "down"].includes(type)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  );

  const { error } = await supabase.from("video_votes").insert({
    video_id: videoId,
    video_title: videoTitle,
    channel_title: channelTitle,
    vote_type: type,
  });

  if (error) {
    console.error("[Vote API Error]", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
