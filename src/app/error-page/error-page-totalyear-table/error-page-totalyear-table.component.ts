import { Component, OnInit, Input } from '@angular/core';

import { totalyear_residential, totalyear_rental } from '../../../dummy/errorpage';

@Component({
  selector: 'app-error-page-totalyear-table',
  templateUrl: './error-page-totalyear-table.component.html',
  styleUrls: ['./error-page-totalyear-table.component.scss']
})
export class ErrorPageTotalYearComponent implements OnInit {

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
  yAxisTicks = [100000, 200000, 300000];
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = {
    domain: ['#4285F4']
  };

  constructor() { 
    Object.assign(this, {totalyear_residential})
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
      this.chart_data = totalyear_residential;
      this.chart_title = "Total Yearly Error for Residential";
      Object.assign(this, {totalyear_residential});
      this.yAxisTicks = [100000, 200000, 300000, 400000, 500000];
      this.xAxisLabel = this.chart_title;
    }
    else if (this.chart == "R2") {
      this.chart_data = totalyear_rental;
      this.chart_title = "Total Yearly Error for Rental"
      Object.assign(this, {totalyear_rental});
      this.yAxisTicks = [100000, 200000, 300000];
      this.xAxisLabel = this.chart_title;
    }
  }
  
  formatText(val) {
    return Number(val).toLocaleString('en-GB');
  }

}
