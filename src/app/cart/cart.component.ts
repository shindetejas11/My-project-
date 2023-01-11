import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../core/http/httpservices.service';
import { LoginservicesService } from '../login/Services/loginservices.service';
import { Order } from '../Model/order/order';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  userinformation: any;

  profile: any;

  productarry: Product[] = [];

  orderobj:Order=new Order

  constructor(
    private login: LoginservicesService,
    private http: HttpservicesService
  ) { }

  ngOnInit(): void {

    this.userinformation = this.login.getUserResponse();
    // .....here you can get the information from the local storage.... to get data of the users sing in users
    this.getuserprofileinfo();
    this.getproductsdeatils();
    this.calculateprize();
  }

  getuserprofileinfo() {
    // ........here this method is used to get the information of the users 
    if (this.userinformation.id) {
      let params = new HttpParams().set('id', this.userinformation.id);

      this.http.getdata('profile', params).subscribe((responce) => {
        if (Array.isArray(responce) && responce.length > 0) {
          this.profile = responce[0];
        }
      });
    }
  }

  calculateprize(){

    this.orderobj.totalprize=0;

    this.productarry.forEach((el)=>{

      this.orderobj.totalprize += Number(el.price)

    })
    this.orderobj.offer=10;

    this.orderobj.finalprize = Number((this.orderobj.totalprize - this.orderobj.offer).toFixed(3))
  }


  getproductsdeatils() {
    var prductsarr:any
     prductsarr =  localStorage.getItem('products')
    //  ........here is the you can get all the details of products from localstorage that you are added in the cart
    if(prductsarr){
      prductsarr=JSON.parse(prductsarr);
      
      this.productarry=prductsarr;
      // ........here is the all details inside the productsarry
    }
  }
  placeorder(){

  console.log("hii")
    this.orderobj.id = this.profile.id
    this.orderobj.name =this.profile.firstName +''+this.profile.lastName
    this.orderobj.mobilenumber =this.profile.mobilenumber

    // this.orderobj.address ={...this.profile.address}

    // ......here  you can clone and strore

    this.orderobj.products ={...this.productarry}

    // .......here all the prod you selected
    // this.orderobj.name =this.userinformation.name
  }

}
