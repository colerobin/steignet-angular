import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { enableProdMode } from '@angular/core';
import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPageComponent } from './Search/search-page/search-page.component';
import { InventoryPageComponent } from './Inventory/inventory-page/inventory-page.component';
import { MispricingPageComponent } from './Mispricing/mispricing-page/mispricing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TableModuleComponent } from './Inventory/table-module/table-module.component';
import { InventoryChartModuleComponent } from './Inventory/inventory-chart-module/inventory-chart-module.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartModuleComponent } from './Mispricing/line-chart-module/line-chart-module.component';
import { MispricingTableModule1Component } from './Mispricing/mispricing-table-module1/mispricing-table-module1.component';
import { MispricingTableModule2Component } from './Mispricing/mispricing-table-module2/mispricing-table-module2.component';
import { TableLineChartModuleComponent } from './Mispricing/table-line-chart-module/table-line-chart-module.component';
import { MispricingTablePieChartModuleComponent } from './Mispricing/mispricing-table-pie-chart-module/mispricing-table-pie-chart-module.component';
import { PropertySearchModuleComponent } from './Search/property-search-module/property-search-module.component';
import { RemarksSearchModuleComponent } from './Search/remarks-search-module/remarks-search-module.component';
import { LocationSearchModuleComponent } from './Search/location-search-module/location-search-module.component';
import { StatusSearchModuleComponent } from './Search/status-search-module/status-search-module.component';
import { ShowResultsModuleComponent } from './Search/show-results-module/show-results-module.component';
import { ErrorPageMLSOverviewComponent } from './error-page/error-page-mlsoverview-module/error-page-mlsoverview-module.component';
import { ErrorPageAnalysisComponent } from './error-page/error-page-analysis-table/error-page-analysis-table.component';
import { ErrorPageTotalYearComponent } from './error-page/error-page-totalyear-table/error-page-totalyear-table.component';
import { ErrorPageLineChartComponent } from './error-page/error-page-line-chart/error-page-line-chart.component';
import { ErrorDailyPageComponent } from './error-page/error-daily-page/error-daily-page.component';
import { ErrorDetailsPageComponent } from './error-page/error-details-page/error-details-page.component';
import { ErrorErrorPageComponent } from './error-page/error-error-page/error-error-page.component';
import { ErrorMLSPageComponent } from './error-page/error-mls-page/error-mls-page.component';
import { LoginPageComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { AlertComponent } from './_directives';

import { Globals } from './globals';


enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    SearchPageComponent,
    InventoryPageComponent,
    MispricingPageComponent,
    ErrorPageComponent,
    TableModuleComponent,
    InventoryChartModuleComponent,
    LineChartModuleComponent,
    MispricingTableModule1Component,
    MispricingTableModule2Component,
    TableLineChartModuleComponent,
    MispricingTablePieChartModuleComponent,
    PropertySearchModuleComponent,
    RemarksSearchModuleComponent,
    LocationSearchModuleComponent,
    StatusSearchModuleComponent,
    ShowResultsModuleComponent,
    ErrorPageMLSOverviewComponent,
    ErrorPageAnalysisComponent,
    ErrorPageTotalYearComponent,
    ErrorPageLineChartComponent,
    ErrorDailyPageComponent,
    ErrorDetailsPageComponent,
    ErrorErrorPageComponent,
    ErrorMLSPageComponent,
    LoginPageComponent,
    AlertComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    Globals,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
