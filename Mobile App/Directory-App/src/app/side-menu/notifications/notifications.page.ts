import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Env} from '../../services/env';
import {UtilityService} from '../../services/utility.service';
import {NotificationService} from '../../services/notification.service';
import { Network } from '@ionic-native/network/ngx';
import {NetworkService} from '../../services/network.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  backRoute = '/tabs/home';
  collapseditemId = 0;
  constructor(private router: Router,
              private route: ActivatedRoute,
              public env: Env,
              public utilityService: UtilityService,
              public notificationService: NotificationService,
              public networkService: NetworkService) {
    route.paramMap.subscribe((data) => {
      if (data) {
        this.backRoute = JSON.parse(data.get('data'));
      } else {
        this.backRoute = '/tabs/home';
      }
    });

    

  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate([this.backRoute]).catch(() => {
      this.router.navigate(['/tabs/home']);
    });
  }

  toggleCollapsing(id){
    if(this.collapseditemId === id){
      this.collapseditemId = 0;
    }else{
      this.collapseditemId = id;
    }
  }

}
