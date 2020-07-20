import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class MultipleService {

  constructor(private env: Env, private http: HttpClient) { }
  getData() {
    if (this.env.baseURLType === 'local') {
      return fetch(this.env.baseURL + '/multiple/multiple_data.json').then(res => res.json())
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
      return this.http.get(this.env.baseURL + '/getData.php?file=multiple/multiple_data.json',  { headers: headerOptions }).toPromise();
    }
  }
}
