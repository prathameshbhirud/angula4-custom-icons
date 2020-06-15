import { Component, Input, OnInit } from '@angular/core';
import { AlphabetPipe } from '../alphabet.pipe';

@Component({
    selector: 'app-custom-table',
    templateUrl: './custom-table.component.html',
    providers : [ AlphabetPipe ]
})
export class CustomTableComponent implements OnInit {
    title = 'Custom Table';
    @Input() records: any[];
    @Input() caption: string;
    @Input() showActions : boolean =  false;
    // @Input() addCustomColumns : string[] =  [];
    @Input() addCustomColumns : Array<CustomColumn>;

    columnNames: string[] = [];

    ngOnInit() {
        console.log(this.records[0]);
        this.columnNames = Object.keys(this.records[0]);
        if(this.addCustomColumns)
        {
            //this.addCustomColumns.forEach(x => this.columnNames.push(x.name));
            this.addCustomColumns.forEach(x => this.columnNames.splice(x.position, 0, x.name));            
        }
        console.log(this.columnNames);
    }

    OnClick_Edit(data){
        console.log("Edit button clicked...");
        console.log(data);
    }

    OnClick_Delete(data){
        console.log("Delete button clicked...");
        console.log(data);
    }
}

export interface CustomColumn{
    position : number;
    name : string;
    flag : string;
}
