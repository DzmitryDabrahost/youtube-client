import { Component, Input } from '@angular/core';
import IItemVideoData from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input() card!: IItemVideoData;

  today: Date = new Date();

  getIndicatorColor(time: string) {
    const publishinPostDate: Date = new Date(time);
    const weekInMilliseconds: number = 3600000 * 24 * 7;
    const monthInMilliseconds: number = 3600000 * 24 * 30;
    const timeDifferent: number = this.today.getTime() - publishinPostDate.getTime();
    let result: string = '';

    if (timeDifferent < weekInMilliseconds) {
      result = '#2F80ED';
    } else if (timeDifferent < monthInMilliseconds) {
      result = '#27AE60';
    } else if (timeDifferent < (monthInMilliseconds * 6)) {
      result = '#F2C94C';
    } else {
      result = '#EB5757';
    }
    return result;
  }
}
