"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface VoteStat { video_id: string; video_title: string; channel_title: string; up: number; down: number; score: number; }
interface SearchStat { query: string; count: number; }

const ADMIN_PASSWORD = "soong2026";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [voteStats, setVoteStats] = useState<VoteStat[]>([]);
  const [searchStats, setSearchStats] = useState<SearchStat[]>([]);
  const [totalSearches, setTotalSearches] = useState(0);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<"votes" | "searches">("votes");

  const fetchData = async () => {
    setLoading(true);

    // 影片評分統計
    const { data: votes } = await supabase.from("video_votes").select("*");
    if (votes) {
      setTotalVotes(votes.length);
      const map: Record<string, VoteStat> = {};
      votes.forEach((v) => {
        if (!map[v.video_id]) map[v.video_id] = { video_id: v.video_id, video_title: v.video_title || v.video_id, channel_title: v.channel_title || "-", up: 0, down: 0, score: 0 };
        if (v.vote_type === "up") map[v.video_id].up++;
        else map[v.video_id].down++;
      });
      const stats = Object.values(map).map((v) => ({ ...v, score: v.up - v.down })).sort((a, b) => b.score - a.score);
      setVoteStats(stats);
    }

    // 搜尋關鍵字統計
    const { data: searches } = await supabase.from("search_logs").select("*");
    if (searches) {
      setTotalSearches(searches.length);
      const map: Record<string, number> = {};
      searches.forEach((s) => { map[s.query] = (map[s.query] || 0) + 1; });
      const stats = Object.entries(map).map(([query, count]) => ({ query, count })).sort((a, b) => b.count - a.count).slice(0, 20);
      setSearchStats(stats);
    }

    setLoading(false);
  };

  useEffect(() => { if (authed) fetchData(); }, [authed]);

  if (!authed) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--color-cream)" }}>
      <div className="w-full max-w-sm rounded-2xl p-8" style={{ background: "white", border: "1px solid var(--color-border)" }}>
        <h1 className="mb-6 text-2xl font-bold text-center" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>🔐 管理後台</h1>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && pw === ADMIN_PASSWORD) setAuthed(true); }} placeholder="輸入密碼" className="w-full rounded-xl border px-4 py-3 text-sm outline-none mb-3" style={{ borderColor: "var(--color-border)" }} />
        <button onClick={() => { if (pw === ADMIN_PASSWORD) setAuthed(true); }} className="w-full rounded-xl py-3 text-sm font-medium text-white" style={{ background: "var(--color-sage)" }}>進入</button>
        {pw && pw !== ADMIN_PASSWORD && <p className="mt-2 text-center text-xs text-red-500">密碼錯誤</p>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>📊 鬆啲數據後台</h1>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>soong.hk Analytics Dashboard</p>
          </div>
          <button onClick={fetchData} className="rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ background: "var(--color-sage)" }}>🔄 刷新</button>
        </div>

        {/* KPI 卡片 */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "總搜尋次數", value: totalSearches, emoji: "🔍" },
            { label: "總評分次數", value: totalVotes, emoji: "👍" },
            { label: "已評分影片", value: voteStats.length, emoji: "🎬" },
            { label: "搜尋關鍵字", value: searchStats.length, emoji: "📝" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-2xl p-4 text-center" style={{ background: "white", border: "1px solid var(--color-border)" }}>
              <div className="text-2xl mb-1">{kpi.emoji}</div>
              <div className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{loading ? "..." : kpi.value}</div>
              <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Tab 切換 */}
        <div className="mb-4 flex gap-2">
          {(["votes", "searches"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className="rounded-xl px-4 py-2 text-sm font-medium transition-all" style={{ background: tab === t ? "var(--color-sage)" : "white", color: tab === t ? "white" : "var(--color-text)", border: "1px solid var(--color-border)" }}>
              {t === "votes" ? "🎬 影片評分" : "🔍 搜尋關鍵字"}
            </button>
          ))}
        </div>

        {/* 影片評分表 */}
        {tab === "votes" && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid var(--color-border)" }}>
            <div className="px-5 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
              <h2 className="font-semibold" style={{ color: "var(--color-text)" }}>影片評分排行（👍 - 👎 分數）</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--color-warm)" }}>
                    <th className="px-4 py-3 text-left font-medium" style={{ color: "var(--color-text-muted)" }}>影片</th>
                    <th className="px-4 py-3 text-left font-medium" style={{ color: "var(--color-text-muted)" }}>頻道</th>
                    <th className="px-4 py-3 text-center font-medium" style={{ color: "var(--color-sage-dark)" }}>👍</th>
                    <th className="px-4 py-3 text-center font-medium" style={{ color: "var(--color-earth)" }}>👎</th>
                    <th className="px-4 py-3 text-center font-medium" style={{ color: "var(--color-text)" }}>分數</th>
                    <th className="px-4 py-3 text-center font-medium" style={{ color: "var(--color-text-muted)" }}>連結</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={6} className="py-8 text-center" style={{ color: "var(--color-text-muted)" }}>載入中...</td></tr>
                  ) : voteStats.length === 0 ? (
                    <tr><td colSpan={6} className="py-8 text-center" style={{ color: "var(--color-text-muted)" }}>暫無數據</td></tr>
                  ) : voteStats.map((v, i) => (
                    <tr key={v.video_id} style={{ borderTop: "1px solid var(--color-border)" }}>
                      <td className="px-4 py-3 max-w-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold w-5 text-center" style={{ color: "var(--color-text-muted)" }}>{i + 1}</span>
                          <span className="line-clamp-2 text-xs" style={{ color: "var(--color-text)" }}>{v.video_title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "var(--color-text-muted)" }}>{v.channel_title}</td>
                      <td className="px-4 py-3 text-center font-medium" style={{ color: "var(--color-sage-dark)" }}>{v.up}</td>
                      <td className="px-4 py-3 text-center font-medium" style={{ color: "var(--color-earth)" }}>{v.down}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ background: v.score >= 0 ? "rgba(122,158,126,0.15)" : "rgba(139,111,92,0.1)", color: v.score >= 0 ? "var(--color-sage-dark)" : "var(--color-earth)" }}>
                          {v.score > 0 ? "+" : ""}{v.score}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <a href={`https://youtube.com/watch?v=${v.video_id}`} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: "var(--color-sage-dark)" }}>▶ 睇片</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 搜尋關鍵字表 */}
        {tab === "searches" && (
          <div className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid var(--color-border)" }}>
            <div className="px-5 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
              <h2 className="font-semibold" style={{ color: "var(--color-text)" }}>熱門搜尋關鍵字 Top 20</h2>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {loading ? <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>載入中...</p>
              : searchStats.length === 0 ? <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>暫無數據</p>
              : searchStats.map((s, i) => (
                <div key={s.query} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: "var(--color-warm)", border: "1px solid var(--color-border)" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold w-6 text-center" style={{ color: "var(--color-text-muted)" }}>{i + 1}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{s.query}</span>
                  </div>
                  <span className="rounded-full px-2 py-0.5 text-xs font-bold text-white" style={{ background: "var(--color-sage)" }}>{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
          本頁面僅供內部使用 · <a href="/" className="underline" style={{ color: "var(--color-sage-dark)" }}>返回首頁</a>
        </p>
      </div>
    </div>
  );
}
