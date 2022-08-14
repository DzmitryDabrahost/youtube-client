import { Component, Input } from '@angular/core';
// import IVideosResponseData from '../search-response.model';
import data from '../../FakeData/data.json';
import IItemVideoData from '../search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent {
  @Input() sorting: string;

  @Input() filter: string;

  requestData: IItemVideoData[] = data.items;
}
