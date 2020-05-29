import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }

  sortJsonArrayByVisibilityOrder(array) {
    array.sort((a, b) => a.visibility_order - b.visibility_order);
    return array;
  }

  searchClub(clubs, searchKeyword) {
    return clubs.filter((club) => {
      // tslint:disable-next-line:max-line-length
      return (club.clubName.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || this.searchByOfficerProperties(club.officers, searchKeyword));
    });
  }

  searchCouncil(councilData, searchKeyword) {
    return councilData.filter((officer) => {
      // tslint:disable-next-line:max-line-length
      return (officer.designationCategory.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || this.searchByOfficerProperties(officer.officers, searchKeyword));
    });
  }

searchByOfficerProperties(officers, searchKeyword) {
  // tslint:disable-next-line:prefer-const
    let officerList = officers.filter((officer) => {
      return (
        officer.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
        // || officer.email.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
        // officer.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
        // officer.phone.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
        );
    });
    return officerList.length > 0;
}
}
