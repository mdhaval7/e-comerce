import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _apiServices : ApiserviceService, private route:Router)
  {
    this.fatchcart();
  }
  userid:any;
  carddata:any;
  fatchcart(){
    let user:any = localStorage.getItem('user');
    let userparse = JSON.parse(user);
    this.userid = userparse.map(function(i:any){
      return i.id;
    });

    this._apiServices.getcart(this.userid[0]).subscribe(result =>{
      console.warn(result);
      
      this.carddata = result;
    })
  }
  
  removeitem(removecardId:any)
  {
    this._apiServices.deletecart(removecardId).subscribe(result=>console.log(result))
  }
  buynow(data:any){
    this.route.navigateByUrl('/buynow/'+data);
  }
}
