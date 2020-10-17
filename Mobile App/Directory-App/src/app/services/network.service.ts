import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  isConnectedToInternet = false;
  constructor(public network: Network) {
    this.isConnectedToInternet = (this.network.type !== network.Connection.NONE);

    this.network.onConnect().subscribe(() => {
      this.isConnectedToInternet = true;
    });

    this.network.onDisconnect().subscribe(() => {
      this.isConnectedToInternet = false;
    });
  }
}
