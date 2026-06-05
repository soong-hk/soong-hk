// src/config/channels.ts

export const WHITELISTED_CHANNELS: string[] = [];

export const MAX_RESULTS_PER_SEARCH = 12;
export const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

// 情境分類 — 每個情境對應多個短關鍵字，分別搜尋後合併
export const SCENARIO_TAGS = [
  {
    label: "久坐辦公",
    emoji: "🧘‍♂️",
    keywords: ["髖關節 拉筋", "下背痛 物理治療", "肩頸 放鬆"],
  },
  {
    label: "滑雪後",
    emoji: "🏂",
    keywords: ["大腿 伸展", "膝蓋 舒緩", "下背 肌肉放鬆"],
  },
  {
    label: "游泳後",
    emoji: "🏊",
    keywords: ["肩膀 伸展", "上背 放鬆", "胸廓 打開"],
  },
  {
    label: "跑步後",
    emoji: "🏃",
    keywords: ["小腿 拉筋", "大腿後側 伸展", "足底筋膜 舒緩"],
  },
  {
    label: "搬重物後",
    emoji: "📦",
    keywords: ["腰部 舒緩", "核心 拉筋", "手臂 肌肉放鬆"],
  },
];
