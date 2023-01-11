import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[SigninComponent,SignupComponent,MyprofileComponent]
})
export class LoginModule { }
