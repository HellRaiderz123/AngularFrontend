import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthServiceService {

  constructor() { }

  authenticate(username : string, password : string) : boolean{
    //console.log(username + " ------- " + password);
    if(username==='developer' && password==='pass') {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated() {
    let username = sessionStorage.getItem('authenticatedUser');
    return !(username===null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
