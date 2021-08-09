import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Env} from './env';
import { DataDirectoryService } from './data-directory.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  authData: any;
  passwordMaxLength = 8;
  constructor(public router: Router, private env: Env, private http: HttpClient, private dataDirectoryService: DataDirectoryService) {
    this.getData().then((data: any) => {
      this.authData = data;
      this.passwordMaxLength = data.password.length;
    });
  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('isAuthenticated')) {
      this.router.navigate(['tabs']);
    }
    return !(localStorage.getItem('isAuthenticated'));
  }

  authenticate(password) {
    const isLoggedIn = password.toUpperCase() === (this.authData.password).toUpperCase();
    if (isLoggedIn) {
      localStorage.setItem('isAuthenticated', String(true));
    }
    return isLoggedIn;
  }

  getData() {
    if (this.env.isUseDataDirectory) {
      return this.dataDirectoryService.readFile(this.env.dataDirectoryBaseUrl +'/authentication/auth_data.json')
          .then(data=>{
              return data;
          })
          .catch(error=>{
              return false;
          })        
  }else if (this.env.baseURLType === 'local') {
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
