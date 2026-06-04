import { VideoItem } from "@/types";
import { WHITELISTED_CHANNELS, MAX_RESULTS_PER_SEARCH } from "@/config/channels";

const YT_API_BASE = "https://www.googleapis.com/youtube/v3";

export async function searchVideos(query: string): Promise<VideoItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) throw new Error("YOUTUBE_API_KEY is not set");

  const safeQuery = `${query} 舒緩 拉筋`;

  if (WHITELISTED_CHANNELS.length > 0) {
    const results = await Promise.all(
      WHITELISTED_CHANNELS.map((channelId) =>
        searchInChannel(safeQuery, channelId, apiKey)
      )
    );
    return results.flat().slice(0, MAX_RESULTS_PER_SEARCH);
  }

  return searchGlobal(safeQuery, apiKey);
}

async function searchInChannel(query: string, channelId: string, apiKey: string): Promise<VideoItem[]> {
  const url = `${YT_API_BASE}/search?part=snippet&type=video&q=${encodeURIComponent(query)}&channelId=${channelId}&maxResults=4&videoEmbeddable=true&order=relevance&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) return [];
  const data = await res.json();
  return parseItems(data.items ?? []);
}

async function searchGlobal(query: string, apiKey: string): Promise<VideoItem[]> {
  const url = `${YT_API_BASE}/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=${MAX_RESULTS_PER_SEARCH}&videoEmbeddable=true&relevanceLanguage=zh&order=relevance&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
  const data = await res.json();
  return parseItems(data.items ?? []);
}

function parseItems(items: any[]): VideoItem[] {
  return items
    .filter((item) => item?.id?.videoId)
    .map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      channelId: item.snippet.channelId,
      thumbnail: item.snippet.thumbnails?.medium?.url || `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
    }));
}
