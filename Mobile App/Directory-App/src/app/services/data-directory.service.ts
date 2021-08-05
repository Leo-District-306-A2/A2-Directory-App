import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataDirectoryService {

  constructor(private file: File) { }

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
