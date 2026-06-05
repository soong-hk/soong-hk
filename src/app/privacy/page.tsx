// src/app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "私隱政策 | 鬆啲 soong.hk",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm" style={{ color: "var(--color-sage-dark)" }}>
          ← 返回首頁
        </Link>

        <h1 className="mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>
          私隱政策
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>最後更新：2026年6月</p>

        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>1. 概覽</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              鬆啲（soong.hk，下稱「本站」）重視用戶的個人私隱。本私隱政策說明我們如何收集、使用及保護您在使用本站時所提供的資料，並符合香港《個人資料（私隱）條例》（第486章）的規定。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>2. 我們收集的資料</h2>
            <p className="mb-2" style={{ color: "var(--color-text-muted)" }}>本站收集以下非個人識別資料：</p>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-text-muted)" }}>
              <li>瀏覽器類型及版本</li>
              <li>訪問頁面及搜尋關鍵字（匿名）</li>
              <li>訪問日期及時間</li>
              <li>裝置類型（手機/桌面）</li>
              <li>來源頁面（Referrer）</li>
            </ul>
            <p className="mt-2" style={{ color: "var(--color-text-muted)" }}>
              本站<strong>不會</strong>收集您的姓名、電郵地址、電話號碼或任何可直接識別您身份的個人資料。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>3. Google Analytics (GA4)</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站使用 Google Analytics 4（GA4）分析網站流量及用戶行為，以改善用戶體驗。GA4 會透過 Cookie 及類似技術收集匿名的使用數據，並由 Google LLC 處理。您可透過安裝{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-sage-dark)" }}>
                Google Analytics 退出附加元件
              </a>{" "}
              來停止 GA4 追蹤。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>4. Cookie 的使用</h2>
            <p className="mb-2" style={{ color: "var(--color-text-muted)" }}>本站使用以下 Cookie：</p>
            <ul className="list-disc pl-5 space-y-1" style={{ color: "var(--color-text-muted)" }}>
              <li><strong>soong_disclaimer_agreed</strong>：記錄您已閱讀並同意免責聲明（儲存於 localStorage）</li>
              <li><strong>_ga, _ga_*</strong>：Google Analytics 分析 Cookie，用於區分用戶及統計訪問次數</li>
            </ul>
            <p className="mt-2" style={{ color: "var(--color-text-muted)" }}>
              您可透過瀏覽器設定停用 Cookie，但這可能影響本站部分功能。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>5. Google AdSense（廣告）</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站可能使用 Google AdSense 顯示廣告。Google 可能根據您過往在本站及其他網站的瀏覽記錄，向您展示個人化廣告。您可透過{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-sage-dark)" }}>
                Google 廣告設定
              </a>{" "}
              管理個人化廣告偏好。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>6. YouTube 嵌入內容</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站嵌入來自 YouTube（Google LLC）的影片。當您播放影片時，YouTube 可能會依據其{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-sage-dark)" }}>
                私隱政策
              </a>{" "}
              收集相關數據。建議您查閱 YouTube 的私隱政策以了解詳情。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>7. 資料安全</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站採用業界標準的安全措施保護資料，包括 HTTPS 加密傳輸。惟互聯網傳輸並非百分百安全，本站不能保證資料傳輸的絕對安全。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>8. 私隱政策更新</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              本站保留隨時修訂本私隱政策的權利。如有重大變更，我們將在本頁面更新「最後更新」日期。建議您定期查閱本政策。
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>9. 聯絡我們</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              如您對本私隱政策有任何疑問，請電郵至：{" "}
              <a href="mailto:soonghk.cs@gmail.com" className="underline" style={{ color: "var(--color-sage-dark)" }}>
                soonghk.cs@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-10 flex gap-4 text-sm" style={{ color: "var(--color-sage-dark)" }}>
          <Link href="/disclaimer" className="underline">免責聲明</Link>
          <Link href="/terms" className="underline">使用條款</Link>
        </div>
      </div>
    </div>
  );
}
