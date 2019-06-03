import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';

import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { OrdersComponent } from './page/orders/orders.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    OrderDetailComponent,
    MessagesComponent,
    ProductDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }