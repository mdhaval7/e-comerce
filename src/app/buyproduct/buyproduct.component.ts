import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent {
  id:any;
  userid:any
constructor(private activaterout:ActivatedRoute, private _apiServices:ApiserviceService,private router:Router){
  this.id = activaterout.snapshot.paramMap.get('productid');
  this.productinfo();
  let user:any = localStorage.getItem('user');
  if(user)
  {
    let parseuser = JSON.parse(user);
    this.userid = parseuser.map(function(i:any){
    return i.id;
  });
  }
  else{
    alert('first login');
    this.router.navigateByUrl('/login');
  }
  

}
buydetil = new FormGroup({
  fullname: new FormControl('',[Validators.required]),
  PhoneNumber: new FormControl('',[Validators.required,Validators.maxLength(10)]),
  address:new FormControl('',[Validators.required]),
  pincode:new FormControl('',[Validators.required])
});

alldata:any;
odernow(){
  this.alldata = {
    ...this.buydetil.value,
    productinfo:this.productInfo,
    userid:this.userid[0],
  }
  console.warn(this.alldata);
  this._apiServices.oder(this.alldata).subscribe(result=>{
    console.log(result)
    if(result)
    {
      this.router.navigateByUrl('/myoder');
    }
  });
}
productInfo:any;
productinfo(){
  this._apiServices.productDetail(this.id).subscribe(result=>{
    this.productInfo = result;
  })
}
}
