import { Component } from '@angular/core';
import { CouncilService } from '../services/council.service';
import { Router } from '@angular/router';
import {UtilityService} from '../services/utility.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'executive.page.html',
  styleUrls: ['executive.page.scss']
})
export class ExecutivePage {
  allCouncilData: any;
  filteredCouncilData: any;
  searchKeyword: string;
  constructor(private councilService: CouncilService, private router: Router, private utilityService: UtilityService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.councilService.getData().then((data) => {
      this.filteredCouncilData = data;
      this.allCouncilData = data;
    });
  }

  viewCouncil(council) {
   
    this.router.navigate(['/tabs/executive/executive-details', {councilData: JSON.stringify(council)}]);
  }

  filterData() {
    if (this.searchKeyword && this.searchKeyword.trim().length > 0) {
      
      this.filteredCouncilData = this.allCouncilData.filter((council) => {
    console.log(this.searchKeyword);

        return (council.designationCategory.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1);
      });
    } else {
      this.filteredCouncilData = this.allCouncilData;
    }
  }
}
