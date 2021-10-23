import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import {Platform} from '@ionic/angular';
import {File} from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import { Subject } from 'rxjs';
import {Env} from './env';

@Injectable({
  providedIn: 'root'
})
export class UpdateService implements CanActivate{

  fileTransfer;
  isDownloaded = false;
  isDownloadedUpdateConfig: boolean;
  unzippingProgresss: number;
  downloadingProgress: number;
  updateDownloadingProgress: Subject<any> = new Subject<any>();
  downloadingProgressChange: Subject<number> = new Subject<number>();

  constructor(private file: File, 
    private transfer: FileTransfer, 
    private platform: Platform,
    private zip: Zip, 
    public router: Router,
    private http: HTTP,
    private env: Env
  ) {
    //plugin is ready after platform ready
    this.platform.ready().then(() => {
      this.fileTransfer = this.transfer.create();
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem('isAppOppend')){
      this.router.navigate(['slider']);
    }
    return !(sessionStorage.getItem('isAppOppend'));
  }

  async checkForUpdate() {
    //return true if has updates; otherwise false;
    const currentUpdateVersion = localStorage.getItem('appUpdateVersion');
    const currentYear = localStorage.getItem('leoisticYear');
    if (currentUpdateVersion === null || currentYear === null ||  parseFloat(currentUpdateVersion) === 0.0) {
      try{
        const isDownloadedConfig = await this.downloadFile(this.env.configUrl, 'update_config.json');
        const versionConfig = await this.file.readAsText(this.file.dataDirectory, 'update_config.json');
        const versionConfigJson = JSON.parse(versionConfig);
        return {
          hasUpdates:true, 
          mustUpdate: true, 
          updateDescription: versionConfigJson.description, 
          size: versionConfigJson.size, 
          error: isDownloadedConfig ? null: "Sorry, We can't download updates. Please try again later",
          resetLocalData: versionConfigJson.resetLocalData};
      }catch(error){
        return {
          hasUpdates:false, 
          mustUpdate: false, 
          updateDescription: null, 
          size:null, 
          error: "Sorry, We can't download updates. Please try again later",
          resetLocalData:[]
        };
      }      
    } else {
      const hasUpdateConfig = await this.checkFile('update_config.json');
      if (hasUpdateConfig) {
        await this.file.removeFile(this.file.dataDirectory, 'update_config.json');
      }
      try {
        await this.downloadFile(this.env.configUrl, 'update_config.json');
        const versionConfig = await this.file.readAsText(this.file.dataDirectory, 'update_config.json');
        const versionConfigJson = JSON.parse(versionConfig);
        const year = parseInt(versionConfigJson.dataVersion.slice(0,4));
        const versionNumber = parseFloat(versionConfigJson.dataVersion.slice(5));
        if( year > parseInt(currentYear)){
          return {
            hasUpdates:true, 
            mustUpdate: false, 
            updateDescription: 
            versionConfigJson.description, 
            size: versionConfigJson.size, 
            error: null,
            resetLocalData: versionConfigJson.resetLocalData
          };
        }else if(versionNumber > parseFloat(currentUpdateVersion)){
          return {
            hasUpdates:true, 
            mustUpdate: false, 
            updateDescription: 
            versionConfigJson.description, 
            size: versionConfigJson.size, 
            error: null,
            resetLocalData: versionConfigJson.resetLocalData
          };
        }else{
          return {hasUpdates:false, mustUpdate: false, updateDescription: null, size:null, error: null, resetLocalData:[]};
        }
      } catch (error) {
        return {hasUpdates:false, mustUpdate: false, updateDescription: null,size:null, error: "Sorry, We can't download updates. Please try again later", resetLocalData:[]};
      }
    }
  }

  async downloadUpdate() {
    try{
      this.updateDownloadingProgress.next('Downloading Files');
      const downloadedZip = await this.downloadZip();
      this.updateDownloadingProgress.next('Extracting Zip File')
      const extraction = await this.extractZip();
      this.updateDownloadingProgress.next('Finalizing Files');
      if(extraction){
        localStorage.setItem('appUpdateVersion', downloadedZip.downloadedVersion.toString());
        localStorage.setItem('leoisticYear', downloadedZip.leoisticYear.toString());
        this.updateDownloadingProgress.next('Update Complete');
        return {
          downloadState: true,
          currentVersion: downloadedZip.downloadedVersion.toString(),
          message: 'Successfully Downloaded Data'
        };
      }else{
        await this.deleteZipFile();
        return {
          downloadState: false,
          currentVersion: null,
          message: 'Error in Unzipping Files'
        };
      }
    }catch(error){
      return{
        downloadState: false,
        currentVersion: null,
        message: 'Error in Downloading Files'
      };
    }

  }

  async downloadFile(link, fileName) {
    //Download file using file transfer
    if (link){
      try{
        const download = await this.fileTransfer.download(link, this.file.dataDirectory + fileName,);
        console.log("Success File Download")
        return true;
      }catch(error){
        console.log("Error in file Download",error)
        return false;
      }
    }else{
      return false;
    }
  }

  async downloadZip(){
    const hasZip = await this.checkFile('local_db.zip');
    if(hasZip){
      await this.file.removeFile(this.file.dataDirectory, 'local_db.zip');
    }
    const hasUpdateConfig = await this.checkFile('update_config.json');
    if(!hasUpdateConfig){
      var isConfigDownloaded = await this.downloadFile(this.env.configUrl, 'update_config.json');
      if (!isConfigDownloaded){
        return {
          isDownloaded:false,
          downloadedVersion: null,
          leoisticYear: null
        };
      }
    }
    const versionConfig = await this.file.readAsText(this.file.dataDirectory, 'update_config.json');
    const versionConfigJson = JSON.parse(versionConfig);
    const updateZipLink = versionConfigJson.downloadUrl;
    const isDownloaded = await this.downloadFile(updateZipLink,'local_db.zip');
    if(isDownloaded){
      return {
        isDownloaded:true,
        downloadedVersion: versionConfigJson.dataVersion.slice(5),
        leoisticYear: versionConfigJson.dataVersion.slice(0,4)
      };
    }else{
      return {
        isDownloaded:false,
        downloadedVersion: null,
        leoisticYear: null
      };
    }
    
  }

  async deleteZipFile(){
    const hasZip = await this.checkFile('local_db.zip');
    if(hasZip){
      const deleted = await this.file.removeFile(this.file.dataDirectory, 'local_db.zip');
    }
  }

  async removeExtracted(){
    const hasFile = await this.checkDirectory('local_db');
    if(hasFile){
      const deleted = await this.file.removeRecursively(this.file.dataDirectory, 'local_db');
    }
  }

  async extractZip(){
    await this.removeExtracted();
    await this.file.createDir(this.file.dataDirectory, 'local_db', true);
    const extractResult = await this.zip
        .unzip(
          this.file.dataDirectory + 'local_db.zip',
          this.file.dataDirectory + 'local_db',
          (progress) => {
            console.log(
              'Unzipping, ' +
                Math.round((progress.loaded / progress.total) * 100) +
                '%'
            );
          }
        );
    if(extractResult === 0){
      await this.deleteZipFile();
      return true;
    }else if(extractResult === 1){
      return false;
    }else{
      return false;
    }
  }

  async checkDirectory(path){
    try{
      const hasPath = await this.file.checkDir(this.file.dataDirectory, path);
      return hasPath;
    }catch (e) {
      return false;
    }
  }

  async checkFile(path){
    try{
      const hasFile = await this.file.checkFile(this.file.dataDirectory, path);
      return hasFile;
    }catch (e) {
      return false;
    }
  }



}
