import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Order } from '../model/Order';
import { ORDERS } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private messageService: MessageService) { }

  getOrders(): Observable<Order[]> {
    // TODO: send the message _after_ fetching the orders
    this.messageService.add('OrderService: fetched orderes');
    return of(ORDERS);
  }

  getOrder(id: number): Observable<Order> {
    // TODO: send the message _after_ fetching the order
    this.messageService.add(`OrderService: fetched order id=${id}`);
    return of(ORDERS.find(order => order.id === id));
  }
}