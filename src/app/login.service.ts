import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  private _userData$: BehaviorSubject<any>;
  public _userData: any;

  constructor() {
    this._userData$ = new BehaviorSubject(null);
  }

  get userData$() {
    return this._userData$.asObservable();
  }

  login(userName) {
    this._userData$.next(userName);
  }

  logout() {
    this._userData$.next(null);
  }

}
