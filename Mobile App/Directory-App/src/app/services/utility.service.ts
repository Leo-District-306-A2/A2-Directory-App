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

  search(data,searchKeyword){
    if(searchKeyword && searchKeyword.trim().length > 0){
      if(data[0].hasOwnProperty('clubName')){
        return data.filter((club)=>{
          return (club.clubName.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || club.officers === this.innerSearch(club.officers,searchKeyword));
        });       
      }else if(data[0].hasOwnProperty('designationCategory')){
        return data.filter((officer)=>{
          return (officer.designationCategory.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 || officer.officers === this.innerSearch(officer.officers,searchKeyword));
        });       
      }
    }else{
      return data;
    }
    
  }

innerSearch(officers,searchKeyword){
    var officerList = officers.filter((officer)=>{
      return (
        officer.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
        officer.email.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
        officer.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
        officer.phone.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 
        );
    });
    if(officerList.length > 0){
      return officers;
    }else{
      return false
    }
}


}
