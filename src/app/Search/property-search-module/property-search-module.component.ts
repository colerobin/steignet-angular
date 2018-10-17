import { Component, OnInit, Output,EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-property-search-module',
  templateUrl: './property-search-module.component.html',
  styleUrls: ['./property-search-module.component.scss']
})
export class PropertySearchModuleComponent implements OnInit {


	@Output() property_result = new EventEmitter();

	public total_bedroom_value;
	public total_bathroom_value;
	public sqft_value;
	public yearbuilt_value;
	public price_value;
	public listsourceid_value;
	public property_type_value;
	
	constructor() { }

	ngOnInit() {
		this.property_type_value = "deattach"
		this.total_bedroom_value="";
		this.total_bathroom_value="";
		this.sqft_value="";
		this.yearbuilt_value="";
		this.price_value="";
		this.listsourceid_value="";
		this.property_result.emit({property_type: this.property_type_value, 
									total_bedroom: this.total_bedroom_value,
									total_bathroom: this.total_bathroom_value,
									sqft: this.sqft_value,
									yearbuilt: this.yearbuilt_value,
									price: this.price_value,
									listsourceid: this.listsourceid_value});
	}
	attachselect() {
		$('.radio-property').removeClass('radio-selected');
		$('#attachdiv').addClass('radio-selected');
		this.property_type_value = "attach"
	}
	deattachselect(){
		$('.radio-property').removeClass('radio-selected');
		$('#deattachdiv').addClass('radio-selected');
		this.property_type_value = "deattach"
	}
	valuechange(){

		this.property_result.emit({property_type: this.property_type_value, 
									total_bedroom: this.total_bedroom_value,
									total_bathroom: this.total_bathroom_value,
									sqft: this.sqft_value,
									yearbuilt: this.yearbuilt_value,
									price: this.price_value,
									listsourceid: this.listsourceid_value});

	}

}
