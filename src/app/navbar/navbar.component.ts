import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  router = null;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

  calculateClasses(route) {
    return {
      navbtn: true,
      navActive: this.router.url === route
    };
  }

}
