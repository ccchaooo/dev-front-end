import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getOrderes();
  }

  getOrderes(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(1, 5));
  }
}