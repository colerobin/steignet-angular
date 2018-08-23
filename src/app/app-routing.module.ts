import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryPageComponent } from './Inventory/inventory-page/inventory-page.component';
import { MispricingPageComponent } from './Mispricing/mispricing-page/mispricing-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
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
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: '/inventory'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
