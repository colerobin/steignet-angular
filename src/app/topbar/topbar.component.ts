import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

declare var $: any;

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  private backend_url: string;

  constructor(private globals: Globals) { 
    this.backend_url = globals.backend_url;
  }


  ngOnInit() {
  }
  goto_homepage() {
    window.location.href = "mispricing"
  }
  passthrough_link(){
  	$.ajax({
      url: this.backend_url+'/api/passthrough',
      method: 'get',
      success: function(url){
      	window.location.href = url;
      }
  	});
  }
}
