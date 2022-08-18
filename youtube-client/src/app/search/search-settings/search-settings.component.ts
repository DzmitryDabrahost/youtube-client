import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import SortingWords from '../../Enums/SortingWords.enum.model';

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

  sortingByDate(): void {
    if (this.sorting === SortingWords.dateUp) {
      this.sorting = SortingWords.dateDown;
      this.sortChangeBy.emit(this.sorting);
    } else {
      this.sorting = SortingWords.dateUp;
      this.sortChangeBy.emit(this.sorting);
    }
  }

  sortingByView(): void {
    if (this.sorting === SortingWords.viewUp) {
      this.sorting = SortingWords.viewDown;
      this.sortChangeBy.emit(this.sorting);
    } else {
      this.sorting = SortingWords.viewUp;
      this.sortChangeBy.emit(this.sorting);
    }
  }

  setFilterWord(value: string): void {
    this.filter = value;
    this.outFilterWord.emit(this.filter);
  }
}
