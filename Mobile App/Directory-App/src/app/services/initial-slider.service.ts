import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class InitialSliderService implements CanActivate {

  constructor(public router: Router, private env: Env, private http: HttpClient) { }

  canActivate(): boolean {
    if (!localStorage.getItem('isAppUsed')) {
      return true;
    } else {
      this.router.navigate(['authentication']);
      return false;
    }
  }

  isAppUsed() {
    return !!localStorage.getItem('isAppUsed');
  }

  getData() {
    if (this.env.baseURLType === 'local') {
      return fetch(this.env.baseURL + '/initial_slider/initial_sliders.json').then(res => res.json())
          .then(result => {
            return result;

          })
          .catch(err => {
            return false;
          });
    } else if (this.env.baseURLType === 'http') {
      const headerOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' });
      // tslint:disable-next-line:max-line-length
      return this.http.get(this.env.baseURL + '/getData.php?file=initial_slider/initial_sliders.json',  { headers: headerOptions }).toPromise();
    }
  }

}
