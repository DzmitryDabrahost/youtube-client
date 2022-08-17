import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title: string = 'youtube-client';

  showSettingsBlock: boolean = false;

  searchValue: string = '';

  isShowCards: boolean = false;

  sorting: string = '';

  filter: string = '';

  showSettings(response: boolean): void {
    this.showSettingsBlock = response;
  }

  showCards(value: string): void {
    this.searchValue = value;
    this.isShowCards = !!this.searchValue;
  }

  sortByDate(value: string): void {
    this.sorting = value;
  }

  filterByWord(value: string): void {
    this.filter = value;
  }
}
