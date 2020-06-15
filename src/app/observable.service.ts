import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ObservableService implements OnInit {

  myObservable: Observable<any>;
  constructor() { }

  ngOnInit() {
    this.myObservable = Observable.create((observer: Observer<any>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      setTimeout(() => {
        observer.error('Error package');
      }, 5000);
    });
  }

  getData(): Observable<any> {
    return this.myObservable;
  }

}
