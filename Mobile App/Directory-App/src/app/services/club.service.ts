import {Injectable} from '@angular/core';
import {Env} from './env';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';

@Injectable({
    providedIn: 'root'
})
export class ClubService {
    constructor(private env: Env, private http: HttpClient, private file: File) {
    }

    async getData() {
        if (this.env.baseURLType === 'local') {
            // return fetch(this.env.baseURL + '/clubs/clubs_data.json').then(res => res.json())
            //     .then(result => {
            //         return result;

            //     })
            //     .catch(err => {
            //         return false;
            //     });
            return await this.readFile('local_db/local_db/clubs/clubs_data.json')
        } else if (this.env.baseURLType === 'http') {
            const headerOptions = new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' });
            return this.http.get(this.env.baseURL + '/getData.php?file=clubs/clubs_data.json',  { headers: headerOptions }).toPromise();
        }
    }

    async readFile(path){
        try{
            const data = await this.file.readAsText(this.file.dataDirectory,path);
            const returnData = JSON.parse(data);
            return returnData;
        }catch(e){
            return false
        }
    }

    async readImage(path){
        try{
            const imageUrl = await this.file.readAsDataURL(this.file.dataDirectory, path);
            return imageUrl;
        }catch(e){
            return null;
        }

    }


}
