import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor(private _apiServices:ApiserviceService){}

  userlogin = new FormGroup({
    username: new FormControl('',[Validators.required]),
    useremail : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  });
  submituserlogin(){
    this._apiServices.userlogin(this.userlogin.value);
  }
}
