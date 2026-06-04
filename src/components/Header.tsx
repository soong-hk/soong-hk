// src/components/Header.tsx
"use client";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: "rgba(250, 247, 242, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        {/* Logo + 品牌名 */}
        <a href="/" className="flex items-center gap-2 group">
          {/* SVG Logo — 葉形療癒圖示 */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "var(--color-sage)", flexShrink: 0 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
                fill="white"
                opacity="0"
              />
              {/* 葉子 + 手形圖示 */}
              <path
                d="M12 3C9 3 6.5 5 6 8c-.5 3 1 6 4 8 .5-2 1-4 2-5.5C13 9 15 8 17 8c-1-3-3-5-5-5z"
                fill="white"
                opacity="0.9"
              />
              <path
                d="M12 11c0 3.5-1.5 6.5-3.5 8.5C10 20.5 11 21 12 21c4 0 7.5-4 7.5-9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
          <div>
            <span
              className="block text-xl font-bold leading-tight group-hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-sage-dark)",
              }}
            >
              鬆啲
            </span>
            <span
              className="block text-xs leading-none tracking-widest"
              style={{ color: "var(--color-text-muted)" }}
            >
              soong.hk
            </span>
          </div>
        </a>

        {/* 右側標語 */}
        <p
          className="hidden sm:block text-sm"
          style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}
        >
          在家自救郁一郁，痛處自然鬆一鬆
        </p>
      </div>
    </header>
  );
}
