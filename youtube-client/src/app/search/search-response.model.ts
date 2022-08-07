import ItemVideoData from './search-item.model';

export default interface VideosResponseData {
  etag: string;
  kind: string;
  pageInfo: PageInfo;
  items: ItemVideoData;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
