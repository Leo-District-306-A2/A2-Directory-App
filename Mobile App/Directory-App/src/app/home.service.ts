import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {}

    getNationalAnthemEnglish(){
      return fetch('./assets/data/nationalAnthemEnglish.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }
    getNationalAnthemSinhala(){
      return fetch('./assets/data/nationalAnthemSinhala.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }
    getPledgeOfAllegianceSinhala(){
      return fetch('./assets/data/pledgeOfAllegianceSinhala.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }
    getPledgeOfAllegianceEnglish(){
      return fetch('./assets/data/leoPledge.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }
    getLeoPledge(){
      return fetch('./assets/data/pledgeOfAllegianceEnglish.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }
    getParisaraPrathignawa(){
      return fetch('./assets/data/parisaraPrathignawa.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }
    getLeoHistory(){
      return fetch('./assets/data/leoHistory.json').then(res=>res.json())
      .then(result=>{ 
        return result;      
      })
      .catch(err=>{
        return false;
      });   
    }

  }
