import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mispricing-table-module1',
  templateUrl: './mispricing-table-module1.component.html',
  styleUrls: ['./mispricing-table-module1.component.scss']
})
export class MispricingTableModule1Component implements OnInit {

  @Input() title: string;
  @Input() data: any[];

  total = 307923;

  constructor() { }

  ngOnInit() {
    this.data = [
      [
        ['ATL', 20000, '0.38%', '0.05%', '0.04%', '0.03%', '0.00%', '0.00%', '0.02%'],
        ['FMLS', 10000, '0.50%', '0.02%', '0.01%', '0.00%', '0.00%', '0.00%', '0.00%'],
        ['Craigslist ATL', 10000, '0.25%', '0.08%', '0.06%', '0.05%', '0.00%', '0.00%', '0.03%']
      ],
      [
        ['PHL', 177000, '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%'],
        ['Trend', 90000, '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%'],
        ['Craigslist PHL', 87000, '0.01%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%']
      ],
      [
        ['South FL', 110923, '0.23%', '0.06%', '0.03%', '0.03%', '0.03%', '0.02%', '0.00%'],
        ['South FL MLS', 20923, '1.12%', '0.24%', '0.15%', '0.14%', '0.14%', '0.12%', '0.00%'],
        ['Craigslist South FL', 90000, '0.03%', '0.02%', '0.00%', '0.00%', '0.00%', '0.00%', '0.00%']
      ]
    ]
  }

  formatText(val) {
    return Number(val).toLocaleString('en-GB');
  }
}
