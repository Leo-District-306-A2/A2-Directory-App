import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  loadStaticData(dataName) {
    return fetch('./assets/local_db/side_menu/' + dataName + '.json').then(res => res.json())
        .then(result => {
          return result;
        })
        .catch(err => {
          return false;
        });
  }
}
