import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mispricing-table-pie-chart-module',
  templateUrl: './mispricing-table-pie-chart-module.component.html',
  styleUrls: ['./mispricing-table-pie-chart-module.component.scss']
})
export class MispricingTablePieChartModuleComponent implements OnInit {
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
