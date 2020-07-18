import {Injectable} from '@angular/core';
import {Env} from './env';


@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private env: Env) {
    }

    loadStaticData(dataName) {
        return fetch(this.env.baseURL + '/home/' + dataName + '.json').then(res => res.json())
            .then(result => {
                return result;
            })
            .catch(err => {
                return false;
            });
    }
}
