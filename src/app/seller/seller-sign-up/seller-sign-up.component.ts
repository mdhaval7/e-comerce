import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup,Validators}from '@angular/forms'
import { SellerServicesService } from '../seller-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-sign-up',
  templateUrl: './seller-sign-up.component.html',
  styleUrls: ['./seller-sign-up.component.css'],
 })
export class SellerSignUpComponent {

  constructor(private _sellerServices:SellerServicesService,private route: Router){}
  sellerlogin :any  = new FormGroup({
    username : new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  });
  sellerLoginform(){
    console.warn(this.sellerlogin.value);
    this.savedata();
    
  }
  savedata()
  {
    this._sellerServices.savedata(this.sellerlogin.value);
  }
 
  ngOnInit(){
    this._sellerServices.relode();
  }
}
