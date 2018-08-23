import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services';

declare var $: any;


@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginPageComponent implements OnInit {

	loading = false;
	returnUrl: string;

  constructor(
  		private route: ActivatedRoute,
  		private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) { }

  ngOnInit() {
  	this.authenticationService.logout();
  	$("#container").html($(".login-page-container"));
  	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(username, password, googleauth) {
  	if (username == "admin" && password == "admin123")
  	{
  		if (this.returnUrl == "")
  		{
  			this.returnUrl = "inventory";
  		}
  		localStorage.setItem("currentUser", "1");
  		window.location.href = this.returnUrl;
  	}
  	else
  		alert("incorrect!");
  }
  logout() {
  	localStorage.removeItem("currentUser");
  }
}
