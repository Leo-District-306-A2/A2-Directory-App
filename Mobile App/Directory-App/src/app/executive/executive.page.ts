import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'executive.page.html',
  styleUrls: ['executive.page.scss']
})
export class ExecutivePage {

  constructor(private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#00ff00');
  }

}
