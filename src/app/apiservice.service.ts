import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http : HttpClient , private route:Router) { }

  showproduct()
  {
    return this.http.get('http://localhost:3000/product');
  }

  serch(data:any){
    return this.http.get('http://localhost:3000/product?q='+data)
  }
  saveuser(data:any)
  {
    console.warn(data);
    return this.http.post('http://localhost:3000/users',data);
  }
  userlogin(data:any){
    this.http.get('http://localhost:3000/users?username='+data.username+'&email='+ data.email+'&password='+data.password,
    {observe: 'response'}).subscribe((result:any ) => {
      if(result && result.body && result.body.length)
      {
        localStorage.setItem('user',JSON.stringify(result.body));
        console.warn(result.body)
        this.route.navigateByUrl('/');
      }
    })
  }
  productDetail(id:any){
    return this.http.get('http://localhost:3000/product/'+id);
  }

  addcart(data:any){
    return this.http.post('http://localhost:3000/cart',data);
  }
  getcart(id:any)
  {
    return this.http.get('http://localhost:3000/cart?userids='+id);
  }
  deletecart(removeId:any)
  {
    return this.http.delete('http://localhost:3000/cart/'+removeId);
  }
  oder(data:any){
    return this.http.post('http://localhost:3000/oder',data);
  }
  getoder(id:any)
  {
    return this.http.get('http://localhost:3000/oder?userid='+id)
  }
  cancleoder(id:any)
  {
    return this.http.delete('http://localhost:3000/oder/'+id);
  }
}
