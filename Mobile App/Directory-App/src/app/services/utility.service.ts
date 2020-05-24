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

}
