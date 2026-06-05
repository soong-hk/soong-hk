// src/components/MobileVideoPopup.tsx
"use client";

import { VideoItem } from "@/types";
import { useEffect } from "react";

interface Props {
  video: VideoItem | null;
  onClose: () => void;
}

export default function MobileVideoPopup({ video, onClose }: Props) {
  // 防止背景滾動
  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [video]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      {/* 關閉按鈕 */}
      <div className="flex items-center justify-between px-4 py-3">
        <p className="line-clamp-1 text-sm font-medium text-white flex-1 mr-4">
          {video.title}
        </p>
        <button
          onClick={onClose}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: "rgba(255,255,255,0.15)" }}
          aria-label="關閉播放器"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 影片播放器 */}
      <div
        className="flex-1 flex items-center justify-center px-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="h-full w-full rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* 底部：頻道名 + YouTube 連結 */}
      <div className="px-4 py-4 flex items-center justify-between">
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
          {video.channelTitle}
        </span>
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white"
          style={{ background: "#ff0000" }}
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.74 12.37 12.37 0 00-8.64 0A4.84 4.84 0 013.41 6.69 49.64 49.64 0 003 12a49.64 49.64 0 00.41 5.31 4.83 4.83 0 003.77 2.74 12.37 12.37 0 008.64 0 4.83 4.83 0 003.77-2.74A49.64 49.64 0 0021 12a49.64 49.64 0 00-.41-5.31zM10 15V9l5 3-5 3z"/>
          </svg>
          YouTube 觀看
        </a>
      </div>
    </div>
  );
}
