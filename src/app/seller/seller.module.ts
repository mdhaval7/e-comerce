import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OderComponent } from './oder/oder.component';
import { EditproductComponent } from './editproduct/editproduct.component';




@NgModule({
  declarations: [
    SellerSignUpComponent,
    SellerLoginComponent,
    DashbordComponent,
    AddProductComponent,
    OderComponent,
    EditproductComponent,
   
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    SellerSignUpComponent
  ]
})
export class SellerModule {}
