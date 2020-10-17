import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {

  constructor() { }

  getBase64ImageFromURL(url: string) {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      return ('data:image/jpg;base64,' + this.getBase64Image(img));
  }

  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    // tslint:disable-next-line:prefer-const
    let canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    // tslint:disable-next-line:prefer-const
    let ctx = canvas.getContext('2d');
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    // tslint:disable-next-line:prefer-const
    let dataURL = canvas.toDataURL('image/png');
    console.log(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}
