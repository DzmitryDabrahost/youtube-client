import FakedataService from 'src/app/shared/services/fakedata.service';
import { Injectable } from '@angular/core';
import IItemVideoData from 'src/app/core/components/search/search-item.model';

@Injectable({
  providedIn: 'root',
})
export default class CardIdService {
  constructor(private cardToIdService: FakedataService) {}

  getCard(id:string | null): IItemVideoData | undefined {
    const card = this.cardToIdService.fakeData.items.find((item) => item.id === id);
    return card;
  }
}
