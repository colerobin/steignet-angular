import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-search-module',
  templateUrl: './status-search-module.component.html',
  styleUrls: ['./status-search-module.component.scss']
})
export class StatusSearchModuleComponent implements OnInit {

  @Output() status_result = new EventEmitter();



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
    this.status_result.emit({status: this.labels[0]});
  }

  selectStatus(i) {
    this.index = i;
    this.status_result.emit({status: this.labels[i]});
  }

}
