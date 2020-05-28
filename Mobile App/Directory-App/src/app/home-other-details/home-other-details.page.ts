import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-other-details',
  templateUrl: './home-other-details.page.html',
  styleUrls: ['./home-other-details.page.scss'],
})
export class HomeOtherDetailsPage implements OnInit {

  viewData: any;
  
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
      
    });
   }

  ngOnInit() {
  }

}
