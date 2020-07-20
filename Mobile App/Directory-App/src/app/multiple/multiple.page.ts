import { Component, OnInit } from '@angular/core';
import {CouncilService} from '../services/council.service';
import {Router} from '@angular/router';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';
import {MultipleService} from '../services/multiple.service';

@Component({
  selector: 'app-mutiple',
  templateUrl: './multiple.page.html',
  styleUrls: ['./multiple.page.scss'],
})
export class MultiplePage implements OnInit {
  allMultipleData: any;
  filteredMultipleData: any;
  searchKeyword: string;
  imgBaseUrl: string;
  constructor(private multipleService: MultipleService, private router: Router, private utilityService: UtilityService, public env: Env) { }

  ngOnInit() {
    this.multipleService.getData().then((data) => {
      this.filteredMultipleData = data.multiple;
      this.allMultipleData = data.multiple;
      this.imgBaseUrl = data.imgBaseUrl;
    });
  }

  viewOfficer(multiple) {
    console.log(multiple);
    this.router.navigate(['/tabs/multiple/multiple-details', {multipleData: JSON.stringify(multiple), imgBaseUrl: this.imgBaseUrl}]);
  }

  filterData() {
    this.filteredMultipleData = this.utilityService.searchCouncil(this.allMultipleData, this.searchKeyword);
  }

}
