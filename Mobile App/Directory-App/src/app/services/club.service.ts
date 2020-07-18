import {Injectable} from '@angular/core';
import {Env} from './env';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClubService {
    constructor(private env: Env, private http: HttpClient) {
    }

    getData() {
        if (this.env.baseURLType === 'local') {
            return fetch(this.env.baseURL + '/clubs/clubs_data.json').then(res => res.json())
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
            return this.http.get(this.env.baseURL + '/getData.php?file=clubs/clubs_data.json',  { headers: headerOptions }).toPromise();
        }
    }
}
