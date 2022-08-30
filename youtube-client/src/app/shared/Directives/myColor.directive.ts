import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';
import ColorByDates from '../Enums/ColorByDates.enum.model';
import TimeInMilliseconds from '../Enums/TimeInMilliSeconds.enum.model';

@Directive({
  selector: '[appMyColor]',
})
export default class MyColorDirective implements OnInit {
  @Input('appMyColor') cardDate: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  backgroundColor: string;

  ngOnInit(): void {
    const today: Date = new Date();
    const publishinPostDate: Date = new Date(this.cardDate);

    const timeDifferent: number = today.getTime() - publishinPostDate.getTime();

    if (timeDifferent < TimeInMilliseconds.weekInMilliseconds) {
      this.backgroundColor = ColorByDates.blue;
    } else if (timeDifferent < TimeInMilliseconds.monthInMilliseconds) {
      this.backgroundColor = ColorByDates.green;
    } else if (timeDifferent < TimeInMilliseconds.sixMonthInMilliseconds) {
      this.backgroundColor = ColorByDates.yellow;
    } else {
      this.backgroundColor = ColorByDates.red;
    }
    this.renderer.setStyle(this.element.nativeElement, 'background', this.backgroundColor);
  }
}
