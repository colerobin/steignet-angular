import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-search-module',
  templateUrl: './location-search-module.component.html',
  styleUrls: ['./location-search-module.component.scss']
})
export class LocationSearchModuleComponent implements OnInit {

	@Output() location_result = new EventEmitter();

	public within_value;
	public miles_value;
	public country_value;
	public area_value;
	public city_value;
	public subdivision_value;
	public zipcode_value;
	public stnum_value;
	public dirpix_value;
	public stname_value;
	public stsfx_value;
	public dirsfx_value;
	public unitnum_value;
	public eleschool_value;
	public midschool_value;
	public highschool_value;

	constructor() { }

	ngOnInit() {
		this.within_value="";
		this.miles_value="";
		this.country_value="";
		this.area_value="";
		this.city_value="";
		this.subdivision_value="";
		this.zipcode_value="";
		this.stnum_value="";
		this.dirpix_value="";
		this.stname_value="";
		this.stsfx_value="";
		this.dirsfx_value="";
		this.unitnum_value="";
		this.eleschool_value="";
		this.midschool_value="";
		this.highschool_value="";
		this.location_result.emit({within: this.within_value,
									miles: this.miles_value,
									country: this.country_value,
									area: this.area_value,
									city: this.city_value,
									subdivision: this.subdivision_value,
									zipcode: this.zipcode_value,
									stnum: this.stnum_value,
									dirpix: this.dirpix_value,
									stname: this.stname_value,
									stsfx: this.stsfx_value,
									dirsfx: this.dirsfx_value,
									unitnum: this.unitnum_value,
									eleschool: this.eleschool_value,
									midschool: this.midschool_value,
									highschool: this.highschool_value});
	}

	valuechange(){
		this.location_result.emit({within: this.within_value,
									miles: this.miles_value,
									country: this.country_value,
									area: this.area_value,
									city: this.city_value,
									subdivision: this.subdivision_value,
									zipcode: this.zipcode_value,
									stnum: this.stnum_value,
									dirpix: this.dirpix_value,
									stname: this.stname_value,
									stsfx: this.stsfx_value,
									dirsfx: this.dirsfx_value,
									unitnum: this.unitnum_value,
									eleschool: this.eleschool_value,
									midschool: this.midschool_value,
									highschool: this.highschool_value});
	}
}
