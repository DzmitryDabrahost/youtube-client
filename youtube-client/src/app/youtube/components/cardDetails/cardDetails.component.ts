import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import IItemVideoData from 'src/app/core/components/search/searchItem.model';
import KeyAPIService from '../../services/youtubeApi.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './cardDetails.component.html',
  styleUrls: ['./cardDetails.component.scss'],
})
export default class CardDetailsComponent implements OnInit {
  card: any;

  constructor(
    public router: ActivatedRoute,
    private youtubeService: KeyAPIService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id: string | null = this.router.snapshot.paramMap.get('id');
    this.youtubeService.youtubeData$.subscribe((response: IItemVideoData[]) => {
      this.card = response.find((item: IItemVideoData) => item.id === id);
    });
  }

  getBack() {
    this.location.back();
  }
}
