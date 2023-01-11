import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpservicesService } from 'src/app/core/http/httpservices.service';
import { LoginservicesService } from 'src/app/login/Services/loginservices.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
  // providers:[LoginservicesService]
})
export class MyprofileComponent implements OnInit {


  // type: string = "profile";

  // signgroup!: FormGroup

  // userInfo: any;


  actionType: string = "Profile";

  myProfileForm!: FormGroup;
  
  userInfo: any;

  udatebutton: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpservicesService, private login: LoginservicesService) { }

  ngOnInit(): void {
    // this.formsdeatils()
    // this.getalldata()
    // this.userInfo = this.loginsvs.getUserResponse()


    this.initializeForm();

    this.userInfo = this.login.getUserResponse();
    // .........here you are get the all details of users using the localstorage 

    this.getUserProfile();
  }



  //   opentab(action: string) {
  //     this.type = action
  //  }

  // formsdeatils() {

  //   this.signgroup = this.fb.group({
  //     'id': [''],
  //     'firstname': [''],
  //     'lastname': [''],
  //     'username': [''],
  //     'Mobilenumber': [''],
  //     'password': [''],
  //     'address': this.fb.group({
  //       'address1': [''],
  //       'address2': [''],
  //       'city': [''],
  //       'state': [''],
  //       'pincode': ['']
  //     })
  //   })
  // }
  // submitform() {
  //   console.log(this.signgroup.value)
  //   this.login.postdata('profile', this.signgroup.value).subscribe((el) => {
  //     // return console.log(el)
  //     if (el instanceof  Object) {

  //     }
  //   },
  //   (error) => {
  //     console.log(error)
  //   })
  // }

  // getalldata() {
  //   const params=new HttpParams()
  //                    .set('id', this.userInfo.id)

  //   this.login.getdata('profile', params ).subscribe((resp) => {

  //     if (Array.isArray(resp) && resp.length > 0) {
  //       this.signgroup.patchValue(resp[0])
  //     }
  //      else 
  //     {
  //       this.signgroup.patchValue(this.userInfo)
  //     }
  //   })


  // }



  // ................sir code.................

  initializeForm() {
    this.myProfileForm = this.fb.group({
      'id': [''],
      'firstName': [''],
      'lastName': [''],
      'username': [''],
      'password': [''],
      'mobilenumber': [''],
      'address': this.fb.group({
        'line1': [''],
        'line2': [''],
        'city': [''],
        'state': [''],
        'pincode': [''],
      })
    })
  }


  get firstName() {
    return this.myProfileForm.controls['firstName'];
  }

  getSection(type: string) {
    this.actionType = type;
  }

  submitProfile() {
    this.http.postdata('profile', this.myProfileForm.value).subscribe((response) => {
      if (response instanceof Object) {
        alert ("Profile Submitted")
        //message
      }
    },
      (error) => {
        //error message
      })
  }

  Updateprofile() {

    let url= 'profile/' +this.userInfo.id

    this.http.putdata(url, this.myProfileForm.value).subscribe((resp)=>{
      if(resp instanceof Object) {
           alert ("UPDATED SUCCESSFULY")
      }

    },
       (error)=>{
        console.log(error)
       })
  }


  getUserProfile() {
   
 
    const params = new HttpParams()
                    .set('id', this.userInfo.id);

    this.http.getdata('profile', params).subscribe((response) => {
      if (Array.isArray(response) && response.length > 0) {
        this.udatebutton = true
        this.myProfileForm.patchValue(response[0]);
        
      } else {
        this.myProfileForm.patchValue(this.userInfo);
        this.udatebutton = false
      }
    })
  }
}
