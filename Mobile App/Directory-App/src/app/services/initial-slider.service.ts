import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialSliderService implements CanActivate{

  constructor(public router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('isAppUsed')) {
      return true;
    } else {
      this.router.navigate(['initial-slider'])
      return false;
    }
  }

}
