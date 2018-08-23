import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-chart-module',
  templateUrl: './inventory-chart-module.component.html',
  styleUrls: ['./inventory-chart-module.component.scss']
})
export class InventoryChartModuleComponent implements OnInit {

  @Input() title: string;
  @Input() data: any[];

  colorScheme: any;
  animations: boolean = false;
  showLegend = true;
  legendTitle = '';
  gradient = false;
  tooltipDisabled = true;

  //pie
  showLabels = false;
  explodeSlices = false;
  doughnut = true;
  arcWidth = 0.2;

  constructor() { }

  ngOnInit() {
    this.colorScheme = {
      name: 'cool',
      domain: [
        '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
      ]
    };
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

}
