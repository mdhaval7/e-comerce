import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-myoder',
  templateUrl: './myoder.component.html',
  styleUrls: ['./myoder.component.css']
})
export class MyoderComponent {

  userid:any;
  myoderdata:any;
  constructor(private _apiservise:ApiserviceService){
    let user:any = localStorage.getItem('user');
    let userparse = JSON.parse(user);
    this.userid = userparse.map(function(i:any){
      return i.id;
    });

    console.log( this.userid[0]);
   
    this._apiservise.getoder(this.userid[0]).subscribe(result=>{

      console.log(result);
      this.myoderdata = result;
    })
  }

  cancleoder(id:any){
    this._apiservise.cancleoder(id).subscribe(result =>{
      console.warn(result);
      
    })
  }

  
}
