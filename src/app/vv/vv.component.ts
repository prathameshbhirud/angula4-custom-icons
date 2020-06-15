import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vv',
  templateUrl: './vv.component.html',
  styleUrls: ['./vv.component.css']
})
export class VvComponent {

  @Input() caption : string;
  @Input() data : any;
  @Output() EditClick : EventEmitter<any>;
  @Output() DeleteClick : EventEmitter<any>;

  constructor() { 
    this.EditClick = new EventEmitter<any>();
    this.DeleteClick = new EventEmitter<any>();
  }
  
  OnEditClick(){
    this.EditClick.emit(this.data);
  }

  OnDeleteClick(){
    this.DeleteClick.emit(this.data.id);
  }
}
