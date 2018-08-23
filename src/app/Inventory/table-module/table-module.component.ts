import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.scss']
})
export class TableModuleComponent implements OnInit {

  @Input() title : string;
  @Input() data : any[];

  tableLength: number = 0;
  totalRow: any[];
  totalCol: any[];
  totalSum: number = 0;

  constructor() { }

  ngOnInit() {
    this.tableLength = this.data[0].length;
    this.totalCol = new Array(this.data.length - 1);
    this.totalRow = new Array(this.tableLength).fill(0);
    for(let i = 1; i < this.data.length; i ++) {
      let line = this.data[i];
      let temp = 0;
      for (let j = 1; j < line.length; j ++) {
        temp += line[j];
        this.totalRow[j] += line[j];
      }
      this.totalCol[i] = temp;
      this.totalSum += temp;
    }
  }

  formatText(val) {
    if (val === 0) {
      return '-';
    }
    return Number(val).toLocaleString('en-GB');
  }

}
