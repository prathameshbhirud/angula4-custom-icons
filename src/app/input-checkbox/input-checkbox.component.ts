import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent implements OnInit {

  @Output() public button = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onclick_button(event) { 
    this.button.emit();
  }

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}
