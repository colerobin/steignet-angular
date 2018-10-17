import { Component, OnInit, NgModule } from '@angular/core';
import { Globals } from '../../globals';

declare var $: any;
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})



export class SearchPageComponent implements OnInit {


  showResult: boolean = false;
  public backend_url: string;

  public property;
  public location;
  public remark;
  public status;
  public return_result;

  constructor(public globals: Globals) { 
    this.backend_url = globals.backend_url;
  }

  ngOnInit() {
  }
  searchResult() {
  	console.log(this.property);
    let out = this;
    $.ajax({
      url: this.backend_url+'/api/steignet-search',
      method: 'post',
      data: {
        type: this.property.property_type,
        total_bedroom: this.property.property_bedroom,
        total_bathroom: this.property.total_bathroom,
        sqft: this.property.sqft,
        yearbuilt: this.property.yearbuilt,
        listsourceid: this.property.listsourceid,
        public_remark: this.remark.public_remark,
        private_remark: this.remark.private_remark,
        within: this.location.within,
        milesof: this.location.miles,
        country: this.location.country,
        area: this.location.area,
        city: this.location.city,
        subdivision: this.location.subdivision,
        zipcode: this.location.zipcode,
        streetnumber: this.location.stnum,
        dirpix: this.location.dirpix,
        streetname: this.location.stname,
        st_sfx: this.location.stsfx,
        dir_sfx: this.location.dirsfx,
        unitnumber: this.location.unitnum,
        elementschool: this.location.eleschool,
        middleschool: this.location.midschool,
        highschool: this.location.highschool,
        status: this.status.status

      },
      success: function(result){
        out.return_result = result.slice(0, 10);
        out.showResult = true;
        console.log(result);
      }
    });
  }
  location_result($event){
    this.location = $event;
  }
  remark_result($event){
    this.remark = $event;
  }
  status_result($event){
    this.status = $event;
  }
  property_result($event){
    this.property = $event;
  }

}
