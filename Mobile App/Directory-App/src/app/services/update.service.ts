import { Injectable } from '@angular/core';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  fileTransfer;
  constructor(public file: File, public transfer: FileTransfer) {
    this.fileTransfer = this.transfer.create();
  }

  checkForUpdate() {
    // do a request to application update json and validate with the current version
  }

  downloadUpdate() {
    // add application download logic here
  }


  // download2() {
  //   const url = 'https://leodistrict306a2.org/assets/js/home/clubs_data.json';
  //   this.fileTransfer.download(url, this.file.dataDirectory + 'clubs.json').then((entry) => {
  //     console.log('download complete: ' + entry.toURL());
  //     this.isDownloaded2 = true;
  //   }, (error) => {
  //     // handle error
  //   });
  // }
  //
  // downloadImg() {
  //   const url = 'https://leodistrict306a2.org/assets/img/logos/A2_Logo_2020_21.png';
  //   this.fileTransfer.download(url, this.file.dataDirectory + 'A2_Logo_2020_21.png').then((entry) => {
  //     console.log('download complete: ' + entry.toURL());
  //     this.imgDownloaded = true;
  //   }, (error) => {
  //     // handle error
  //   });
  // }
  //
  // loadImg() {
  //   if(this.imgDownloaded) {
  //     this.file.readAsDataURL(this.file.dataDirectory, 'A2_Logo_2020_21.png').then(data => {
  //       this.imagPath = data;
  //       console.log(data);
  //     });
  //   } else {
  //     console.log("not downloaded yet");
  //   }
  // }
  //
  // readFile2() {
  //   if(this.isDownloaded2) {
  //     this.file.readAsText(this.file.dataDirectory, 'clubs.json').then(data => {
  //       console.log(data);
  //       console.log("Parsed");
  //       console.log(JSON.parse(data));
  //     });
  //
  //   } else {
  //     console.log("not downloaded yet");
  //   }
  // }
}
