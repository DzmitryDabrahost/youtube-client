import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class MainserviceService {
  searchValue: string = '';

  isShowCards: boolean = false;

  public sorting$ = new BehaviorSubject('');

  public filter$ = new BehaviorSubject('');

  showCards(value: string): void {
    this.searchValue = value;
    this.isShowCards = !!this.searchValue;
  }

  sortByDate(value: string): void {
    this.sorting$.next(value);
  }

  filterByWord(value: string): void {
    this.filter$.next(value);
  }
}
