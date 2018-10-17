import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryPageComponent } from './Inventory/inventory-page/inventory-page.component';
import { RentalInventoryPageComponent } from './Inventory/rental-inventory-page/inventory-page.component';
import { MispricingPageComponent } from './Mispricing/mispricing-page/mispricing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorDailyPageComponent } from './error-page/error-daily-page/error-daily-page.component';
import { ErrorDetailsPageComponent } from './error-page/error-details-page/error-details-page.component';
import { ErrorErrorPageComponent } from './error-page/error-error-page/error-error-page.component';
import { ErrorMLSPageComponent } from './error-page/error-mls-page/error-mls-page.component';
import { SearchPageComponent } from './Search/search-page/search-page.component';
import { LoginPageComponent } from './login/login.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory-master',
    component: InventoryPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory-rental',
    component: RentalInventoryPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mispricing',
    component: MispricingPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error-mls',
    component: ErrorMLSPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error-details',
    component: ErrorDetailsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error-error',
    component: ErrorErrorPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error-daily',
    component: ErrorDailyPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: '/mispricing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
