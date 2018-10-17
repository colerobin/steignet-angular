import { Component, OnInit, Input, Renderer} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-mispricing-table-module2',
  templateUrl: './mispricing-table-module2.component.html',
  styleUrls: ['./mispricing-table-module2.component.scss']
})
export class MispricingTableModule2Component implements OnInit {

  @Input() data: any[];
  dataATL: any[];
  dataPHL: any[];
  dataFLR: any[];
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
    this.dataATL = [
      [2345222, 2150000, 2150000, 1950000, -200000, -200000, -9, -9,175000,170000,172500,22500],
      [3523555, 250000, 200000, 179000, -21000, -71000, -9, -9, 179000,179000,179000,0],
      [1289244, 89000, 75000, 75000, 0, -14000, -9, -9,69000,74000,71500,-3500],
      [2345323, 350000, 325000, 430000, 105000, 80000, 32, 23,298000,376000,337000,12000],
      [3333333, 265000, 240000, 1850000, -55000, -80000, -23, -30,167000,205000,186000,1000],
      [2342343, 146000, 98000, 950000, -3000, -51000, -3, -35,95000,97000,96000,1000],
      [2343322, 750000, 500000, 439000, -61000, -311000, -12, -41,650000,625000,637500,137500],
      [9876236, 453430, 259000, 246000, -13000, -207430, -5, -46,279000,289000,284000,38000],
      [23423522, 479000, 425000, 375000, -50000, -104000, -12, -22,300000,315000,307500,-67500],
      [65292002, 680000, 625000, 620000, -5000, -60000, -1, -9,576000,562000,569000,-51000]
    ];
    this.dataPHL = [
      [2345222, 2150000, 2150000, 1950000, -200000, -200000, -9, -9],
      [3523555, 250000, 200000, 179000, -21000, -71000, -9, -9],
      [1289244, 89000, 75000, 75000, 0, -14000, -9, -9],
      [2345323, 350000, 325000, 430000, 105000, 80000, 32, 23],
      [3333333, 265000, 240000, 1850000, -55000, -80000, -23, -30],
      [2342343, 146000, 98000, 950000, -3000, -51000, -3, -35],
      [2343322, 750000, 500000, 439000, -61000, -311000, -12, -41],
      [9876236, 453430, 259000, 246000, -13000, -207430, -5, -46],
      [23423522, 479000, 425000, 375000, -50000, -104000, -12, -22],
      [65292002, 680000, 625000, 620000, -5000, -60000, -1, -98]
    ];
    this.dataFLR = [
      [2345222, 2150000, 2150000, 1950000, -200000, -200000, -9, -9],
      [3523555, 250000, 200000, 179000, -21000, -71000, -9, -9],
      [1289244, 89000, 75000, 75000, 0, -14000, -9, -9],
      [2345323, 350000, 325000, 430000, 105000, 80000, 32, 23],
      [3333333, 265000, 240000, 1850000, -55000, -80000, -23, -30],
      [2342343, 146000, 98000, 950000, -3000, -51000, -3, -35],
      [2343322, 750000, 500000, 439000, -61000, -311000, -12, -41],
      [9876236, 453430, 259000, 246000, -13000, -207430, -5, -46],
      [23423522, 479000, 425000, 375000, -50000, -104000, -12, -22],
      [65292002, 680000, 625000, 620000, -5000, -60000, -1, -97]
    ];
    this.data = this.dataATL;
    $(document).ready(function(){
      $('.total_value').each(function(){
        let value = $(this).text();
        value = value.replace('$','');
        value = value.replace(',','');
        let value_int = parseInt(value);
        if(value_int > 0)
          $(this).css('color','red');
        else if(value_int < 0)
          $(this).css('color','green');
        else if(value_int == 0)
          $(this).css('color','white');
      });
    });
  }

  formatPrice(price) {
    let prefix = '$';
    if (price < 0) {
      prefix = '-$';
      price = -price;
    }
    return prefix + Number(price).toLocaleString('en-GB');
  }

  formatPercent(percent) {
    return Number(percent).toLocaleString('en-GB') + '%';
  }

  selectATL() {
    this.data = this.dataATL;
  }

  selectPHL() {
    this.data = this.dataPHL;
  }

  selectFLR() {
    this.data = this.dataFLR;
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
