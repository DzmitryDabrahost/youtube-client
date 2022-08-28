import { Component, OnInit } from '@angular/core';
import KeyAPIService from 'src/app/youtube/services/youtuve-api.service';
import MainserviceService from '../../../../shared/services/mainservice.service';
import IItemVideoData from '../search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export default class SearchResultComponent implements OnInit {
  sorting: string;

  filter: string;

  cards: IItemVideoData[] = [];

  constructor(
    public youtubeAPI: KeyAPIService,
    private mainServise: MainserviceService,
  ) {}

  ngOnInit(): void {
    this.youtubeAPI.youtubeData$.subscribe((items) => {
      this.cards = items;
    });
    this.mainServise.sorting$.subscribe((value) => {
      this.sorting = value;
    });
    this.mainServise.filter$.subscribe((value) => {
      this.filter = value;
    });
  }
}
