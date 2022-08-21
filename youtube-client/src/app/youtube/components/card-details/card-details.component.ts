import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import CardIdService from '../../services/card-id.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export default class CardDetailsComponent implements OnInit {
  card: any;

  constructor(
    public router: ActivatedRoute,
    private cardToIdService: CardIdService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getCard();
  }

  getCard(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const newCard = this.cardToIdService.getCard(id);
    this.card = newCard;
  }

  getBack() {
    this.location.back();
  }
}
