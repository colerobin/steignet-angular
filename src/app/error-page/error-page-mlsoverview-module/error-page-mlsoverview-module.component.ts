import { Component, OnInit, Input, Renderer } from '@angular/core';

import { stackedChart_tables } from '../../../dummy/errorpage';
declare var $: any;
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
   public start;
  public pressed;
  public startX;
  public startWidth;
  public rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  colorScheme = {
    domain: ['#CD900A', '#2FCBD5', '#0E5EFD', '#AAAAAA']
  };

  constructor(public renderer: Renderer) { 
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
  onMouseDown(event){
    event.preventDefault();
    event.stopPropagation();
    this.start = event.target;
    this.pressed = true;
    this.startX = event.x;
    this.startWidth = $(this.start).parent().width();
    this.initResizableColumns();
  }
  initResizableColumns() {
       this.renderer.listenGlobal('body', 'mousemove', (event) => {
          if(this.pressed) {
             let width = this.startWidth + (event.x - this.startX);
             $(this.start).parent().css({'min-width': width, 'max-   width': width});
             let index = $(this.start).parent().index() + 1;
             $('.glowTableBody tr td:nth-child(' + index + ')').css({'min-width': width, 'max-width': width});
          }
       });
       this.renderer.listenGlobal('body', 'mouseup', (event) => {
       if(this.pressed) {
           this.pressed = false;
       }
     });
  }
}
