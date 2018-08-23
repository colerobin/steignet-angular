import { Component, OnInit, Input } from '@angular/core';

import * as shape from 'd3-shape';

@Component({
  selector: 'app-line-chart-module',
  templateUrl: './line-chart-module.component.html',
  styleUrls: ['./line-chart-module.component.scss']
})
export class LineChartModuleComponent implements OnInit {

  @Input() data: any;

  colorScheme: any;
  schemeType: string = 'ordinal';
  animations: boolean = false;
  showLegend: boolean = true;
  showXAxis = true;
  showYAxis = true;
  tooltipDisabled = false;
  gradient = false;
  autoScale = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  timeline = false;
  showGridLines = true;
  curve: any = shape.curveLinear;
  roundDomains = false;

  constructor() { }

  ngOnInit() {
    this.colorScheme = {
      name: 'cool',
      domain: [
        '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
      ]
    };
  }

}
