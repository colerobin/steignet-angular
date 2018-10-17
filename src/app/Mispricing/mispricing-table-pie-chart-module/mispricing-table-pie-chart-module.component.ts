import { Component, OnInit, Input, Renderer} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-mispricing-table-pie-chart-module',
  templateUrl: './mispricing-table-pie-chart-module.component.html',
  styleUrls: ['./mispricing-table-pie-chart-module.component.scss']
})
export class MispricingTablePieChartModuleComponent implements OnInit {
  @Input() data: any[];
  @Input() title: any;
  public output: any[];
  public total: any[];
  public rowtotal: any[];
  public ATLChartData;
  public PHLChartData;
  public SouthFLChartData;
  public selectedDate = '2017-01-01';
  public start;
  public pressed;
  public startX;
  public startWidth;
  public rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: (new Date() as any)['fp_incr'](10)
  };
  view: any[] = [300, 300];
  view1: any[] = [250, 250];
  colorScheme: any;
  animations: boolean = false;
  showLegend = true;
  noshowLegend = false;
  legendTitle = '';
  gradient = false;
  tooltipDisabled = true;

  //pie
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  arcWidth = 0.2;
  constructor(public renderer: Renderer) { }

  ngOnInit() {
  	this.colorScheme = {
      name: 'cool',
      domain: [
        '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
      ]
    };
  	this.data = [
        ['ATL', 200000, '0.38%', '0.05%', '0.04%', '0.03%', '0.12%', '0.01%', '0.02%'],
        ['PHL', 177000, '0.23%', '0.12%', '0.08%', '0.06%', '0.02%', '0.05%', '0.09%'],
        ['South FL', 110000, '0.23%', '0.06%', '0.03%', '0.03%', '0.03%', '0.02%', '0.00%'],
    ];
    this.output = [];
    console.log(this.data);
    let i,j;
    for(i = 0; i < 3; i ++)
    	this.output[i] = [];
 	for(i = 0; i < 3; i ++){
 		for(j = 2; j < 9; j++)
 		{
 			let temp = this.data[i][j].replace('%','');
 			this.output[i][j - 2] = parseFloat(temp)*this.data[i][1];
 		}
 	}
 	console.log(this.output);
 	this.total = [];
 	this.rowtotal = [];
 	this.rowtotal[0] = 0;
 	this.rowtotal[1] = 0;
 	this.rowtotal[2] = 0;
 	this.rowtotal[3] = 0;
 	for(i = 0; i < 7; i ++){
 		this.total[i] = this.output[0][i] + this.output[1][i] + this.output[2][i];
 		this.rowtotal[3] += this.total[i];
 		this.rowtotal[0] += this.output[0][i];
 		this.rowtotal[1] += this.output[1][i];
 		this.rowtotal[2] += this.output[2][i];

 	}
 	this.ATLChartData = {
		name: 'ATL'
	};
	this.ATLChartData['data'] = [];
	this.PHLChartData = {
		name: 'PHL'
	};
	this.PHLChartData['data'] = [];
	this.SouthFLChartData = {
		name: 'SouthFL'
	};
	this.SouthFLChartData['data'] = [];
	let rows = ['-5%','5%-10%','10%-15%','15%-20%','20%-25%','25-30%','30%-']
 	for(i = 0; i < 7; i ++){
 		this.ATLChartData['data'][i] = {
 			name: rows[i],
 			value: this.output[0][i]
 		};
 		this.PHLChartData['data'][i] = {
 			name: rows[i],
 			value: this.output[1][i]
 		}
 		this.SouthFLChartData['data'][i] = {
 			name: rows[i],
 			value: this.output[2][i]
 		}
 	}
 	console.log(this.ATLChartData.data);
 	console.log(this.PHLChartData.data);
 	console.log(this.SouthFLChartData.data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  pieTooltipText({ data }) {

    return `
      <span class="tooltip-label">${data.name}</span>
      <span class="tooltip-val">$${data.value}</span>
    `;
  }

  dblclick(event) {
    console.log('Doube click', event);
  }

  select(data) {
    console.log('Item clicked', data);
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
