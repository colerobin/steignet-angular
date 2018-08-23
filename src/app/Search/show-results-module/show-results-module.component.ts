import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-results-module',
  templateUrl: './show-results-module.component.html',
  styleUrls: ['./show-results-module.component.scss']
})
export class ShowResultsModuleComponent implements OnInit {

  data: any[];
  tab: number = 1;

  constructor() { }

  ngOnInit() {
  }

  showFinancial() {
    return this.tab === 1;
  }

  showTab(idx) {
    this.tab = idx;
  }

  getTableData() {
    return this.data[this.tab];
  }
}
