// src/components/DisclaimerModal.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DisclaimerModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 用 localStorage 記錄，用戶同意後唔會再彈出
    const agreed = localStorage.getItem("soong_disclaimer_agreed");
    if (!agreed) setShow(true);
  }, []);

  const handleAgree = () => {
    localStorage.setItem("soong_disclaimer_agreed", "1");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(45, 41, 38, 0.65)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="modal-enter w-full max-w-md rounded-2xl p-6 sm:p-8"
        style={{ background: "var(--color-cream)", border: "1px solid var(--color-border)" }}
      >
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
            🌿 本站（鬆啲 soong.hk）專為「在家突然不適、希望即時找到動作稍作舒緩」而設，<strong>並非取代就醫</strong>，而是讓您在求診前或等候期間有所依循。
          </p>
          <p>
            🤖 影片由 <strong>AI 自動篩選</strong>，系統可能存在誤差，未能保證每條影片均來自認可專業人士，請自行判斷內容是否適合您的狀況。
          </p>
          <p>
            ⚠️ 如您正在承受<strong>急性或嚴重疼痛</strong>，請立即就醫，切勿自行處理。
          </p>
        </div>

        <button
          onClick={handleAgree}
          className="w-full rounded-xl py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--color-sage)" }}
        >
          我已知悉並同意，繼續使用
        </button>

        <p className="mt-3 text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
          繼續使用即代表你同意本站之{" "}
          <Link href="/disclaimer" className="underline" style={{ color: "var(--color-sage-dark)" }}>
            免責聲明
          </Link>
          、
          <Link href="/privacy" className="underline ml-1" style={{ color: "var(--color-sage-dark)" }}>
            私隱政策
          </Link>
          {" "}及{" "}
          <Link href="/terms" className="underline" style={{ color: "var(--color-sage-dark)" }}>
            使用條款
          </Link>
        </p>
      </div>
    </div>
  );
}
