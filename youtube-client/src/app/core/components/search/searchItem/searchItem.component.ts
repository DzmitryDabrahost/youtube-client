import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import IItemVideoData from '../searchItem.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './searchItem.component.html',
  styleUrls: ['./searchItem.component.scss'],
})
export default class SearchItemComponent {
  @Input() card: IItemVideoData;

  constructor(public router: Router) {}

  getCardToId(id: string) {
    this.router.navigate(['detail', id]);
  }
}
