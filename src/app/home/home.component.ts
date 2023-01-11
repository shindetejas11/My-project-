import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../core/http/httpservices.service';
import { Product } from '../Model/Product';
import { ShareService } from '../Shared/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  productList: Product[] = [];

  filterProductsList: Product[] = [];

  constructor( private _services: HttpservicesService , private shared:ShareService) { }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct() {
    this._services.getdata('productsitems').subscribe(
      (el: any) => {
        this.productList = el;
        this.filterProducts('all');
        console.log(this.productList);
      },
      // (error) => {
      //   console.log(error);
      // }
    );
  }

  filterProducts(category: string) {
    if (category != 'all') {
      this.filterProductsList = this.productList.filter(
        (el) => el.category == category
      );

      // this.filterProductsList = this.productList.filter((el=> (el.title.includes(category))));
    } else {
      this.filterProductsList = this.productList;
    }
  }
  additemstocart(product:Product){
    
    // console.log("hii")
    
    this.shared.addItemsToCart(product);

 }

}
