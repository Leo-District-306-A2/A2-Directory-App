import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.page.html',
    styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
    contactData: any;
    backRoute = '/tabs/home';
    constructor(private sideMenuService: SideMenuService,
                private router: Router,
                private route: ActivatedRoute) {
        this.sideMenuService.loadStaticData('contact_us').then((result) => this.contactData = result);
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
}
