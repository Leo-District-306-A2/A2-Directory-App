import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  // sample data
   club = [{
     clubName: 'Leo Club of University of Moratuwa',
     img: '../../assets/UoM%20Leos(Rounded).png',
     president: { name: 'Name of President', email: 'Sample Email', address: 'Sample Address', phone: '0716485403', img: '../../assets/user.png'},
     vicePresident:{name:"Name of VP",email:'Sample Email',address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"},
     secretary:{name:"Name of Secretary",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"},
     treasurer:{name:"Name of Treasere",email:'Sample Email',address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"},
     leoAdvisor:{name:"Name of Leo Advisor",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"}
   },
   {
    clubName: 'Leo Club of Piliyandala',
       img: '../../assets/logos/leo_logo.png',
       president: { name: 'Name of President', email: 'Sample Email', address: 'Sample Address', phone: 'Sample Tel', img: '../../assets/user.png'},
       vicePresident:{name:"Name of VP",email:'Sample Email',address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"},
       secretary:{name:"Name of Secretary",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"},
       treasurer:{name:"Name of Treasere",email:'Sample Email',address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"},
       leoAdvisor:{name:"Name of Leo Advisor",email:"Sample Email",address:"Sample Address",phone:"Sample Tel",img:"../../assets/user.png"}
   }];

  currentClub: any;

  constructor() { }

  getData(){   
    return this.club;
  }

  
}
