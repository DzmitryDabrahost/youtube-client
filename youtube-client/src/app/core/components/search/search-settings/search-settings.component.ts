import MainserviceService from 'src/app/shared/services/mainservice.service';
import { Component, Input } from '@angular/core';
import SortingWords from '../../../../shared/Enums/SortingWords.enum.model';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export default class SearchSettingsComponent {
  @Input() isSettingsButtonClicked: boolean;

  sorting: string;

  filter: string;

  constructor(private mainService: MainserviceService) {}

  sortingByDate(): void {
    if (this.sorting === SortingWords.dateUp) {
      this.sorting = SortingWords.dateDown;
    } else {
      this.sorting = SortingWords.dateUp;
    }
    this.mainService.sortByDate(this.sorting);
  }

  sortingByView(): void {
    if (this.sorting === SortingWords.viewUp) {
      this.sorting = SortingWords.viewDown;
    } else {
      this.sorting = SortingWords.viewUp;
    }
    this.mainService.sortByDate(this.sorting);
  }

  setFilterWord(value: string): void {
    this.filter = value;
    this.mainService.filterByWord(this.filter);
  }
}
