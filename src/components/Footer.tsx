// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-8 border-t py-8 px-4"
      style={{ borderColor: "var(--color-border)", background: "var(--color-warm)" }}
    >
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <div
          className="rounded-xl p-4 text-left text-xs leading-relaxed sm:text-sm"
          style={{ background: "rgba(255,255,255,0.6)", border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
        >
          <div className="flex items-start gap-3">
            <img src="/Medic_icon.png" alt="醫療免責聲明" style={{ width: 83, height: 83, objectFit: "contain", flexShrink: 0, opacity: 0.85 }} />
            <p>本網站（鬆啲 soong.hk）所展示之影片及內容，均來自第三方製作人並僅供一般教育及參考用途。本站所提供之任何資訊，均<strong>不構成醫療建議</strong>，亦不能取代持牌醫療專業人士之診斷、治療或任何醫療服務。如您正在承受急性或嚴重疼痛，或患有任何醫療狀況，請在進行任何運動或伸展前，諮詢您的醫生或物理治療師。</p>
          </div>
        </div>

        <p className="text-xs" style={{ color: "#ffffff" }}>
          © {new Date().getFullYear()} 鬆啲 soong.hk · 保留所有權利
          <span className="mx-2">·</span>
          <Link href="/privacy" className="underline hover:opacity-70">私隱政策</Link>
          <span className="mx-2">·</span>
          <Link href="/terms" className="underline hover:opacity-70">使用條款</Link>
          <span className="mx-2">·</span>
          <Link href="/disclaimer" className="underline hover:opacity-70">免責聲明</Link>
        </p>

        <p className="text-xs" style={{ color: "#ffffff", opacity: 0.85 }}>
          影片內容由各頻道創作者提供，透過 YouTube 平台播放，版權屬原作者所有。<br/>影片由 AI 自動篩選，系統可能存在誤差，未能保證每條影片均來自認可專業人士，請自行判斷內容是否適合您的狀況。
        </p>
      </div>
    </footer>
  );
}
