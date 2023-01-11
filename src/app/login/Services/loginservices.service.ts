import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginservicesService {
  constructor() {}

  setUserResponse(data: any) {
    if (data) {
      let userResp = JSON.stringify(data);
      userResp = window.btoa(userResp);

     localStorage.setItem('userResponse', userResp);
    }
  }
  // let obj =JSON.stringify(data)
  // localStorage.setItem('userResponse' , obj)

  getUserResponse() {
    var data = localStorage.getItem('userResponse');

    if (data) {
      data = window.atob(data);
      data = JSON.parse(data);
      return data;
    }
    return null;
  }

  cleardata() {
    localStorage.clear();
  }
}
