import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-error-mls-page',
  templateUrl: './error-mls-page.component.html',
  styleUrls: ['./error-mls-page.component.scss']
})
export class ErrorMLSPageComponent implements OnInit {

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
