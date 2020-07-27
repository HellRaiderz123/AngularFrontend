import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let encodedAuthHeader: string = this.basicAuthService.getAuthenticatedToken();
    if(encodedAuthHeader) {
      req = req.clone({
      setHeaders : {
        Authorization : encodedAuthHeader
      }
    })
    }
    return next.handle(req);
  }
}
