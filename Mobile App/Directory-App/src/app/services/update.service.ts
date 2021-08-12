import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
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
    private zip: Zip, 
    public router: Router,
    private http: HTTP,
    private env: Env
  ) {
    this.fileTransfer = this.transfer.create();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem('isAppOppend')){
      this.router.navigate(['slider']);
    }
    return !(sessionStorage.getItem('isAppOppend'));
  }

  async checkForUpdate() {
    //return true if has updates; otherwise false;
    console.log('checkForUpdate():: Check hasUpdates');
    const currentUpdateVersion = localStorage.getItem('appUpdateVersion');
    console.log('checkForUpdate():: Current Update Version', currentUpdateVersion);
    if (currentUpdateVersion === null || parseFloat(currentUpdateVersion) === 0.0) {
      return true;
    } else {
      const hasUpdateConfig = await this.checkFile('update_config.json');
      console.log('checkForUpdate():: Has Config Json? ', hasUpdateConfig);
      if (hasUpdateConfig) {
        await this.file.removeFile(this.file.dataDirectory, 'update_config.json');
      }
      try {
        await this.downloadFile(this.env.configUrl, 'update_config.json');
        const versionConfig = await this.file.readAsText(this.file.dataDirectory, 'update_config.json');
        const versionConfigJson = JSON.parse(versionConfig);
        console.log('checkForUpdate():: Config Json', versionConfigJson);
        if (parseFloat(versionConfigJson.version) > parseFloat(currentUpdateVersion)) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        return false;
      };
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
    try{
      const download = await this.fileTransfer.download(link, this.file.dataDirectory + fileName,);
      console.log('download():: file Downloaded', download);
      return true;
    }catch(error){
      console.log('download():: Error in Downloading', error);
      return false;
    }
  }

  async downloadZip(){
    const hasZip = await this.checkFile('local_db.zip');
    console.log('downloadZip():: Has Zip', hasZip);
    if(hasZip){
      await this.file.removeFile(this.file.dataDirectory, 'local_db.zip');
    }
    const hasUpdateConfig = await this.checkFile('update_config.json');
    console.log('downloadZip():: has upload config', hasUpdateConfig);
    if(!hasUpdateConfig){
      await this.downloadFile(this.env.configUrl, 'update_config.json');
    }
    const versionConfig = await this.file.readAsText(this.file.dataDirectory, 'update_config.json');
    const versionConfigJson = JSON.parse(versionConfig);
    const updateZipLink = versionConfigJson.downloadUrl;
    const isDownloaded = await this.downloadFile(updateZipLink,'local_db.zip');
    console.log('downloadZip():: zip downloaded', isDownloaded);
    return {
      downloadedVersion: versionConfigJson.version
    };
  }

  async deleteZipFile(){
    const hasZip = await this.checkFile('local_db.zip');
    if(hasZip){
      const deleted = await this.file.removeFile(this.file.dataDirectory, 'local_db.zip');
      console.log('is deleted', deleted);
    }
  }

  async removeExtracted(){
    const hasFile = await this.checkDirectory('local_db');
    if(hasFile){
      const deleted = await this.file.removeRecursively(this.file.dataDirectory, 'local_db');
      console.log('removeExtracted():: ', deleted);
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
    console.log('extraxtZip():: extract result', extractResult);
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
      console.log('checkDirectory():: check Directory', hasPath);
      return hasPath;
    }catch (e) {
      console.log('checkDirectory():: No Directory', e);
      return false;
    }
  }

  async checkFile(path){
    try{
      const hasFile = await this.file.checkFile(this.file.dataDirectory, path);
      console.log('checkFile():: check File', hasFile);
      return hasFile;
    }catch (e) {
      console.log('checkFile():: No File',e);
      return false;
    }
  }



}
