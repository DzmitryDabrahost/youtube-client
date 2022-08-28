import { Component, OnInit } from '@angular/core';
import FakedataService from '../../../../shared/services/fakedata.service';
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

  requestData: IItemVideoData[];

  constructor(
    private fakeData: FakedataService,
    private mainServise: MainserviceService,
  ) {}

  ngOnInit(): void {
    this.requestData = this.fakeData.fakeData.items;
    this.mainServise.sorting.subscribe((value) => {
      this.sorting = value;
    });
    this.mainServise.filter.subscribe((value) => {
      this.filter = value;
    });
  }
}
