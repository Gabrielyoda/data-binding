import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate,CanActivateChild {
  constructor(private readonly router: Router){}

  protected authorize(
    activatedRoute: ActivatedRouteSnapshot,
    activatedState: RouterStateSnapshot): boolean{
    const credentials = sessionStorage.getItem('USER-DATA')

    if(!credentials) {
        this.router.navigateByUrl('/login')
    }
    return true
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authorize(route,state);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      return this.authorize(route, state);
    }
  
}
