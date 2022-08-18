import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export default class SearchInputComponent {
  @Output() outSearchText = new EventEmitter<string>();

  cardSearchValue: string;

  enterSearchValue(valueInput: string) {
    this.cardSearchValue = valueInput;
    this.outSearchText.emit(this.cardSearchValue);
  }
}
