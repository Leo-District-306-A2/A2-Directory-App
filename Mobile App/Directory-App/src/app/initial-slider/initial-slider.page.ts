import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-initial-slider',
  templateUrl: './initial-slider.page.html',
  styleUrls: ['./initial-slider.page.scss'],
})
export class InitialSliderPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  continue() {
    localStorage.setItem('isAppUsed', 'true');
    this.router.navigate([''])
  }
}
