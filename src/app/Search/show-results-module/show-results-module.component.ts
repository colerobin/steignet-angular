import { Component, OnInit, Input,Renderer } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-show-results-module',
  templateUrl: './show-results-module.component.html',
  styleUrls: ['./show-results-module.component.scss']
})
export class ShowResultsModuleComponent implements OnInit {

  data: any[];
  tab: number = 1;
  @Input() results;
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

     $('html').click(function(e){
       $('.msl_id').next().hide();
       if($(e.target).hasClass('msl_id'))
         $(e.target).next().show();
     });
  }

  showFinancial() {
    return this.tab === 1;
  }

  showTab(idx) {
    this.tab = idx;
  }

  getTableData() {
    return this.data[this.tab];
  }
  sorts(type, event){
    
    let target = event.target;

    if($(target).hasClass('showafter')){
      $(target).removeClass('showafter');
      $(target).addClass('showbefore');
      this.results.sort(function(a,b){
        return  a[type] - b[type];
      });
    }
    else if($(target).hasClass('showbefore')){
      $(target).removeClass('showbefore');
      $(target).addClass('showafter');
      this.results.sort(function(a,b){
        return  b[type] - a[type];
      });
    }
    else{
      $('th').removeClass('showbefore');
      $('th').removeClass('showafter');
      $(target).addClass('showbefore');
      this.results.sort(function(a,b){
        return  a[type] - b[type];
      });
    }
  }
  onMouseDown(event){
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
