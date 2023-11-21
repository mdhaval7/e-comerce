import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerServicesService } from './seller-services.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _sellerSrvices:SellerServicesService){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('seller'))
    {
      return true;
    }
    return this._sellerSrvices.issellerlogin;
  }
}

