import { Component } from '@angular/core';
import VideosResponseData from '../search-response.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent {
  videosData!: VideosResponseData;
}
