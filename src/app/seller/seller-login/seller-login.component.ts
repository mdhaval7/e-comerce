import { Component, ViewEncapsulation } from '@angular/core';
import { SellerServicesService } from '../seller-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css'],

})
export class SellerLoginComponent {

  constructor(private _sellerServices:SellerServicesService){}
 
  sellerlogin :any  = new FormGroup({
    username : new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  });
  
  sellerLogin()
  {
    this._sellerServices.login(this.sellerlogin.value);
  }

}
