import {Component, OnInit} from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.page.html',
    styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
    constructor(private sideMenuService: SideMenuService) {
    }

    ngOnInit() {
    }

}
