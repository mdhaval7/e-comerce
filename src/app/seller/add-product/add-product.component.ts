import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { SellerServicesService } from '../seller-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  editporduct:any = {};
  editbtn:boolean = false;
  addbtn:boolean = true;
  constructor(private _sellerServices:SellerServicesService,private rout:Router,private activaterout:ActivatedRoute){

    let productid = this.activaterout.snapshot.paramMap.get('id');
    if(productid)
    {
      this.editbtn = true;
      this.addbtn = false;
    }
    this.getOneProduct(productid);
  }
  addProduct = new FormGroup({
    productname: new FormControl('',[Validators.required]),
    productdis: new FormControl('',[Validators.required]),
    productprice: new FormControl('',[Validators.required,]),
    imageurl: new FormControl('',[Validators.required]),
  });


  addpproduct()
  {
    this._sellerServices.addProduct(this.addProduct.value).subscribe(result=>{
      console.log(result);
      this.rout.navigateByUrl('/dashbord');
    })
  }
  getOneProduct(data:any)
  {
    this._sellerServices.oneProductget(data).subscribe(result=>{
      console.log(result);
      this.editporduct = result;
      console.log(this.editporduct.productname);

    })
  }

  ngOnInit()
  {
    
  }

}
