// src/components/AdSlot.tsx
// 💰 廣告位元件 — 開發時顯示佔位框，部署後替換為 AdSense 程式碼
// 注意：廣告位需與 YouTube 播放器保持適當距離，避免誤點違規

interface AdSlotProps {
  slotId: string;            // 廣告位識別碼（方便追蹤）
  size?: "banner" | "square" | "leaderboard";
  className?: string;
}

export default function AdSlot({ slotId, size = "banner", className = "" }: AdSlotProps) {
  const dimensions = {
    banner:      { width: "100%", height: "90px",  label: "橫幅廣告 728×90" },
    square:      { width: "300px", height: "250px", label: "方形廣告 300×250" },
    leaderboard: { width: "100%", height: "50px",  label: "手機廣告 320×50" },
  };

  const dim = dimensions[size];
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div
      className={`my-4 overflow-hidden rounded-lg ${className}`}
      style={{ width: dim.width, minHeight: dim.height }}
      aria-label="廣告"
      role="complementary"
    >
      {isDev ? (
        /* 開發環境：顯示佔位框 */
        <div
          className="ad-slot-placeholder"
          style={{ width: "100%", height: dim.height }}
        >
          <span>💰 AdSense 廣告位 [{slotId}] — {dim.label}</span>
        </div>
      ) : (
        /* ============================================================
           生產環境：請取消以下注釋並填入你的 AdSense 廣告單元碼
           ============================================================
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        */
        <div style={{ height: dim.height }} /> // 生產環境佔位（AdSense 未啟用時）
      )}
    </div>
  );
}
