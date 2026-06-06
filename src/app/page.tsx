"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import AdSlot from "@/components/AdSlot";
import DisclaimerModal from "@/components/DisclaimerModal";
import MobileVideoPopup from "@/components/MobileVideoPopup";
import AddToHomeScreen from "@/components/AddToHomeScreen";
import { QUICK_TAGS } from "@/lib/mockData";
import { SCENARIO_TAGS } from "@/config/channels";
import { VideoItem } from "@/types";

function trackSearch(query: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "search", { search_term: query });
  }
}

function logSearch(query: string, resultCount: number, searchType: string) {
  fetch("/api/log-search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, resultCount, searchType }),
  }).catch(() => {});
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<VideoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [searchLabel, setSearchLabel] = useState("");
  const [popupVideo, setPopupVideo] = useState<VideoItem | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const handleSearch = useCallback(async (searchQuery: string, label?: string) => {
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    setHasSearched(true);
    setQuery(searchQuery);
    setSearchLabel(label || searchQuery);
    trackSearch(searchQuery);
    try {
      const url = `/api/search?q=${encodeURIComponent(searchQuery)}`;
      const res = await fetch(url);
      const data = await res.json();
      let videos = data.videos ?? [];
      if (videos.length === 0 && !data.error) {
        await new Promise((r) => setTimeout(r, 800));
        const retry = await fetch(url);
        const retryData = await retry.json();
        videos = retryData.videos ?? [];
      }
      setResults(videos);
      logSearch(searchQuery, videos.length, "keyword");
    } catch (e) {
      console.error(e);
      setResults([]);
    }
    setIsLoading(false);
  }, []);

  const handleScenarioClick = useCallback(async (tag: typeof SCENARIO_TAGS[0]) => {
    setIsLoading(true);
    setHasSearched(true);
    setActiveScenario(tag.label);
    setActiveTag(null);
    setSearchLabel(tag.emoji + " " + tag.label);
    setQuery("");
    trackSearch(tag.label);
    try {
      const batchParam = tag.keywords.join(",");
      const url = `/api/search?batch=${encodeURIComponent(batchParam)}`;
      const res = await fetch(url);
      const data = await res.json();
      let videos = data.videos ?? [];
      if (videos.length === 0 && !data.error) {
        await new Promise((r) => setTimeout(r, 800));
        const retry = await fetch(url);
        const retryData = await retry.json();
        videos = retryData.videos ?? [];
      }
      setResults(videos);
      logSearch(tag.label, videos.length, "scenario");
    } catch (e) {
      console.error(e);
      setResults([]);
    }
    setIsLoading(false);
  }, []);

  const handleTagClick = (tag: { query: string; label: string; emoji: string }) => {
    setActiveTag(tag.query);
    setActiveScenario(null);
    handleSearch(tag.query, tag.label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTag(null);
    setActiveScenario(null);
    handleSearch(query);
  };

  return (
    <>
      <DisclaimerModal />
      <MobileVideoPopup video={popupVideo} onClose={() => setPopupVideo(null)} />
      <div className="min-h-screen" style={{ background: "var(--color-cream)" }}>
        <Header />
        <main>

          {/* ── Hero with blobs ── */}
          <section
            className="relative text-center px-4 pt-10 pb-10 overflow-hidden"
            style={{ background: "var(--color-cream)" }}
          >
                                    

            {/* 左下橙色花形 */}
            <div className="pointer-events-none absolute" style={{ bottom: 24, left: -10, zIndex: 0, transform: `rotate(${scrollY * 0.08}deg)` }}>
              <svg width="110" height="110" viewBox="0 0 100 100"><g transform="translate(50,50)">{[0,72,144,216,288].map((r) => (<ellipse key={r} cx="0" cy="-28" rx="16" ry="22" fill="#E6B079" transform={`rotate(${r})`} />))}<circle cx="0" cy="0" r="18" fill="#E6B079" /></g></svg>
            </div>

            {/* 右中橄欖色花形 */}
            <div className="pointer-events-none absolute" style={{ top: "40%", right: -8, zIndex: 0, opacity: 0.85, transform: `rotate(${scrollY * -0.06}deg)` }}>
              <svg width="80" height="80" viewBox="0 0 100 100"><g transform="translate(50,50)">{[0,72,144,216,288].map((r) => (<ellipse key={r} cx="0" cy="-28" rx="16" ry="22" fill="#BCA446" transform={`rotate(${r})`} />))}<circle cx="0" cy="0" r="18" fill="#BCA446" /></g></svg>
            </div>

            {/* 左上小teal花形 */}
            <div className="pointer-events-none absolute" style={{ top: "20%", left: 4, zIndex: 0, opacity: 0.55, transform: `rotate(${scrollY * 0.12}deg)` }}>
              <svg width="55" height="55" viewBox="0 0 100 100"><g transform="translate(50,50)">{[0,72,144,216,288].map((r) => (<ellipse key={r} cx="0" cy="-28" rx="16" ry="22" fill="#577371" transform={`rotate(${r})`} />))}<circle cx="0" cy="0" r="18" fill="#577371" /></g></svg>
            </div>

            {/* 右下粉紅花形 */}
            <div className="pointer-events-none absolute" style={{ bottom: 20, right: 6, zIndex: 0, transform: `rotate(${scrollY * -0.10}deg)` }}>
              <svg width="88" height="88" viewBox="0 0 100 100"><g transform="translate(50,50)">{[0,72,144,216,288].map((r) => (<ellipse key={r} cx="0" cy="-28" rx="16" ry="22" fill="#EFD6D5" transform={`rotate(${r})`} />))}<circle cx="0" cy="0" r="18" fill="#EFD6D5" /></g></svg>
            </div>

            <div className="relative mx-auto max-w-lg" style={{ zIndex: 1 }}>
              <div className="mb-3 flex justify-center">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(87,115,113,0.08)", color: "var(--color-sage)", border: "1px solid rgba(87,115,113,0.2)" }}>
                  🤖 AI 智能篩選 · 在家自救郁一郁 · 痛處自然鬆一鬆
                </span>
              </div>
              <div className="flex justify-center mb-3"><Image src="/soongHK_Logo.png" alt="鬆啲" width={160} height={107} style={{ filter: "invert(35%) sepia(25%) saturate(500%) hue-rotate(130deg) brightness(55%)", opacity: 0.85 }} /></div>
              <h1 className="mb-2 text-5xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", lineHeight: 1.1 }}>鬆啲</h1>
              <p className="mb-6 text-sm" style={{ color: "var(--color-text-muted)" }}>一鍵即時搵到舒緩動作</p>

              {/* 情境 + 搜尋一體區塊 */}
              <div className="rounded-2xl p-4 mb-4 text-center" style={{ background: "rgba(190,210,213,0.15)", border: "1px solid rgba(190,210,213,0.4)" }}>
                <p className="mb-3 text-xs font-medium" style={{ color: "var(--color-sage)" }}>
                  🙋 今日做咗咩？幫你搵最啱嘅舒緩動作
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {SCENARIO_TAGS.map((tag) => (
                    <button
                      key={tag.label}
                      onClick={() => handleScenarioClick(tag)}
                      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                      style={{
                        background: activeScenario === tag.label ? "var(--color-sage)" : "white",
                        color: activeScenario === tag.label ? "white" : "var(--color-text)",
                        border: `1px solid ${activeScenario === tag.label ? "var(--color-sage)" : "rgba(87,115,113,0.2)"}`,
                      }}
                    >
                      {tag.emoji} {tag.label}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px" style={{ background: "rgba(87,115,113,0.15)" }}/>
                  <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>或者直接搜尋特定部位</span>
                  <div className="flex-1 h-px" style={{ background: "rgba(87,115,113,0.15)" }}/>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="search-glow flex items-center rounded-xl overflow-hidden" style={{ background: "white", border: "1.5px solid var(--color-warm)", boxShadow: "0 3px 12px rgba(87,115,113,0.1)" }}>
                    <div className="pl-3 pr-2 flex-shrink-0" style={{ color: "var(--color-sage)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <input
                      type="search" value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="例如：頸肩痛、腰痛、膝蓋酸..."
                      className="flex-1 py-3 text-sm outline-none bg-transparent"
                      style={{ color: "var(--color-text)" }}
                    />
                    <button type="submit" className="m-1.5 rounded-lg px-4 py-2 text-xs font-medium text-white flex-shrink-0" style={{ background: "var(--color-sage)" }} disabled={isLoading}>
                      {isLoading ? "搜尋中..." : "搜尋"}
                    </button>
                  </div>
                </form>
                {/* 熱門快捷鍵 */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {QUICK_TAGS.map((tag) => (
                    <button key={tag.query} onClick={() => handleTagClick(tag)} className="rounded-full px-3 py-1.5 text-xs font-medium transition-all" style={{ background: activeTag === tag.query ? "var(--color-sage)" : "rgba(255,255,255,0.8)", color: activeTag === tag.query ? "white" : "var(--color-sage)", border: `1px solid ${activeTag === tag.query ? "var(--color-sage)" : "rgba(87,115,113,0.25)"}` }}>
                      {tag.emoji} {tag.label}
                    </button>
                  ))}
                </div>
              </div>


            </div>
          </section>



          {/* 廣告位 */}
          {hasSearched && (
            <div className="mx-auto max-w-4xl px-4">
              <AdSlot slotId="search-top" size="leaderboard" />
            </div>
          )}

          {/* ── 搜尋結果 ── */}
          <section className="mx-auto max-w-4xl px-4 pb-8">
            {hasSearched && !isLoading && results.length > 0 && (
              <div className="mb-5">
                <h2 className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>「{searchLabel}」的舒緩影片</h2>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>共找到 {results.length} 個影片 · <span style={{ color: "var(--color-sage)" }}>🤖 AI 篩選結果</span></p>
              </div>
            )}
            {isLoading && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
                    <div className="aspect-video" style={{ background: "var(--color-warm)" }}/>
                    <div className="p-4 space-y-2">
                      <div className="h-4 rounded" style={{ background: "var(--color-warm-dark)" }}/>
                      <div className="h-3 w-2/3 rounded" style={{ background: "var(--color-warm)" }}/>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            {hasSearched && !isLoading && results.length === 0 && (
              <div className="py-16 text-center">
                <div className="mb-4 text-5xl">🌿</div>
                <h3 className="mb-2 text-lg font-medium" style={{ color: "var(--color-text)" }}>找不到相關影片</h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>試試其他關鍵字，或點擊上方的情境標籤</p>
              </div>
            )}

          </section>

          <AddToHomeScreen />
        </main>
        <Footer />
      </div>
    </>
  );
}
