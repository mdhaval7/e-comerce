import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { OderComponent } from './oder/oder.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {
    path:'sellerlogin',
    component:SellerLoginComponent
  },
  {
    path:'sellersignup',
    component:SellerSignUpComponent
  },
  {
    path:'dashbord',
    component:DashbordComponent,canActivate:[AuthGuard],
  },
  {
    path:'addproduct',
    component:AddProductComponent
  },
  {
    path:'addproduct/:id',
    component:AddProductComponent
  },
  {
    path:'oder',
    component:OderComponent,canActivate:[AuthGuard]
  },
  {
    path:'edituser/:id',
    component:EditproductComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
