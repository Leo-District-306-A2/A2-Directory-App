import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  //sample data
   club = [{
     clubName:"Leo Club of University of Moratuwa",
     img:"",
     president:{name:"Name of President",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
     vicePresident:{name:"Name of VP",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
     secretary:{name:"Name of Secretary",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
     treasurer:{name:"Name of Treasere",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
     leoAdvisor:{name:"Name of Leo Advisor",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"}
   },
   {
    clubName:"Leo Club of Piliyandala",
    img:"",
    president:{name:"Name of President",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
    vicePresident:{name:"Name of VP",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
    secretary:{name:"Name of Secretary",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
    treasurer:{name:"Name of Treasere",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"},
    leoAdvisor:{name:"Name of Leo Advisor",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"Sample img"}
  }]

  currentClub: any

  constructor() { }

  getData(){   
    return this.club;
  }

  
}
