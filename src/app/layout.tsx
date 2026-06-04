// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "鬆啲 soong.hk — 即時舒緩身體酸痛",
  description:
    "鬆啲 (soong.hk) 為你搜尋由物理治療師、瑜伽導師提供的優質舒緩影片，助你在家輕鬆緩解頸肩腰背酸痛。",
  keywords: "舒緩酸痛, 腰痛, 頸痛, 拉筋, 物理治療, 瑜伽, soong.hk, 鬆啲",
  openGraph: {
    title: "鬆啲 soong.hk — 即時舒緩身體酸痛",
    description: "搜尋由專業人士示範的舒緩動作，在家輕鬆緩解酸痛。",
    url: "https://soong.hk",
    siteName: "鬆啲 soong.hk",
    locale: "zh_HK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://soong.hk" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK">
      <head>
        {/* ============================================================
            📊 Google Analytics 4 (GA4) — 追蹤碼預留位
            請將下方 G-XXXXXXXXXX 替換為你的 Measurement ID
            ============================================================
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}

        {/* ============================================================
            💰 Google AdSense — 廣告腳本預留位
            請將 ca-pub-XXXXXXXXXXXXXXXX 替換為你的 Publisher ID
            ============================================================
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        */}

        {/* SEO: 結構化資料 (Schema.org WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "鬆啲 soong.hk",
              url: "https://soong.hk",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://soong.hk/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
