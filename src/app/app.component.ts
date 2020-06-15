import { Component, OnInit } from '@angular/core';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { ObservableService } from './observable.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ObservableService ]
})
export class AppComponent implements OnInit {
  title = 'app';
  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;

  customColumn: CustomColumn[];

  projectData: Project[] = [
    {
        id: 1,
        name: 'Mercury',
        cost: 277000000,
        first_flight: 'September 9, 1959',
        status: 'Complete'
    },
    {
        id: 2,
        name: 'Gemini',
        cost: 1300000000,
        first_flight: 'April 8, 1964',
        status: 'Complete'
    },
    {
        id: 3,
        name: 'Apollo',
        cost: 25400000000,
        first_flight: 'February 26, 1966',
        status: 'Complete'
    },
    {
        id: 4,
        name: 'Skylab',
        launch: 'May 14, 1973',
        status: 'Complete'
    },
    {
        id: 5,
        name: 'Apollo-Soyuz',
        launch: 'July 15, 1975',
        status: 'Complete'
    },
    {
        id: 6,
        name: 'Space Shuttle',
        total_cost: 196000000000,
        first_flight: 'August 12, 1977',
        status: 'Complete'
    }
];

  studentData: Student[] = [
    {id : 1, name: 'VOILENT'},
    {id : 2, name: 'SUICIDE'},
    {id : 3, name: 'ESPACE RISK'}
  ];

  flagData: string[] = [];

  constructor(private observableService: ObservableService) {
    const xyz = this.returnArray();
    this.customColumn = [{
      position : 2,
      name : 'Flags',
      data : this.flagData
    }];
  }

  returnArray() {
    const [x, y, ...remaining] = [1, 2, 3, 4];
    console.log(x, y, remaining);

    let list = [1, 2];
    list = [0, ...list, 4];
    console.log(list);

    const myArr = [1, 2, 3];
    // return [1, 2, 3];
    // return [...myArr];
    return myArr;
  }

  onclick() {
    console.log('within click');
  }

  OnClick() {
    // console.log('within OnCLik...');
    // this.observableService.getData().subscribe(
    //   (res: string) => { console.log(res); },
    //   (error: string) => { console.log(error); },
    //   () => { console.log('Completed...'); }
    // );
  }

  ngOnInit() {
    this.data = new Observable(observer => {
      setTimeout(() => {
          observer.next(42);
      }, 1000);
      setTimeout(() => {
          observer.next(43);
      }, 2000);
      setTimeout(() => {
          observer.complete();
      }, 3000);
    });

    // tslint:disable-next-line:prefer-const
    let subscription = this.data.subscribe(
        value => console.log(value),
        error => this.anyErrors = true,
        () => this.finished = true
    );
  }
}

export interface Project { 
  id: number;
  name: string;
  cost?: number;
  total_cost?: number;
  first_flight?: string;
  launch?: string;
  status: string;
}

export interface Student { 
  id: number;
  name: string;
}

export interface CustomColumn{
  position : number;
  name : string;
  data : string[];
}

function f1() {
  console.log('on HREF click');
}
