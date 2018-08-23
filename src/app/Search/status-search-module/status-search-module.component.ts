import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-search-module',
  templateUrl: './status-search-module.component.html',
  styleUrls: ['./status-search-module.component.scss']
})
export class StatusSearchModuleComponent implements OnInit {

  labels: any[] = [
    'Active',
    'Contingent-Due Diligence',
    'Contingent-KO',
    'Contingent-Other',
    'Pending',
    'Pending Offer Approval',
    'Withdrawn',
    'Sold',
    'Expired'
  ];
  index: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectStatus(i) {
    this.index = i;
  }

}
