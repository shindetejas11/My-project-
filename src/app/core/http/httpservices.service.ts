import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  // constructor(private ) { }

  baseUrl: string = environment.baseUrl;

  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private _http: HttpClient) { }

  getdata(endPoint: string, params: HttpParams = new HttpParams()) {
    return this._http.get(this.baseUrl + endPoint, { 'params': params, headers: this.headers });
  }
  // ..........Using using Httpparams ypu can pass the parameter as a queryparameter in url.......
  // ............this params concept of default parameter......

  postdata(endPoint: string, requestBody: any) {
    return this._http.post(this.baseUrl + endPoint, requestBody, { headers: this.headers })
  }

  putdata(endPoint: string, requestBody: any) {
    return this._http.put(this.baseUrl + endPoint, requestBody, { headers: this.headers })

  }
  searchproducts(query: string) {
    return this._http.get(`http://localhost:3000/productsitems?q= ${query}`)
  }
}
