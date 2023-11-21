import { Component } from '@angular/core';
import { SellerServicesService } from '../seller-services.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent {

  oderdata:any;
  constructor(private _sellerServices:SellerServicesService){
    this.getoderdata();
  }
  getoderdata(){
    this._sellerServices.getoder().subscribe(result=>{
      console.log(result)
      this.oderdata = result;
    });
  }
}
