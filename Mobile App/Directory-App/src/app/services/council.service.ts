import { Injectable } from '@angular/core';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class CouncilService {

  constructor(private env: Env) { }

  getData() {
    return fetch( this.env.baseURL + '/council/council_data.json').then(res => res.json())
        .then(result => {
          return result;
        })
        .catch(err => {
          return false;
        });
  }
}
