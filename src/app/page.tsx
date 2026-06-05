// src/app/page.tsx
"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import AdSlot from "@/components/AdSlot";
import DisclaimerModal from "@/components/DisclaimerModal";
import MobileVideoPopup from "@/components/MobileVideoPopup";
import AddToHomeScreen from "@/components/AddToHomeScreen";
import { QUICK_TAGS, MOCK_VIDEOS } from "@/lib/mockData";
import { SCENARIO_TAGS } from "@/config/channels";
import { VideoItem } from "@/types";

// GA4 搜尋事件追蹤
function trackSearch(query: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "search", {
      search_term: query,
    });
  }
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<VideoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [popupVideo, setPopupVideo] = useState<VideoItem | null>(null);

  const handleSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    setHasSearched(true);
    setQuery(searchQuery);
    trackSearch(searchQuery); // GA4 追蹤
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      setResults(data.videos ?? []);
    } catch (e) {
      console.error(e);
      setResults([]);
    }
    setIsLoading(false);
  }, []);

  const handleTagClick = (tag: { query: string; label?: string }) => {
    setActiveTag(tag.query);
    handleSearch(tag.query);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTag(null);
    handleSearch(query);
  };

  return (
    <>
      <DisclaimerModal />
      <MobileVideoPopup video={popupVideo} onClose={() => setPopupVideo(null)} />

      <div className="min-h-screen" style={{ background: "var(--color-cream)" }}>
        <Header />
        <main>
          {/* ── Hero 區域 ── */}
          <section
            className="relative px-4 py-12 sm:py-20 text-center overflow-hidden"
            style={{ background: "linear-gradient(160deg, var(--color-warm) 0%, var(--color-cream) 60%)" }}
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20" style={{ background: "var(--color-sage)" }} />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-15" style={{ background: "var(--color-earth)" }} />

            <div className="relative mx-auto max-w-2xl">
              <div className="mb-3 flex justify-center">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(122, 158, 126, 0.15)", color: "var(--color-sage-dark)", border: "1px solid rgba(122, 158, 126, 0.3)" }}>
                  🤖 AI 智能篩選 · 居家自助舒緩 · 內容僅供參考
                </span>
              </div>

              <h1 className="mb-2 text-4xl font-bold sm:text-5xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", lineHeight: 1.2 }}>鬆啲</h1>
              <p className="mb-5 text-base sm:text-lg" style={{ color: "var(--color-text-muted)" }}>輸入你的不適部位，即時找到舒緩動作</p>

              <div className="mb-6 mx-auto max-w-lg rounded-xl px-4 py-3 text-left text-xs leading-relaxed" style={{ background: "rgba(139, 111, 92, 0.08)", border: "1px solid rgba(139, 111, 92, 0.2)", color: "var(--color-text-muted)" }}>
                <span style={{ color: "var(--color-earth)", fontWeight: 500 }}>⚠️ 使用須知：</span>
                {" "}本站專為「在家突然不適、希望即時找到一些動作或方法稍作舒緩」而設——並非取代就醫，而是讓您在求診前或等候期間能夠有所依循。影片由 AI 自動篩選，系統可能存在誤差，未能保證每條影片均來自認可專業人士，請自行判斷內容是否適合您的狀況。
              </div>

              {/* 搜尋欄 */}
              <form onSubmit={handleSubmit}>
                <div className="search-glow flex items-center rounded-2xl overflow-hidden" style={{ background: "white", border: "2px solid var(--color-sage-light)", boxShadow: "0 4px 20px rgba(122, 158, 126, 0.15)" }}>
                  <div className="pl-4 pr-2 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: "var(--color-sage)" }}>
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="例如：頸肩痛、腰痛、膝蓋酸..." className="flex-1 py-4 text-base outline-none bg-transparent" style={{ color: "var(--color-text)" }} aria-label="搜尋身體不適部位" />
                  <button type="submit" className="m-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 flex-shrink-0" style={{ background: "var(--color-sage)" }} disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeDashoffset="8" />
                        </svg>
                        搜尋中
                      </span>
                    ) : "搜尋"}
                  </button>
                </div>
              </form>

              {/* 熱門快捷鍵 */}
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {QUICK_TAGS.map((tag) => (
                  <button key={tag.query} onClick={() => handleTagClick(tag)} className="rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:scale-105 active:scale-95" style={{ background: activeTag === tag.query ? "var(--color-sage)" : "rgba(122, 158, 126, 0.12)", color: activeTag === tag.query ? "white" : "var(--color-sage-dark)", border: activeTag === tag.query ? "1px solid var(--color-sage)" : "1px solid rgba(122, 158, 126, 0.3)" }}>
                    <span className="mr-1">{tag.emoji}</span>{tag.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ── 情境分類區塊 ── */}
          <section className="mx-auto max-w-4xl px-4 py-6">
            <p className="mb-3 text-sm font-medium text-center" style={{ color: "var(--color-text-muted)" }}>
              依據你剛做完的事，挑選最適合的舒緩動作
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {SCENARIO_TAGS.map((tag) => (
                <button
                  key={tag.query}
                  onClick={() => handleTagClick(tag)}
                  className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition-all hover:scale-105 active:scale-95 hover:shadow-md"
                  style={{
                    background: activeTag === tag.query ? "var(--color-sage)" : "white",
                    color: activeTag === tag.query ? "white" : "var(--color-text)",
                    border: `1px solid ${activeTag === tag.query ? "var(--color-sage)" : "var(--color-border)"}`,
                  }}
                >
                  <span className="text-lg">{tag.emoji}</span>
                  <span>{tag.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* 廣告位 A */}
          {hasSearched && (
            <div className="mx-auto max-w-4xl px-4">
              <AdSlot slotId="search-top" size="leaderboard" />
            </div>
          )}

          {/* ── 搜尋結果 ── */}
          <section className="mx-auto max-w-4xl px-4 pb-8">
            {hasSearched && !isLoading && results.length > 0 && (
              <div className="mb-5">
                <h2 className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>「{query}」的舒緩影片</h2>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  共找到 {results.length} 個影片 · <span style={{ color: "var(--color-sage-dark)" }}>🤖 AI 篩選結果</span>
                </p>
              </div>
            )}

            {/* 骨架屏 */}
            {isLoading && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
                    <div className="aspect-video" style={{ background: "var(--color-warm)" }} />
                    <div className="p-4 space-y-2">
                      <div className="h-4 rounded" style={{ background: "var(--color-warm-dark)" }} />
                      <div className="h-3 w-2/3 rounded" style={{ background: "var(--color-warm)" }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 影片 Grid */}
            {!isLoading && results.length > 0 && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((video, index) => (
                  <div key={video.id}>
                    <VideoCard video={video} onPlay={setPopupVideo} />
                    {(index + 1) % 6 === 0 && index !== results.length - 1 && (
                      <div className="col-span-full my-2">
                        <AdSlot slotId={`in-feed-${index}`} size="banner" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 無結果 */}
            {hasSearched && !isLoading && results.length === 0 && (
              <div className="py-16 text-center">
                <div className="mb-4 text-5xl">🌿</div>
                <h3 className="mb-2 text-lg font-medium" style={{ color: "var(--color-text)" }}>找不到相關影片</h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>試試其他關鍵字，或點擊上方的熱門快捷鍵</p>
              </div>
            )}

            {/* 初始熱門搜尋 */}
            {!hasSearched && (
              <div className="py-4 text-center">
                <p className="mb-4 text-base font-medium" style={{ color: "var(--color-text-muted)" }}>熱門搜尋</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {QUICK_TAGS.map((tag) => (
                    <button key={tag.query} onClick={() => handleTagClick(tag)} className="rounded-xl p-4 text-left transition-all hover:shadow-md" style={{ background: "white", border: "1px solid var(--color-border)" }}>
                      <div className="mb-1 text-2xl">{tag.emoji}</div>
                      <div className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{tag.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 加入主畫面教學 */}
          <AddToHomeScreen />
        </main>
        <Footer />
      </div>
    </>
  );
}
