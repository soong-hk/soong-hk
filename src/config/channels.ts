// src/config/channels.ts
// ⭐ 優質頻道白名單 — 20個經審核的物理治療 / 運動康復 / 瑜伽頻道

export const WHITELISTED_CHANNELS: string[] = [
  // ── 香港 / 台灣 中文頻道 ──────────────────────────────
  "UCWOFMrpAhOMLZkpACGT7KoA",  // 李培碩中醫師
  "UCa2HdxFp5ZTsLZgY8m5bXVQ",  // 王薇茹醫師
  "UC_TW_physio_channel_001",   // 【待補充】香港物理治療師頻道
  "UC_TW_yoga_channel_001",     // 【待補充】台灣瑜伽頻道

  // ── 國際認可物理治療師 (英文) ──────────────────────────
  "UCDnjVRCBMnqq8UxHLWF4ABw",  // Bob & Brad — 全球最知名物理治療師
  "UCfDMxjBHcFUz0LCQIjdK1Ow",  // Tone and Tighten (DPT)
  "UCsEHKU9fNABHbdRxbqsOnOA",  // Precision Movement
  "UCBcRF18a7Qf58cCRy5xuWwQ",  // MoveU (Dr. Shane)
  "UCpis3RcTw6t47XO0R_KY4WA",  // Doctor Jo (DPT)
  "UCFjc9H89-RpWuIStDqgO6uA",  // Jeff Cavaliere — ATHLEAN-X
  "UC8PkUqNpEeOFddYGnXBFkQQ",  // Adam Meakins (Sports Physio)
  "UCqnA8CPOhFVi7mzPMxoG0RQ",  // E3 Rehab

  // ── 瑜伽與伸展專家 ────────────────────────────────────
  "UCWX3yGbODI3HMiNnGnRmpmg",  // Yoga with Adriene
  "UCpQ34ng5GgSsTpe4D-DzHrg",  // SarahBeth Yoga
  "UCVjwmGGL7IQfoRnNBjclrCQ",  // Boho Beautiful Yoga
  "UC9sHGK_yzHbfAVLrFtHyUMw",  // Kassandra (Yin Yoga)

  // ── 運動康復與肌力訓練 ────────────────────────────────
  "UCERm5yFZ1SptUEU4wZ2vJvw",  // Austin Baraki (Barbell Medicine)
  "UC4pHDGDqfwWMBiwMnKTiqTg",  // Alan Thrall
  "UCgO8OBEK0PRuoGJ0v1FvLXA",  // PicFit
  "UCnUYZLuoy1rq1aVMwx4aTzw",  // Gravity Transformation
];

// 搜尋時附加的安全關鍵字（確保內容相關）
export const SEARCH_SAFETY_KEYWORDS = "舒緩 伸展 拉筋 物理治療 康復";

// 每次搜尋最大結果數
export const MAX_RESULTS_PER_SEARCH = 12;

// Cache 有效期 24 小時
export const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

// 情境分類搜尋關鍵字對照表
export const SCENARIO_TAGS = [
  {
    label: "久坐辦公",
    emoji: "🧘‍♂️",
    query: "久坐 下背伸展 髖關節放鬆 辦公室",
  },
  {
    label: "滑雪後",
    emoji: "🏂",
    query: "滑雪後 大腿 膝蓋 腰部 肌肉放鬆",
  },
  {
    label: "游泳後",
    emoji: "🏊",
    query: "游泳後 肩膀 頸部 背部 伸展舒緩",
  },
  {
    label: "跑步後",
    emoji: "🏃",
    query: "跑步後 小腿 大腿 髂脛束 伸展",
  },
  {
    label: "搬重物後",
    emoji: "📦",
    query: "搬重物後 腰背痛 肌肉放鬆 舒緩",
  },
];
