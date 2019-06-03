import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the orders
    this.messageService.add('ProductService: fetched orderes');
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the order
    this.messageService.add(`ProductService: fetched order id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }
}