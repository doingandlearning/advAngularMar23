import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {
  products: Product[];

  constructor() {
    this.products = [
      new Product('Climbing Shoes', 'Sports Equipment', 90, 1),
      new Product('Ice picks', 'Sports Equipment', 100, 2),
    ];
  }

  getProducts() {
    return this.products;
  }
}
