// src/lib/mockData.ts
// 假資料 — 用於本地端 UI 開發，第二步接駁 YouTube API 後替換

import { VideoItem } from "@/types";

export const MOCK_VIDEOS: VideoItem[] = [
  {
    id: "mock_001",
    title: "10分鐘頸肩放鬆｜辦公室一族必學舒緩動作",
    channelTitle: "物理治療師 Dr. Wong",
    channelId: "UC_mock_001",
    thumbnail: "https://picsum.photos/seed/neck1/480/270",
    duration: "10:24",
    viewCount: "125,000",
    publishedAt: "2024-03-15",
    description: "針對長時間使用電腦人士，提供有效的頸肩舒緩動作，由物理治療師示範。",
  },
  {
    id: "mock_002",
    title: "腰痛必看！5個簡單動作即時舒緩",
    channelTitle: "康健瑜伽 Wellness Yoga",
    channelId: "UC_mock_002",
    thumbnail: "https://picsum.photos/seed/back1/480/270",
    duration: "8:15",
    viewCount: "98,400",
    publishedAt: "2024-02-28",
    description: "這5個動作專為腰痛人士設計，每天只需10分鐘，有效改善腰部不適。",
  },
  {
    id: "mock_003",
    title: "膝蓋痛的根本解決｜強化膝關節周邊肌肉",
    channelTitle: "Bob & Brad Physio",
    channelId: "UCDnjVRCBMnqq8UxHLWF4ABw",
    thumbnail: "https://picsum.photos/seed/knee1/480/270",
    duration: "15:32",
    viewCount: "256,800",
    publishedAt: "2024-01-20",
    description: "物理治療師教你如何通過強化肌肉來根本解決膝蓋疼痛問題。",
  },
  {
    id: "mock_004",
    title: "辦公室腰酸背痛急救｜坐著也能做的伸展操",
    channelTitle: "物理治療師 Dr. Wong",
    channelId: "UC_mock_001",
    thumbnail: "https://picsum.photos/seed/office1/480/270",
    duration: "6:48",
    viewCount: "72,100",
    publishedAt: "2024-04-05",
    description: "不需要離開座位，6個動作輕鬆舒緩辦公室帶來的腰背不適。",
  },
  {
    id: "mock_005",
    title: "Yoga for Back Pain | 20-min Full Relief Flow",
    channelTitle: "Yoga with Adriene",
    channelId: "UCWX3yGbODI3HMiNnGnRmpmg",
    thumbnail: "https://picsum.photos/seed/yoga1/480/270",
    duration: "20:05",
    viewCount: "1,240,000",
    publishedAt: "2023-11-10",
    description: "A gentle yoga flow designed to release tension in the back and spine.",
  },
  {
    id: "mock_006",
    title: "足底筋膜炎自救｜3分鐘即時止痛按摩法",
    channelTitle: "康健瑜伽 Wellness Yoga",
    channelId: "UC_mock_002",
    thumbnail: "https://picsum.photos/seed/foot1/480/270",
    duration: "3:22",
    viewCount: "43,500",
    publishedAt: "2024-05-01",
    description: "每天早上起床前做，有效舒緩足底筋膜炎帶來的刺痛感。",
  },
];

export const QUICK_TAGS = [
  { label: "頸肩痛", emoji: "🔥", query: "頸肩放鬆舒緩" },
  { label: "腰部舒緩", emoji: "🔥", query: "腰痛舒緩" },
  { label: "膝蓋拉筋", emoji: "🔥", query: "膝蓋伸展" },
  { label: "背痛", emoji: "💪", query: "背痛舒緩" },
  { label: "手腕痛", emoji: "💻", query: "手腕舒緩" },
  { label: "足底痛", emoji: "👣", query: "足底筋膜炎" },
];
