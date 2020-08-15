import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{
  isLoggedIn = false;
  authData: any;
  passwordMaxLength = 8;
  constructor(public router: Router, private env: Env, private http: HttpClient) {
    this.getData().then((data: any) => {
      this.authData = data;
      this.passwordMaxLength = data.password.length;
    });
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn) {
      this.router.navigate(['tabs']);
    }
    return !this.isLoggedIn;
  }

  authenticate(password) {
    this.isLoggedIn = password.toUpperCase() === (this.authData.password).toUpperCase();
    return this.isLoggedIn;
  }

  getData() {
    if (this.env.baseURLType === 'local') {
      return fetch(this.env.baseURL + '/authentication/auth_data.json').then(res => res.json())
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
      return this.http.get(this.env.baseURL + '/getData.php?file=authentication/auth_data.json',  { headers: headerOptions }).toPromise();
    }
  }

}
