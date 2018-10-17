import { Component, OnInit, Input, Renderer} from '@angular/core';
declare var $: any;
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
  public start;
  public pressed;
  public startX;
  public startWidth;
  public rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  constructor(public renderer: Renderer) { }

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
