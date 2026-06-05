import Link from "next/link";
export const metadata = { title: "私隱政策 | 鬆啲 soong.hk" };
export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80" style={{ background: "var(--color-sage)" }}>
          ⬅️ 返回首頁
        </Link>
        <h1 className="mt-6 mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>私隱政策</h1>
        <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>最後更新：2026年6月</p>
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>1. 概覽</h2>
            <p style={{ color: "var(--color-text-muted)" }}>鬆啲（soong.hk）重視用戶的個人私隱。本私隱政策說明我們如何收集、使用及保護您在使用本站時所提供的資料，並符合香港《個人資料（私隱）條例》（第486章）的規定。</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>2. 我們收集的資料</h2>
            <p className="mb-2" style={{ color: "var(--color-text-muted)" }}>本站收集以下非個人識別資料：</p>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-text-muted)" }}>
              <li>瀏覽器類型及版本</li>
              <li>訪問頁面及搜尋關鍵字（匿名）</li>
              <li>訪問日期及時間</li>
              <li>裝置類型（手機／桌面）</li>
            </ul>
            <p className="mt-2" style={{ color: "var(--color-text-muted)" }}>本站<strong>不會</strong>收集您的姓名、電郵地址、電話號碼或任何可直接識別您身份的個人資料。</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>3. Google Analytics (GA4)</h2>
            <p style={{ color: "var(--color-text-muted)" }}>本站使用 Google Analytics 4（GA4）分析網站流量及用戶行為。GA4 會透過 Cookie 收集匿名的使用數據。您可透過安裝 <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-sage-dark)" }}>Google Analytics 退出附加元件</a> 來停止追蹤。</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>4. Cookie 的使用</h2>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-text-muted)" }}>
              <li><strong>soong_disclaimer_agreed</strong>：記錄您已閱讀並同意免責聲明</li>
              <li><strong>_ga, _ga_*</strong>：Google Analytics 分析 Cookie</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>5. Google AdSense</h2>
            <p style={{ color: "var(--color-text-muted)" }}>本站可能使用 Google AdSense 顯示廣告。您可透過 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-sage-dark)" }}>Google 廣告設定</a> 管理個人化廣告偏好。</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>6. YouTube 嵌入內容</h2>
            <p style={{ color: "var(--color-text-muted)" }}>本站嵌入來自 YouTube 的影片。當您播放影片時，YouTube 可能會依據其 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-sage-dark)" }}>私隱政策</a> 收集相關數據。</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>7. 聯絡我們</h2>
            <p style={{ color: "var(--color-text-muted)" }}>如有疑問，請電郵至：<a href="mailto:soonghk.cs@gmail.com" className="underline" style={{ color: "var(--color-sage-dark)" }}>soonghk.cs@gmail.com</a></p>
          </section>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ background: "var(--color-sage)" }}>⬅️ 返回首頁</Link>
          <Link href="/disclaimer" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium" style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>免責聲明</Link>
          <Link href="/terms" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium" style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>使用條款</Link>
        </div>
      </div>
    </div>
  );
}
