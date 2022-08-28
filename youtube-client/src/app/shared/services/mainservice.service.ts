import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class MainserviceService {
  searchValue: string = '';

  isShowCards: boolean = false;

  public sorting: Observable<string>;

  private sorting$ = new BehaviorSubject('');

  public filter: Observable<string>;

  private filter$ = new BehaviorSubject('');

  constructor() {
    this.sorting = this.sorting$.asObservable();
    this.filter = this.filter$.asObservable();
  }

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
