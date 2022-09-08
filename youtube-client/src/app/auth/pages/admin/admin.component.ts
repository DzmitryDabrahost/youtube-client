import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent implements OnInit {
  adminForm: FormGroup;

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', Validators.maxLength(255)),
      imageUrl: new FormControl('', [Validators.required, Validators.pattern(/https:\/\//)]),
      videoLink: new FormControl('', [Validators.required, Validators.pattern(/https:\/\//)]),
      date: new FormControl('', [Validators.required, this.customDateValidators]),
    });
  }

  private customDateValidators(control: FormControl): null | { [key: string]: boolean } {
    const value: Date = new Date(control.value);
    const maxDate: Date = new Date();
    if (maxDate.getTime() > value.getTime()) {
      return { date: true };
    }
    return null;
  }

  addCard() {
    console.log(this.adminForm.value);
  }
}
