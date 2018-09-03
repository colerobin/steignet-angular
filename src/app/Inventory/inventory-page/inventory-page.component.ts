import { Component, OnInit } from '@angular/core';

import { inventory_tables, inventory_charts } from '../../../dummy/inventory';

import { Globals } from '../../globals';

declare var $: any;

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent implements OnInit {

  inventory_tables: any[];
  inventory_charts: any[];

  isLoaded = true;

  private backend_url: string;

  constructor(private globals: Globals) { 
    this.backend_url = globals.backend_url;
  }

  ngOnInit() {
    var master;
    $.ajax({
      url: this.backend_url+'/master-inventory',
      method: 'get',
      success: function(result){
        master = result.split("\n");
        for (var i = master.length - 1; i >= 0; i--) {
          master[i] = master[i].split(",");
        }
        var temp = inventory_tables[0]['data'][1][2];
        inventory_tables[0]['data'] = master;
        this.isLoaded = true;
        Object.assign(this, {
          inventory_tables,
          inventory_charts
        })
        $("#sortablea").sortable();
        $("#sortableb").sortable();
      }
    });
    Object.assign(this, {
      inventory_tables,
      inventory_charts
    })
    $("#sortablea").sortable();
    $("#sortableb").sortable();
  }

}
