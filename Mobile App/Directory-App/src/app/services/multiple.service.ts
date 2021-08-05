import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Env} from './env';
import { File } from '@ionic-native/file/ngx';


@Injectable({
  providedIn: 'root'
})
export class MultipleService {

  constructor(private env: Env, private http: HttpClient, private file: File) { }
  getData() {
    if(this.env.isUseDataDirectory){
      return this.readFile(this.env.dataDirectoryBaseUrl + '/multiple/multiple_data.json')
                .then(data=>{
                    return data;
                })
                .catch(error=>{
                    return false;
                })        
    }
    else if (this.env.baseURLType === 'local') {
      return fetch(this.env.baseURL + '/multiple/multiple_data.json').then(res => res.json())
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
      return this.http.get(this.env.baseURL + '/getData.php?file=multiple/multiple_data.json',  { headers: headerOptions }).toPromise();
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
        return await this.file.readAsDataURL(this.file.dataDirectory, path);
    }catch(e){
        return null;
    }

}
}
