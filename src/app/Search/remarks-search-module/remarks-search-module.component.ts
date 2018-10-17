import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remarks-search-module',
  templateUrl: './remarks-search-module.component.html',
  styleUrls: ['./remarks-search-module.component.scss']
})
export class RemarksSearchModuleComponent implements OnInit {

	@Output() remark_result = new EventEmitter();
	public public_remark_value;
	public private_remark_value;
	constructor() { }

	ngOnInit() {
		this.public_remark_value = "";
		this.public_remark_value = "";
		this.remark_result.emit({
			public_remark: this.public_remark_value,
			private_remark: this.private_remark_value
		});
	}
	valuechange(){
		this.remark_result.emit({
			public_remark: this.public_remark_value,
			private_remark: this.private_remark_value
		});
	}

}
