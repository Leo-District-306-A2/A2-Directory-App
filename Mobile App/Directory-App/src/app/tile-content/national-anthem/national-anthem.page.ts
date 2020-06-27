import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../services/utility.service';


@Component({
  selector: 'app-national-anthem',
  templateUrl: './national-anthem.page.html',
  styleUrls: ['./national-anthem.page.scss'],
})
export class NationalAnthemPage implements OnInit {

  viewData: any;
  lang = 'en';
  constructor(private route: ActivatedRoute, private utilityService: UtilityService) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

  langChanged(event) {
    this.lang = event;
  }

}
