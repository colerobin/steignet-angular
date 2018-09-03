import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-error-error-page',
  templateUrl: './error-error-page.component.html',
  styleUrls: ['./error-error-page.component.scss']
})
export class ErrorErrorPageComponent implements OnInit {

  residential = "R1";
  rental = "R2";

  database = "R1";
  daily = "R2";
  mls = "R3";
  totalerror = "R4";

  constructor() { }

  ngOnInit() {
    $('#sortable').sortable();
    $('.error-page-unit').resizable();
  }

}
