import IItemVideoData from './search-item.model';

export default interface IVideosResponseData {
  etag: string;
  kind: string;
  pageInfo: PageInfo;
  items: IItemVideoData[];
}

interface PageInfo {
  resultsPerPage: string;
  totalResults: string;
}
