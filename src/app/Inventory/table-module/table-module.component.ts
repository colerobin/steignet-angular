import { Component, OnInit, Input, Renderer} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.scss']
})
export class TableModuleComponent implements OnInit {

  @Input() title : string;
  @Input() data : any[];

  tableLength: number = 0;
  totalRow: any[];
  totalCol: any[];
  totalSum: number = 0;
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

    $('tr').each(function(){
      if($(this).parent().parent().attr('title') == "AVM Inventory Checker"){
        if(parseInt($('td', $(this)).eq(1).html()) > parseInt($('td', $(this)).eq(2).html())){
          $('td', $(this)).eq(2).css('color','red');
        }
        if(parseInt($('td', $(this)).eq(1).html()) > parseInt($('td', $(this)).eq(3).html())){
          $('td', $(this)).eq(3).css('color','red');
        }
      }
    });
  }

  formatText(val) {
    if (val === 0) {
      return '-';
    }
    return Number(val).toLocaleString('en-GB');
  }
  
}
