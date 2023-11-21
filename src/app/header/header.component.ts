import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userlogin:any;
  userlogout:any;
  constructor(private rout: Router){

    if(localStorage.getItem('user'))
    {
      console.warn('user is login');
      
      this.userlogin = false;
      this.userlogout = true;
    }
    else{
      console.warn('user not login');
      this.userlogin = true
    }
  }
  search(serchItem:any){

    console.warn(serchItem);
    this.rout.navigateByUrl('search/'+serchItem);
  }

  ngOnInit(){
    // this.rout.events.subscribe((val:any)=>{
    //   // if()
    //   console.log(val.url)
    // })
  }
  logout(){
    localStorage.removeItem('user');
  }
}
