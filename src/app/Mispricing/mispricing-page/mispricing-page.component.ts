import { Component, OnInit } from '@angular/core';

import { lineChartData, tableLineChartData } from '../../../dummy/mispricing';

declare var $: any;

@Component({
  selector: 'app-mispricing-page',
  templateUrl: './mispricing-page.component.html',
  styleUrls: ['./mispricing-page.component.scss']
})
export class MispricingPageComponent implements OnInit {

  lineChartData: any[];
  tableLineChartData: any[];
  tablePieChartData: any[];

  constructor() { }

  ngOnInit() {
    Object.assign(this, {
      lineChartData,
      tableLineChartData
    })
    $('#sortable').sortable();
  }

}
