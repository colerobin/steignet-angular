import { Component, OnInit, Input } from '@angular/core';

import { stackedChart_tables } from '../../../dummy/errorpage';

@Component({
  selector: 'app-error-page-mlsoverview-module',
  templateUrl: './error-page-mlsoverview-module.component.html',
  styleUrls: ['./error-page-mlsoverview-module.component.scss']
})
export class ErrorPageMLSOverviewComponent implements OnInit {

  @Input() data: any[];

  stackedChart_tables: any[];

  view: any[] = [700, 500];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  legendTitle: string = '';
  showGridLines = true;
  xAxisLabel = 'Listing Type';
  showYAxisLabel = true;
  yAxisLabel = '';
  yAxisTicks: any[] = [0, 25, 50, 75, 100];


  colorScheme = {
    domain: ['#CD900A', '#2FCBD5', '#0E5EFD', '#AAAAAA']
  };

  constructor() { 
    Object.assign(this, {stackedChart_tables})
  }

  ngOnInit() {
    this.data = [
      [
        ['Residential', 1321248, 2209231, 2221416, 5751895],
        ['Rental', 1173000, 1481479, 505707, 3160186],
        ['Total', 2494248, 3690710, 2727123, 8912081]
      ]
    ]
  }
  
  formatText(val) {
    return Number(val).toLocaleString('en-GB');
  }

}
