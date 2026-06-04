// src/components/DisclaimerModal.tsx
"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 每次開啟網頁都顯示（或可改為 localStorage 記錄已讀）
    const dismissed = sessionStorage.getItem("disclaimer_dismissed");
    if (!dismissed) setShow(true);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("disclaimer_dismissed", "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(45, 41, 38, 0.6)", backdropFilter: "blur(4px)" }}
      onClick={handleDismiss}
    >
      <div
        className="modal-enter w-full max-w-md rounded-2xl p-6 sm:p-8"
        style={{ background: "var(--color-cream)", border: "1px solid var(--color-border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 圖示 */}
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{ background: "rgba(122, 158, 126, 0.15)" }}
        >
          ⚕️
        </div>

        <h2
          className="mb-3 text-center text-xl font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
        >
          使用前請注意
        </h2>

        <div
          className="mb-5 space-y-2 text-sm leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          <p>
            🌿 本網站（鬆啲 soong.hk）提供的所有影片及資訊，均由第三方專業人士製作，僅供<strong>一般參考及教育用途</strong>。
          </p>
          <p>
            ⚠️ 本站內容<strong>並非醫療建議</strong>，不能代替專業醫生、物理治療師或其他醫護人員的診斷與治療。
          </p>
          <p>
            如你正在<strong>受傷、患有急性疼痛、或有任何慢性病症</strong>，請先諮詢你的醫療專業人士，再進行任何伸展或運動。
          </p>
        </div>

        <button
          onClick={handleDismiss}
          className="w-full rounded-xl py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--color-sage)" }}
        >
          我已了解，繼續瀏覽
        </button>

        <p
          className="mt-3 text-center text-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          繼續使用即代表你同意本站之
          <a href="#" className="underline ml-1" style={{ color: "var(--color-sage-dark)" }}>
            免責聲明
          </a>
        </p>
      </div>
    </div>
  );
}
