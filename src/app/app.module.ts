import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { InterceptorInterceptor } from './core/interceptor.interceptor';
// import { demointer } from '.src/app/corehttp/demointerceptor';
import { SearchComponent } from './search/search.component';
import { FilterpipePipe } from './Shared/filterpipe.pipe';
import { ShredModule } from './Shared/shred.module';
import { InterInterceptor } from './core/http/inter.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FilterpipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoginModule,
    RouterModule,
    FormsModule,
    ShredModule
    
  ],
  providers:[
    
         {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor,multi:true},
          {
           provide:HTTP_INTERCEPTORS ,useClass:InterInterceptor ,multi:true
       },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
