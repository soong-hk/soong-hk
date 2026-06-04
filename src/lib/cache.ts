// src/lib/cache.ts
// ⭐ 快取邏輯 — 第一階段使用 Node.js 記憶體快取 (Map)
// 第二階段可無縫升級為 Vercel KV (Redis) 以支援多 Serverless 實例

import { SearchResult } from "@/types";
import { CACHE_TTL_MS } from "@/config/channels";

interface CacheEntry {
  data: SearchResult;
  expiresAt: number;
}

// 記憶體快取 (Map) — 適合 Vercel 單一 Serverless 函式實例
// 注意：多實例部署時各自獨立，升級 Vercel KV 可解決此問題
const memoryCache = new Map<string, CacheEntry>();

/**
 * 從快取讀取搜尋結果
 * @param key 快取鍵（通常為搜尋關鍵字的標準化版本）
 */
export function getCached(key: string): SearchResult | null {
  const entry = memoryCache.get(key);
  if (!entry) return null;

  // 檢查是否過期
  if (Date.now() > entry.expiresAt) {
    memoryCache.delete(key);
    return null;
  }

  return entry.data;
}

/**
 * 寫入快取
 * @param key 快取鍵
 * @param data 要快取的搜尋結果
 */
export function setCached(key: string, data: SearchResult): void {
  memoryCache.set(key, {
    data,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

/**
 * 標準化快取鍵（小寫、去空白）
 * @param query 搜尋關鍵字
 */
export function normalizeCacheKey(query: string): string {
  return query.trim().toLowerCase().replace(/\s+/g, "_");
}

/**
 * 清除所有快取（供管理用途）
 */
export function clearCache(): void {
  memoryCache.clear();
}

/**
 * 取得快取統計（供除錯用途）
 */
export function getCacheStats() {
  const now = Date.now();
  let valid = 0;
  let expired = 0;

  for (const entry of memoryCache.values()) {
    if (now > entry.expiresAt) expired++;
    else valid++;
  }

  return { total: memoryCache.size, valid, expired };
}
