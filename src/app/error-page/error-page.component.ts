import { Component, OnInit, Input } from '@angular/core';
import { stackedChart_residential, stackedChart_rental } from '../../dummy/errorpage';

declare var $: any;

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  residential = "R1";
  rental = "R2";

  database = "R1";
  daily = "R2";
  mls = "R3";
  totalerror = "R4";

  constructor() { }

  ngOnInit() {
    $('#sortable').sortable();
  }

}
