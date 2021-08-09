import { Injectable } from '@angular/core';
import {Env} from './env';
import { DataDirectoryService } from './data-directory.service';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor(private env: Env, private dataDirectoryService: DataDirectoryService) { }

  loadStaticData(dataName) {

    if (this.env.isUseDataDirectory) {
      return this.dataDirectoryService.readFile(this.env.dataDirectoryBaseUrl + '/side_menu/' + dataName + '.json')
        .then(data => {
          return data;
        })
        .catch(error => {
          return false;
        })
    } else {
      return fetch(this.env.baseURL + '/side_menu/' + dataName + '.json').then(res => res.json())
        .then(result => {
          return result;
        })
        .catch(err => {
          return false;
        });
    }
  }
}
