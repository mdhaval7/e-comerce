import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { SellerServicesService } from '../seller-services.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{

  productid:any;
  constructor(private activate:ActivatedRoute, private _sellerServices:SellerServicesService, private route:Router){
    
    this.productid = this.activate.snapshot.paramMap.get('id');

  }
  editproduct = new FormGroup({
    productname: new FormControl('',[Validators.required]),
    productdis: new FormControl('',[Validators.required]),
    productprice: new FormControl('',[Validators.required,]),
    imageurl: new FormControl('',[Validators.required]),
  });

  editpproducts(){
    // console.warn(this.editproduct.value);
    
    this._sellerServices.editproduct(this.editproduct.value , this.productid).subscribe(result=>{
      
      if(result)
      {
        this.route.navigateByUrl('/dashbord');
      }
    })
  }
  ngOnInit()
  {
    this._sellerServices.oneProductget(this.productid).subscribe((result:any)=>{
      console.log(result);
      this.editproduct = new FormGroup({
        productname: new FormControl(result['productname'],[Validators.required]),
        productdis: new FormControl(result['productdis'],[Validators.required]),
        productprice: new FormControl(result['productprice'],[Validators.required,]),
        imageurl: new FormControl(result['imageurl'],[Validators.required]),
      });
    })
  }
}
