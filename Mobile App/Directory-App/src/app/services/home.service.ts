import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor() {
    }

    loadStaticData(dataName) {
        return fetch('./assets/static_data/' + dataName + '.json').then(res => res.json())
            .then(result => {
                return result;
            })
            .catch(err => {
                return false;
            });
    }
}
