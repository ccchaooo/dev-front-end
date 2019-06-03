import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { OrdersComponent } from './page/orders/orders.component';
import { MessagesComponent } from './conponent/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailComponent,
    OrdersComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
