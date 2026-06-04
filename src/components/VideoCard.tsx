// src/components/VideoCard.tsx
"use client";

import { useState } from "react";
import { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="video-card rounded-2xl overflow-hidden"
      style={{
        background: "white",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* 影片播放區域 */}
      <div className="relative aspect-video bg-black">
        {isPlaying ? (
          /* YouTube 嵌入式播放器 — 不佔用我們的頻寬 */
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          /* 縮圖 + 播放按鈕（點擊才載入播放器，節省資源） */
          <button
            onClick={() => setIsPlaying(true)}
            className="relative h-full w-full group"
            aria-label={`播放：${video.title}`}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* 播放按鈕覆層 */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:opacity-100"
              style={{ background: "rgba(0,0,0,0.25)" }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                style={{ background: "rgba(255,255,255,0.95)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="var(--color-sage-dark)" />
                </svg>
              </div>
            </div>
            {/* 時長標籤 */}
            {video.duration && (
              <span
                className="absolute bottom-2 right-2 rounded px-1.5 py-0.5 text-xs font-medium text-white"
                style={{ background: "rgba(0,0,0,0.75)" }}
              >
                {video.duration}
              </span>
            )}
          </button>
        )}
      </div>

      {/* 影片資訊 */}
      <div className="p-3 sm:p-4">
        <h3
          className="mb-1 line-clamp-2 text-sm font-medium leading-snug sm:text-base"
          style={{ color: "var(--color-text)" }}
        >
          {video.title}
        </h3>
        <div className="flex items-center justify-between">
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "var(--color-sage-dark)" }}
          >
            {/* 認證標誌 */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {video.channelTitle}
          </span>
          {video.viewCount && (
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              👁 {video.viewCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
