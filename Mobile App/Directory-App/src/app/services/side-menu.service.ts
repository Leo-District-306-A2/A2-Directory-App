import { Injectable } from '@angular/core';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor(private env: Env) { }

  loadStaticData(dataName) {
    return fetch( this.env.baseURL + '/side_menu/' + dataName + '.json').then(res => res.json())
        .then(result => {
          return result;
        })
        .catch(err => {
          return false;
        });
  }
}
