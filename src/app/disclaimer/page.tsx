import Link from "next/link";
export const metadata = { title: "免責聲明 | 鬆啲 soong.hk" };
export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80" style={{ background: "var(--color-sage)" }}>
          ⬅️ 返回首頁
        </Link>
        <h1 className="mt-6 mb-2 text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}>免責聲明</h1>
        <p className="mb-8 text-sm" style={{ color: "var(--color-text-muted)" }}>最後更新：2026年6月</p>
        <div className="space-y-6 text-sm leading-relaxed">
          {[
            ["1. 僅供參考，非醫療建議", "本網站（鬆啲 soong.hk）所提供之所有內容，包括但不限於影片、文字說明及搜尋結果，均僅供一般教育及參考用途。本站內容不構成任何形式的醫療建議、診斷或治療方案，亦不能取代持牌醫療專業人士（包括醫生、物理治療師、脊醫等）的專業意見。"],
            ["2. 使用前請諮詢醫護人員", "如您正在承受急性或嚴重疼痛、患有任何慢性病症、曾接受手術或正在接受任何醫療治療，請在進行任何伸展或運動前，先諮詢您的醫生或物理治療師。"],
            ["3. AI 篩選限制", "本站影片由人工智能（AI）系統自動篩選，系統可能存在誤差，未能保證每條影片均來自認可專業人士或包含準確的醫療資訊。用戶應自行判斷內容是否適合個人狀況。"],
            ["4. 第三方影片內容", "本站所嵌入之影片均來自 YouTube 平台上的第三方創作者，版權屬原作者所有。本站對影片內容的準確性、完整性或適用性不作任何保證或陳述。"],
            ["5. 責任限制", "因使用本站任何內容而直接或間接引致之任何人身傷害、損失或損害，本站概不負責。用戶須自行承擔使用本站資訊的風險。"],
            ["6. 緊急情況", "如您或他人面臨緊急醫療情況，請立即致電香港緊急救護服務（999）或前往最近的急症室。本站不適用於緊急情況。"],
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="mb-2 text-lg font-semibold" style={{ color: "var(--color-text)" }}>{title}</h2>
              <p style={{ color: "var(--color-text-muted)" }}>{body}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ background: "var(--color-sage)" }}>⬅️ 返回首頁</Link>
          <Link href="/privacy" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium" style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>私隱政策</Link>
          <Link href="/terms" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium" style={{ background: "white", border: "1px solid var(--color-border)", color: "var(--color-text)" }}>使用條款</Link>
        </div>
      </div>
    </div>
  );
}
