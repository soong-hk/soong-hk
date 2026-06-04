// src/types/index.ts

export interface VideoItem {
  id: string;
  title: string;
  channelTitle: string;
  channelId: string;
  thumbnail: string;
  duration?: string;
  viewCount?: string;
  publishedAt: string;
  description: string;
}

export interface SearchResult {
  videos: VideoItem[];
  query: string;
  fromCache: boolean;
  cachedAt?: string;
}

export interface QuickTag {
  label: string;
  emoji: string;
  query: string;
}
