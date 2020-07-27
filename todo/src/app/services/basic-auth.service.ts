import { Injectable } from '@angular/core';
import { SpringBootDataServiceService } from './data/spring-boot-data-service.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { APP_URL } from '../urlConst';

export class BasicAuthBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  authenticate(username : string, password : string) {
    // console.log(username + " ------- " + password);
    let EncodedAuth:string = this.basicAuthHeaderEncoding(username, password);
    let headers = new HttpHeaders({Authorization : EncodedAuth});
    return this.http.get<BasicAuthBean>(APP_URL+'basic-auth',{headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',EncodedAuth);
        }
      ) 
    );
  }

  private basicAuthHeaderEncoding(username: string, password: string) : string{
    let encodedAuthHeader: string = 'Basic ' + window.btoa(username + ':' + password);
    return encodedAuthHeader;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

    getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }

  isAuthenticated() {
    let username = sessionStorage.getItem('authenticatedUser');
    return !(username===null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

}
