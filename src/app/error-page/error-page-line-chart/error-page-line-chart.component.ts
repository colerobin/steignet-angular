import { Component, OnInit, Input } from '@angular/core';

import { dailyerroroverview_data, databasedailyoverview_data, mlsdailyoverview_data, totalerroroverview_data } from '../../../dummy/errorpage';

@Component({
  selector: 'app-error-page-line-chart',
  templateUrl: './error-page-line-chart.component.html',
  styleUrls: ['./error-page-line-chart.component.scss']
})
export class ErrorPageLineChartComponent implements OnInit {

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
  xAxisLabel = '';
  yAxisTicks = [100000, 200000, 300000];
  xAxisTicks = [];
  showYAxisLabel = true;
  yAxisLabel = '';
  public rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  colorScheme = {
    domain: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#FF6D00', '#46BDC6']
  };

  constructor() { 
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
      this.chart_title = "Database Daily Overview";
      this.chart_data = databasedailyoverview_data;
      Object.assign(this, {databasedailyoverview_data});
      this.yAxisTicks = [0, 5000000, 10000000, 15000000];
      this.xAxisTicks = ["07-26-2018", "07-27-2018", "07-28-2018", "07-29-2018", "07-30-2018", "07-31-2018", "08-01-2018"];
    }
    else if (this.chart == "R2"){
      this.chart_title = "Daily Error Overview";
      this.chart_data = dailyerroroverview_data;
      Object.assign(this, {dailyerroroverview_data});
      this.yAxisTicks = [-4000000, -3000000, -2000000, -1000000, 0];
      this.xAxisTicks = ["07-26-2018", "07-27-2018", "07-28-2018", "07-29-2018", "07-30-2018", "07-31-2018", "08-01-2018"];
    }
    else if (this.chart == "R3"){
      this.chart_title = "MLS Error Overview";
      this.chart_data = mlsdailyoverview_data;
      Object.assign(this, {mlsdailyoverview_data});
      this.yAxisTicks = [0, 5000000, 10000000, 15000000, 20000000];
      this.xAxisTicks = ["07-26-2018", "07-27-2018", "07-28-2018", "07-29-2018", "07-30-2018", "07-31-2018", "08-01-2018"];
    }
    else if (this.chart == "R4"){
      this.chart_title = "Change in Total Error with Time";
      this.chart_data = totalerroroverview_data;
      Object.assign(this, {totalerroroverview_data});
      this.yAxisTicks = [0, 1000000, 2000000, 3000000, 4000000, 5000000];
      this.xAxisTicks = ["07-26-2018", "07-27-2018", "07-28-2018", "07-29-2018", "07-30-2018", "07-31-2018", "08-01-2018"];
      this.showLegend = false;
    }
  }
  
  formatText(val) {
    return Number(val).toLocaleString('en-GB');
  }

}
