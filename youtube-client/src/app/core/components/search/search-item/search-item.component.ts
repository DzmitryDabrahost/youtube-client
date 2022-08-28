import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import IItemVideoData from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input() card: IItemVideoData;

  constructor(public router: Router) {}

  getCardToId(id: string) {
    this.router.navigate(['detail', id]);
  }
}
