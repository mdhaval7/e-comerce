import { Component } from '@angular/core';
import { SellerServicesService } from '../seller-services.service';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  constructor(private _apiservices:ApiserviceService,private _sellerServices:SellerServicesService,private rout:Router){
    this.getProduct();
  }
  data:any;
  getProduct(){
    this._apiservices.showproduct().subscribe(result=> {
    console.log(result)
    this.data = result;
   }
     );
  }
  delete(data:number){
    this._sellerServices.deleteProduct(data).subscribe()
    console.log(data);
  }
  editProduct(data:number){
    this.rout.navigateByUrl('/addproduct/'+data);
  }
  
}
