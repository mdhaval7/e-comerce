import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {

  constructor(private _apiServices:ApiserviceService, private route:Router){}
  usersignup = new FormGroup({

    username: new FormControl('',[Validators.required]),
    useremail: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]) 
  });
  submitusersignup(){
    console.warn('user register');
    this._apiServices.saveuser(this.usersignup.value).subscribe(result=>{
      if(result)
      {
        this.route.navigateByUrl('/login');
      }
    })
  }
}
