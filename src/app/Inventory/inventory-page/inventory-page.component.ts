import { Component, OnInit } from '@angular/core';

import { inventory_tables, inventory_charts } from '../../../dummy/inventory';

declare var $: any;

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {

  inventory_tables: any[];
  inventory_charts: any[];

  constructor() { }

  ngOnInit() {
    Object.assign(this, {
      inventory_tables,
      inventory_charts
    })
    $("#sortablea").sortable();
    $("#sortableb").sortable();
  }

}
