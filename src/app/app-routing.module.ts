import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { OrdersComponent } from './page/orders/orders.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orderDetail/:id', component: OrderDetailComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}