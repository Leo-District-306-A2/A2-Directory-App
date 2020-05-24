import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor() {
    }

    loadStaticData(dataName) {
        return fetch('./assets/local_db/home/' + dataName + '.json').then(res => res.json())
            .then(result => {
                return result;
            })
            .catch(err => {
                return false;
            });
    }
}
