import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  constructor() { }

  getData() {
      return fetch('./assets/local_db/clubs/clubs_data.json').then(res => res.json())
          .then(result => {
              return result;
          })
          .catch(err => {
              return false;
          });
  }
}
