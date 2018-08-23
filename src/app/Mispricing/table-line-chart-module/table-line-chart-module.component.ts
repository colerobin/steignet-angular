import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-line-chart-module',
  templateUrl: './table-line-chart-module.component.html',
  styleUrls: ['./table-line-chart-module.component.scss']
})
export class TableLineChartModuleComponent implements OnInit {

  @Input() data: any[];

  tableLength: number = 0;
  totalRow: any[];
  totalCol: any[];
  totalSum: number = 0;

  colorScheme: any;
  barChartData: any[];
  animations: boolean = false;
  showLegend: boolean = true;
  legendTitle: string = '';
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  barPadding: number = 2;
  groupPadding: number = 8;
  yScaleMax = 250;

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

    let barChartData = [];
    for(let i = 1; i < this.tableLength; i ++) {
      let obj = {name: this.data[0][i], series: []}
      let series = [];
      for (let j = 1; j < this.data.length; j ++) {
        series.push({
          name: this.data[j][0],
          value: this.data[j][i]
        })
      }
      Object.assign(obj, {
        series
      })
      barChartData.push(obj);
    }
    Object.assign(this, {
      barChartData
    })

    this.colorScheme = {
      name: 'cool',
      domain: [
        '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
      ]
    };
  }

  formatText(val) {
    if (val === 0) {
      return '-';
    }
    return Number(val).toLocaleString('en-GB');
  }

}
