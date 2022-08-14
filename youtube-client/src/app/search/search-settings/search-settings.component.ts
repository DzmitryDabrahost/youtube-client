import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export default class SearchSettingsComponent {
  @Input() isSettingsButtonClicked: boolean;

  @Output() sortChangeBy = new EventEmitter<string>();

  @Output() outFilterWord = new EventEmitter<string>();

  sorting: string;

  filter: string;

  sortingByDate() {
    if (this.sorting === 'dateUp') {
      this.sorting = 'dateDown';
      this.sortChangeBy.emit(this.sorting);
    } else {
      this.sorting = 'dateUp';
      this.sortChangeBy.emit(this.sorting);
    }
  }

  sortingByView() {
    if (this.sorting === 'viewUp') {
      this.sorting = 'viewDown';
      this.sortChangeBy.emit(this.sorting);
    } else {
      this.sorting = 'viewUp';
      this.sortChangeBy.emit(this.sorting);
    }
  }

  setFilterWord(value: string) {
    this.filter = value;
    this.outFilterWord.emit(this.filter);
  }
}
