import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services';

import { Globals } from '../globals';

import {
    AuthService,
    GoogleLoginProvider
} from 'angular-6-social-login';

declare var $: any;


@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginPageComponent implements OnInit {

	loading = false;
	returnUrl: string;

  private backend_url: string;

  constructor( private globals: Globals,
  		        private route: ActivatedRoute,
  		        private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private socialAuthService: AuthService) { 
    this.backend_url = globals.backend_url;
  }

  ngOnInit() {
  	this.authenticationService.logout();
  	$("#container").html($(".login-page-container"));
  	this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }
  

  onSubmit(username, password) {

    $.ajax({
      url: this.backend_url+'/login',
      method: 'get',
      data: {
        username: username,
        password: password
      },
      success: function(result){
        if (result == "success")
        {
          alert("Congratulations!");
          if (this.returnUrl == "")
          {
            this.returnUrl = "inventory";
          }
          localStorage.setItem("currentUser", "1");
          window.location.href = this.returnUrl;
        }
        else{
          alert("Incorrect!");
        }
      }
    });

  }
  logout() {
  	localStorage.removeItem("currentUser");
  }
}
