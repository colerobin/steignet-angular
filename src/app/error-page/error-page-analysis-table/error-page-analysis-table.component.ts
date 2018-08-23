import { Component, OnInit, Input } from '@angular/core';

import { stackedChart_residential, stackedChart_rental } from '../../../dummy/errorpage';

@Component({
  selector: 'app-error-page-analysis-table',
  templateUrl: './error-page-analysis-table.component.html',
  styleUrls: ['./error-page-analysis-table.component.scss']
})
export class ErrorPageAnalysisComponent implements OnInit {

  @Input() data: any[];
  @Input('chart') chart: string;
  chart_title: string;
  chart_data: any[];

  view: any[] = [700, 500];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  legendTitle: string = '';
  showGridLines = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = '';
  yAxisTicks: any[] = [0, 25, 50, 75, 100];

  colorScheme = {
    domain: ['#CD900A', '#2FCBD5', '#0E5EFD', '#AAAAAA']
  };

  constructor() { 
    Object.assign(this, {stackedChart_rental})
  }

  ngOnInit() {
    this.data = [
      [
        ['Residential', 1321248, 2209231, 2221416, 5751895],
        ['Rental', 1173000, 1481479, 505707, 3160186],
        ['Total', 2494248, 3690710, 2727123, 8912081]
      ]
    ]
    if (this.chart == "R1"){
      this.chart_data = stackedChart_residential;
      this.chart_title = "Residential Listings Analysis by MLS";
      Object.assign(this, {stackedChart_residential});
    }
    else if (this.chart == "R2") {
      this.chart_data = stackedChart_rental;
      this.chart_title = "Rental Listings Analysis by MLS"
      Object.assign(this, {stackedChart_rental});
    }
  }
  
  formatText(val) {
    return Number(val).toLocaleString('en-GB');
  }

}
