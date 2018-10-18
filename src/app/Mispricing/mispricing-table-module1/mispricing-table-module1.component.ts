import { Component, OnInit, Input, Renderer } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-mispricing-table-module1',
  templateUrl: './mispricing-table-module1.component.html',
  styleUrls: ['./mispricing-table-module1.component.scss']
})
export class MispricingTableModule1Component implements OnInit {

  @Input() title: string;
  @Input() data: any[];

  total = 307923;
  public rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  public start;
  public pressed;
  public startX;
  public startWidth;
  constructor(public renderer: Renderer) { }

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
