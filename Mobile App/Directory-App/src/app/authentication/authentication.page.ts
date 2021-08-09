import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import { DataDirectoryService } from '../services/data-directory.service';
import {Env} from '../services/env';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  password;
  isAuthenticated = true;
  authImageUrl = null;
  constructor(public authenticationService: AuthenticationService, public router: Router, private dataDirectoryService: DataDirectoryService, public env: Env,) {

  }

  async ngOnInit() {
    this.authImageUrl = await this.dataDirectoryService.readImage( this.env.dataDirectoryBaseUrl+'/authentication/imgs/logo.png');
  }

  authenticate() {
    if (this.authenticationService.authenticate(this.password)) {
      this.isAuthenticated = true;
      this.router.navigate(['tabs']);
    } else {
      this.isAuthenticated = false;
    }
  }

  autoSubmit() {
    if (this.password && this.password.length === this.authenticationService.passwordMaxLength) {
      this.authenticate();
    }
  }

  getPlaceHolder() {
    let placeholder = '';
    const char = '*';
    for (let i = 0; i < this.authenticationService.passwordMaxLength; i++) {
        placeholder += char;
    }
    return placeholder;
  }
}
