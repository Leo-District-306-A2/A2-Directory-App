import { Injectable } from '@angular/core';
import { Env } from './env';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  constructor(private env: Env) { }

  getData() {
    return fetch(this.env.baseURL + '/clubs/clubs_data.json').then(res => res.json())
      .then(result => {
        return result;

      })
          .catch (err => {
      return false;
    });
  }
}
