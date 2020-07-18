import {Injectable} from '@angular/core';
import {Env} from './env';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private env: Env, private http: HttpClient) {
    }

    loadStaticData(dataName) {
        if (this.env.baseURLType === 'local') {
            return fetch(this.env.baseURL + '/home/' + dataName + '.json').then(res => res.json())
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
            return this.http.get(this.env.baseURL + '/getData.php?file=' + 'home/' + dataName + '.json',  { headers: headerOptions }).toPromise();
        }
    }

}
