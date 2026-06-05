// src/app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "使用條款 | 鬆啲 soong.hk",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm" style={{ color: "var(--color-sage-dark)" }}>
          ← 返回首頁
        </Link>

        <h1 className="mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
          使用條款
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>最後更新：2026年6月</p>

        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>1. 接受條款</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              使用鬆啲（soong.hk，下稱「本站」）即表示您同意受本使用條款約束。如您不同意本條款，請停止使用本站。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>2. 服務說明</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站是一個以 AI 技術搜尋並嵌入 YouTube 影片的資訊平台，旨在協助用戶尋找居家舒緩身體不適的參考影片。本站不直接提供醫療服務、診斷或治療。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>3. 第三方影片內容</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站所顯示的所有影片均為 YouTube 平台上的第三方內容，版權屬原創作者所有。本站僅作搜尋及嵌入之用，並不對影片內容作出任何形式的認可、保證或擔保。用戶在觀看及跟從任何影片內容前，應自行評估其適用性。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>4. AI 篩選系統</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站使用人工智能系統自動篩選影片。此系統可能出現誤差，包括但不限於顯示不適切或不準確的內容。本站將持續優化篩選機制，但不保證系統的完全準確性。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>5. 用戶責任</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              用戶同意：(a) 僅將本站用於合法目的；(b) 不會利用本站從事任何侵犯他人權益的行為；(c) 在跟從任何影片內容前自行評估風險；(d) 如有疑問，先諮詢合資格的醫療專業人士。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>6. 知識產權</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站的設計、排版、Logo 及原創文字內容版權屬鬆啲（soong.hk）所有。未經書面授權，不得複製、轉載或作商業用途。嵌入影片的版權則屬各原創作者所有，受 YouTube 服務條款保護。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>7. 廣告</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站可能顯示由 Google AdSense 提供的第三方廣告。廣告內容由 Google 根據用戶興趣自動投放，本站對廣告內容不作任何保證或背書。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>8. 服務變更及終止</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站保留在不作事先通知的情況下，修改、暫停或終止全部或部分服務的權利。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>9. 適用法律</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本使用條款受香港特別行政區法律管轄，並按其詮釋。因本條款引起的任何爭議，雙方同意受香港法院的專屬管轄權約束。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>10. 聯絡我們</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              如有任何查詢，請電郵至：{" "}
              <a href="mailto:soonghk.cs@gmail.com" className="underline" style={{ color: "var(--color-sage-dark)" }}>
                soonghk.cs@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-10 flex gap-4 text-sm" style={{ color: "var(--color-sage-dark)" }}>
          <Link href="/disclaimer" className="underline">免責聲明</Link>
          <Link href="/privacy" className="underline">私隱政策</Link>
        </div>
      </div>
    </div>
  );
}
