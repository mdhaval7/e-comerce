import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  data:any;
  constructor(private _apiServices:ApiserviceService){

  this._apiServices.showproduct().subscribe(result=>{
    console.warn(result);
    this.data = result;
  })
  }
 
}
