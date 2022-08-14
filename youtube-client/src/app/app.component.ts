import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-client';

  showSettingsBlock: boolean = false;

  searchValue: string = '';

  isShowCards: boolean = false;

  sorting: string = '';

  filter: string = '';

  showSettings(response: boolean) {
    this.showSettingsBlock = response;
  }

  showCards(value: string) {
    this.searchValue = value;
    this.isShowCards = !!this.searchValue;
  }

  sortByDate(value: string) {
    this.sorting = value;
  }

  filterByWord(value: string) {
    this.filter = value;
  }
}
