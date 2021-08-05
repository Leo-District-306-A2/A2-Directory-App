import {Injectable} from '@angular/core';
import {Env} from './env';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { DataDirectoryService } from './data-directory.service';

@Injectable({
    providedIn: 'root'
})
export class ClubService {
    constructor(private env: Env, private http: HttpClient, private file: File, private dataDirectoryService: DataDirectoryService) {
    }

    async getData() {
        if (this.env.isUseDataDirectory) {

            return this.dataDirectoryService.readFile(this.env.dataDirectoryBaseUrl + '/clubs/clubs_data.json')
                .then(data=>{
                    return data;
                })
                .catch(error=>{
                    return false;
                })
        
        }else if(this.env.baseURLType === 'local'){
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
