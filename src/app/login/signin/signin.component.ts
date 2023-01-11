import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpservicesService } from 'src/app/core/http/httpservices.service';
import { LoginservicesService } from 'src/app/login/Services/loginservices.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  signinform!: FormGroup

  @Output() action: EventEmitter<string> = new EventEmitter()


  constructor(private _fb: FormBuilder, private http: HttpservicesService, private loginser: LoginservicesService) { }

  ngOnInit(): void {
    this.signinform = this._fb.group({
      'mobilenumber': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }



  signin() {

        let parama = new HttpParams()
                   .set('mobilenumber', this.signinform.value.mobilenumber)
                   .set('password', this.signinform.value.password)
    // ...........here you can pass the data as params to the backend.......by using httpparams.......you can create the parameter..
    this.http.getdata('users', parama).subscribe((resp) => {

      console.log(resp)

      if (Array.isArray(resp) && resp.length > 0) {

        // ...........if responce is there only when you can store it the localstorage 

        let Response = resp[0];

        Response['Token'] = "recsf564456";

        localStorage.setItem('Token', Response['Token'])
        // ...........here you paseed the token for Authitcation ......

        this.loginser.setUserResponse(Response)

        //  ..............this method is used to set the data in localstorage.....
        this.redirectto('loginsucess')

        alert("password succesfull")
       
        // this.toastr.success('Hello world!')
      }
    }, (error) => {
      // console.log("please enter the correct password",error)
    }
    )
  }


  redirectto(para: any) {

    this.action.emit(para)
  }
}
