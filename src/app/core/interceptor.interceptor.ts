import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // .......here request is the Url ,header ,body using yoy can acesss 
    //  ........and next is to handle the event....
   console.log("Request of HttpInterceptor is =="+ request)
   
    if (!request.url.includes('users')) {
      //  .............if in urls loged in users are there the you can not be checkd

      var token: any = localStorage.getItem('Token')
      if (token) {
        // .......you  can modify the requst here 
        token = 'bearer' + token
        // .....string concat
        request = request.clone({ headers: request.headers.set("Authorization", token) })

        // .......here the request are imutable you cannot chnage for that you have to use the clone method

      }
}
    return next.handle(request);
  }
}
