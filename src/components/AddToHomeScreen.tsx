// src/components/AddToHomeScreen.tsx
"use client";

import { useState } from "react";

export default function AddToHomeScreen() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="mx-auto max-w-4xl px-4 mb-6"
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "white", border: "1px solid var(--color-border)" }}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl flex-shrink-0"
              style={{ background: "rgba(122, 158, 126, 0.12)" }}
            >
              📲
            </div>
            <div className="text-left">
              <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                加入手機主畫面
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                隨時隨地即時搜尋舒緩動作，用起來像 App 一樣
              </p>
            </div>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              color: "var(--color-text-muted)",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              flexShrink: 0,
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {expanded && (
          <div
            className="px-5 pb-5 space-y-4"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            {/* iOS */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🍎</span>
                <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                  iPhone / iPad (Safari)
                </p>
              </div>
              <ol className="space-y-1.5 pl-1">
                {[
                  "用 Safari 瀏覽器打開 soong.hk",
                  "點擊底部工具列的「分享」按鈕 (□↑)",
                  "向下滾動，點選「加入主畫面」",
                  "點擊右上角「新增」即完成 ✓",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <span
                      className="flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5"
                      style={{ background: "var(--color-sage)", fontSize: "9px" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Android */}
            <div
              className="pt-4"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">🤖</span>
                <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                  Android (Chrome)
                </p>
              </div>
              <ol className="space-y-1.5 pl-1">
                {[
                  "用 Chrome 瀏覽器打開 soong.hk",
                  "點擊右上角「三個點」選單 (⋮)",
                  "選擇「安裝應用程式」或「新增至主畫面」",
                  "點擊「安裝」即完成 ✓",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <span
                      className="flex-shrink-0 flex h-4 w-4 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5"
                      style={{ background: "var(--color-sage)", fontSize: "9px" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
