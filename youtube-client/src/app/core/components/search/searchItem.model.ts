export default interface IItemVideoData {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippets;
  statistics: Statistics;
}

interface Snippets {
  categoryId: string;
  localized: Localized;
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
  liveBroadcastContent?: string;
  channelTitle: string;
  tags: string[];
}

interface Localized {
  description: string;
  title: string;
}

interface Thumbnails {
  default: ThumbnailsData;
  medium: ThumbnailsData;
  high: ThumbnailsData;
  standard: ThumbnailsData;
  maxres: ThumbnailsData;
}

interface ThumbnailsData {
  url: string;
  width: number;
  height: number;
}

interface Statistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}
