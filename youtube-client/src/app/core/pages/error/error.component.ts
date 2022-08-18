import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export default class ErrorComponent {
  routes: Routes;
}
