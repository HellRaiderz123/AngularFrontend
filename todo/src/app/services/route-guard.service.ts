import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HarcodedAuthServiceService } from './harcoded-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public harcodedAuthServiceService: HarcodedAuthServiceService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.harcodedAuthServiceService.isAuthenticated())
      return true;
    else 
      this.route.navigate(['login']);
  }
}
