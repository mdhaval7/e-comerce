import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SellerModule } from './seller/seller.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule}from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { MyoderComponent } from './myoder/myoder.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    SearchComponent,
    UsersignupComponent,
    UserloginComponent,
    DetailproductComponent,
    BuyproductComponent,
    MyoderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SellerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
