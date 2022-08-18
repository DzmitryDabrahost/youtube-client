import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() changeSettingsState = new EventEmitter<boolean>();

  isSettingsButtonClicked: boolean;

  changeSettingsOptions() {
    this.isSettingsButtonClicked = !this.isSettingsButtonClicked;
    this.changeSettingsState.emit(this.isSettingsButtonClicked);
  }
}
