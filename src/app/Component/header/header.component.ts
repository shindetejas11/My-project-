import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpservicesService } from 'src/app/core/http/httpservices.service';
import { LoginservicesService } from 'src/app/login/Services/loginservices.service';
import { Product } from 'src/app/Model/Product';
import { ShareService } from 'src/app/Shared/services/share.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  action: string = 'signin';


  @ViewChild('btnclose') btnclose!: ElementRef;

  userlogin: boolean = false;


  userdetails: any;

  // productcount:Observable<Product[]> | null = null;


  productCount: Observable<Product[]> | null = null;

  searchresult: any;

  valuetoread: string = ''

  constructor(private loginsvc: LoginservicesService, private roter: Router, private shared: ShareService, private http: HttpservicesService) { }

  ngOnInit(): void {
    this.validuser()
    // this.productcount= this.shared .selectitemlist
    this.productCount = this.shared.selectedItemsList
  }


  emit(event: any) {
    if (event == 'loginsucess') {

      this.loginsucces();

    } else {

      this.action = event;
    }
  }

  loginsucces() {
    this.userlogin = true;
    var data = this.loginsvc.getUserResponse();
    if (data != null) {
      this.userdetails = data;
    }
    this.btnclose.nativeElement.click();
  }

  action1(flag: boolean) {
    if (flag) {
      this.action = 'signin';
    }
  }
  name() {
    console.log("this is the msg")
  }
  validuser() {
    var data = this.loginsvc.getUserResponse();
    if (data != null) {
      this.userdetails = data;
      this.userlogin = true;
    }
  }

  logout() {
    this.loginsvc.cleardata()
    this.userlogin = false;
    this.roter.navigateByUrl('Home')
  }

  searchproduct(query: KeyboardEvent) {
    if (query) {
      let element = query.target as HTMLInputElement
      this.http.searchproducts(element.value).subscribe((result: any) => {
        
        this.searchresult = result
        if (result.length > 5)
          result.length = 5;

        this.searchresult = result
        this.searchresult.push(this.valuetoread)

        //  console.log(result)

        // console.log(result)
      })
      // console.log(element.value)
    }
    // this.http.searchproducts(query).subscribe(()=>{})
  }

  hidesearch() {
    this.searchresult = undefined
  }

  submiteddetails(value: string) {
    console.log(value)
  }
}
