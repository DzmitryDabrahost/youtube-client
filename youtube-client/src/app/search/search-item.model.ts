export default interface ItemVideoData {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippets;
  statistics: Statistics;
}

interface Snippets {
  categoryId: number;
  localized: Localized;
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: [string]
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
  commentCount: number;
  dislikeCount: number;
  favoriteCount: number;
  likeCount: number;
  viewCount: number;
}
