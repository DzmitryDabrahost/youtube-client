import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  public isLogged: Observable<boolean>;

  private isLogged$ = new BehaviorSubject<boolean>(true);

  public loginName: Observable<string>;

  private loginName$ = new BehaviorSubject<string>(localStorage.getItem('name') || 'Your name');

  constructor() {
    this.isLogged = this.isLogged$.asObservable();
    this.loginName = this.loginName$.asObservable();
  }

  changeLoginStatus(condition: boolean): boolean {
    if (condition && localStorage.getItem('name')) {
      this.isLogged$.next(true);
      return true;
    }
    this.isLogged$.next(false);
    this.loginName$.next('Your name');
    return false;
  }

  changeLoginName(value: string): void {
    this.loginName$.next(value);
  }

  isLogin() {
    if (localStorage.getItem('name')) {
      this.isLogged$.next(true);
      return true;
    }
    return false;
  }
}
