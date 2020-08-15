import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabsService  implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {
      return true;
  }

}
