import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './seller/auth.guard';
import { SearchComponent } from './search/search.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { MyoderComponent } from './myoder/myoder.component';

const routes: Routes = [

  {
    path:'', component:HomeComponent, 
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'search/:query',
    component:SearchComponent
  },
  {
    path:'signup',
    component:UsersignupComponent
  },
  {
    path:'login',
    component:UserloginComponent
  },
  {
    path: 'detail/:productid',
    component: DetailproductComponent
  },
  {
    path: 'buynow/:productid',
    component: BuyproductComponent
  },
  { 
    path:'myoder',
    component:MyoderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
