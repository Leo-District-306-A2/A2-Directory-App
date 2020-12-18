import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Env} from '../../services/env';
import {UtilityService} from '../../services/utility.service';
import {NotificationService} from '../../services/notification.service';
import {NetworkService} from '../../services/network.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
    backRoute = '/tabs/home';
    collapsibleItemId = 0;

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
        if (this.backRoute) {
            this.router.navigate([this.backRoute]);
        } else {
            this.router.navigate(['/tabs/home']);
        }
    }

    toggleCollapsing(id) {
        if (this.collapsibleItemId === id) {
            this.collapsibleItemId = 0;
        } else {
            this.collapsibleItemId = id;
        }
    }

}
