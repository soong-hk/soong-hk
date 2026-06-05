"use client";

import { useState, useEffect } from "react";
import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
  onPlay?: (video: VideoItem) => void;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function VideoCard({ video, onPlay }: VideoCardProps) {
  const isMobile = useIsMobile();
  const [thumbUp, setThumbUp] = useState(0);
  const [thumbDown, setThumbDown] = useState(0);
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const handlePlay = () => {
    if (isMobile) {
      onPlay?.(video);
    } else {
      window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank", "noopener,noreferrer");
    }
  };

  const handleVote = async (type: "up" | "down") => {
    if (voted === type) return;
    if (type === "up") {
      setThumbUp((v) => v + 1);
      if (voted === "down") setThumbDown((v) => Math.max(0, v - 1));
    } else {
      setThumbDown((v) => v + 1);
      if (voted === "up") setThumbUp((v) => Math.max(0, v - 1));
    }
    setVoted(type);

    // 儲存到 Supabase
    try {
      await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId: video.id,
          videoTitle: video.title,
          channelTitle: video.channelTitle,
          type,
        }),
      });
    } catch (e) {
      console.error("[Vote Error]", e);
    }
  };

  return (
    <div className="video-card rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid var(--color-border)" }}>
      <button onClick={handlePlay} className="relative w-full group aspect-video block bg-black" aria-label={`播放：${video.title}`}>
        <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.22)" }}>
          <div className="flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110" style={{ background: "rgba(255,255,255,0.95)" }}>
            {isMobile ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="var(--color-sage-dark)" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-sage-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            )}
          </div>
        </div>
        {video.duration && (
          <span className="absolute bottom-2 right-2 rounded px-1.5 py-0.5 text-xs font-medium text-white" style={{ background: "rgba(0,0,0,0.75)" }}>{video.duration}</span>
        )}
      </button>

      <div className="p-3 sm:p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-medium leading-snug sm:text-base" style={{ color: "var(--color-text)" }}>{video.title}</h3>
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-sage-dark)" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {video.channelTitle}
          </span>
        </div>
        <div className="flex items-center gap-2 border-t pt-2" style={{ borderColor: "var(--color-border)" }}>
          <button onClick={() => handleVote("up")} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all" style={{ background: voted === "up" ? "rgba(122,158,126,0.15)" : "transparent", color: voted === "up" ? "var(--color-sage-dark)" : "var(--color-text-muted)", border: `1px solid ${voted === "up" ? "var(--color-sage-light)" : "var(--color-border)"}` }}>
            👍 有用{thumbUp > 0 && <span>({thumbUp})</span>}
          </button>
          <button onClick={() => handleVote("down")} className="flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-all" style={{ background: voted === "down" ? "rgba(139,111,92,0.1)" : "transparent", color: voted === "down" ? "var(--color-earth)" : "var(--color-text-muted)", border: `1px solid ${voted === "down" ? "var(--color-warm-dark)" : "var(--color-border)"}` }}>
            👎 一般{thumbDown > 0 && <span>({thumbDown})</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
