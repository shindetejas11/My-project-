import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Model/Product';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  // selectItem = new BehaviorSubject<Product[]>([])
  // ......here the

  selectItems = new BehaviorSubject<Product[]>([]);

  // selectitemlist = this.selectItem.asObservable()

  selectedItemsList = this.selectItems.asObservable();

  products: Product[] = [];

  constructor() {}

  // emitselectitem(product:Product[]) {
  //   this.selectItem.next(product)
  // }

  emitSelectedItems(product: Product[]) {
    this.selectItems.next(product);
  }

  // addtocart(product: Product) {

  //     this.products.push(product)
  //     let prductsarray = JSON.stringify(this.products)
  //     localStorage.setItem('product' ,prductsarray)
  //     this.emitselectitem(this.products)
  // }

  addItemsToCart(product: Product) {
    this.products.push(product);

    let productArr = JSON.stringify(this.products);

    localStorage.setItem('products', productArr);

    this.emitSelectedItems(this.products);
  }
}
