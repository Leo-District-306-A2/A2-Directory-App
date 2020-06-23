import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-national-anthem',
  templateUrl: './national-anthem.page.html',
  styleUrls: ['./national-anthem.page.scss'],
})
export class NationalAnthemPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
      console.log(this.viewData);
    });
   }


  ngOnInit() {
  }

}
