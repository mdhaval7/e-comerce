import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {

  detilitem:any;
  productdata:any;
  constructor(private activated:ActivatedRoute,private _apiServices:ApiserviceService,private route : Router){
    this.detilitem = this.activated.snapshot.paramMap.get('productid');
    this.getitem();
  }
  getitem(){
    this._apiServices.productDetail(this.detilitem).subscribe(result =>{
      console.warn(result);
      this.productdata = result;
    })
  }


  // user id store
   userid:any;
  addtoCart(){
    if(!localStorage.getItem('user'))
    {
      alert('first login then add to cart');
      this.route.navigateByUrl('/login');
    }
    else
    {
      console.warn('user is login');
      let user:any = localStorage.getItem('user');
      let userparse = JSON.parse(user)
      this.userid = userparse.map(function(i:any){
        return i.id;
      });

      console.log(this.userid);
      let carddata = {
        ...this.productdata,
        userids: this.userid[0],
        productid: this.productdata.id,
      }
      delete carddata.id;
      console.log(carddata);
      
      this._apiServices.addcart(carddata).subscribe(result => console.log(result));
      this.route.navigateByUrl('/cart');
    }
  }
}
