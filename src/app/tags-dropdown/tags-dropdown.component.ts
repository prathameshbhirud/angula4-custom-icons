import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-dropdown',
  templateUrl: './tags-dropdown.component.html',
  styleUrls: ['./tags-dropdown.component.css']
})
export class TagsDropdownComponent implements OnInit {

  data : any;
  games: any[];
  selectedGame: Object = {};
  items = [
    new Item('Han Solo'),
    new Item('Luke Skywalker'),
    new Item('BB-8'),
    new Item('Rey')
  ];

  inputListHidden : boolean = true;

  constructor() { 
    this.data = [{"name":"Lord Of The Rings","type":"Adventure"},{"name":"Avatar","type":"Sci-Fi"}];
  }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.games = this.data;
  }
}

export class Item {
  constructor(public text: string) { }

}
