import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouncilService {

  constructor() { }

  getData() {
    return fetch('./assets/local_db/council/council_data.json').then(res => res.json())
        .then(result => {
          return result;
        })
        .catch(err => {
          return false;
        });
  }
}
