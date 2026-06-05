import Link from "next/link";
export const metadata = { title: "使用條款 | 鬆啲 soong.hk" };
export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80" style={{ background: "var(--color-sage)" }}>
          ⬅️ 返回首頁
        </Link>
        <h1 className="mt-6 mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>使用條款</h1>
        <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>最後更新：2026年6月</p>
        <div className="space-y-6 text-sm leading-relaxed">
          {[
            ["1. 接受條款", "使用鬆啲（soong.hk）即表示您同意受本使用條款約束。如您不同意本條款，請停止使用本站。"],
            ["2. 服務說明", "本站是一個以 AI 技術搜尋並嵌入 YouTube 影片的資訊平台，旨在協助用戶尋找居家舒緩身體不適的參考影片。本站不直接提供醫療服務、診斷或治療。"],
            ["3. 第三方影片內容", "本站所顯示的所有影片均為 YouTube 平台上的第三方內容，版權屬原創作者所有。本站僅作搜尋及嵌入之用，並不對影片內容作出任何形式的認可、保證或擔保。"],
            ["4. AI 篩選系統", "本站使用人工智能系統自動篩選影片。此系統可能出現誤差，本站將持續優化篩選機制，但不保證系統的完全準確性。"],
            ["5. 用戶責任", "用戶同意：(a) 僅將本站用於合法目的；(b) 在跟從任何影片內容前自行評估風險；(c) 如有疑問，先諮詢合資格的醫療專業人士。"],
            ["6. 知識產權", "本站的設計、排版、Logo 及原創文字內容版權屬鬆啲（soong.hk）所有。嵌入影片的版權則屬各原創作者所有，受 YouTube 服務條款保護。"],
            ["7. 廣告", "本站可能顯示由 Google AdSense 提供的第三方廣告。廣告內容由 Google 自動投放，本站對廣告內容不作任何保證或背書。"],
            ["8. 適用法律", "本使用條款受香港特別行政區法律管轄。如有查詢，請電郵至 soonghk.cs@gmail.com。"],
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>{title}</h2>
              <p style={{ color: "var(--color-text-muted)" }}>{body}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ background: "var(--color-sage)" }}>⬅️ 返回首頁</Link>
          <Link href="/disclaimer" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium" style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>免責聲明</Link>
          <Link href="/privacy" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium" style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>私隱政策</Link>
        </div>
      </div>
    </div>
  );
}
