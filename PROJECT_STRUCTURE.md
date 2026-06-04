# 鬆啲 (soong.hk) — 專案結構說明

```
soong-hk/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (GA4 追蹤碼、AdSense 預留位)
│   │   ├── page.tsx                  # 首頁 (搜尋欄 + 快捷鍵 + 結果卡片)
│   │   ├── globals.css               # 全域樣式 + Tailwind
│   │   └── api/
│   │       └── search/
│   │           └── route.ts          # ⭐ YouTube API 後端 + Cache 快取邏輯
│   │
│   ├── components/
│   │   ├── Header.tsx                # 品牌 Logo + 導覽列
│   │   ├── SearchBar.tsx             # 搜尋欄元件
│   │   ├── QuickTags.tsx             # 熱門部位快捷鍵
│   │   ├── VideoCard.tsx             # 影片結果卡片
│   │   ├── VideoGrid.tsx             # 影片卡片 Grid 容器
│   │   ├── DisclaimerModal.tsx       # ⚠️ 醫療免責聲明彈窗
│   │   ├── AdSlot.tsx                # 💰 廣告位元件 (AdSense 預留)
│   │   └── Footer.tsx                # 頁尾 + 免責聲明文字
│   │
│   ├── lib/
│   │   ├── youtube.ts                # YouTube Data API v3 封裝函式
│   │   └── cache.ts                  # ⭐ 快取邏輯 (記憶體/Redis/KV)
│   │
│   ├── config/
│   │   └── channels.ts               # ⭐ 優質頻道白名單 (Channel ID 列表)
│   │
│   └── types/
│       └── index.ts                  # TypeScript 型別定義
│
├── public/
│   └── logo.svg                      # 品牌 Logo
│
├── .env.local                        # 環境變數 (YOUTUBE_API_KEY 等)
├── next.config.ts                    # Next.js 設定
├── tailwind.config.ts                # Tailwind 設定
└── package.json
```

## 關鍵檔案說明

| 檔案 | 用途 |
|------|------|
| `src/app/api/search/route.ts` | YouTube API 請求 + **Cache 快取**核心邏輯 |
| `src/config/channels.ts` | **優質頻道白名單** — 物理治療師、瑜伽導師 Channel ID |
| `src/lib/cache.ts` | 快取讀寫封裝 (先用 Map 記憶體快取，後可升級 Vercel KV) |
| `src/components/AdSlot.tsx` | AdSense 廣告位佔位元件，方便日後插入廣告碼 |
| `src/app/layout.tsx` | GA4 + AdSense script 預留注釋位置 |
