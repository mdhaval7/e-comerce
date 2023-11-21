import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerServicesService {

  constructor(private htttp:HttpClient,private route : Router) { }

  issellerlogin = new BehaviorSubject<boolean>(false);
  savedata(data:any)
  {
    return this.htttp.post('http://localhost:3000/seller',data,{observe:'response'}) 
    .subscribe(
      result =>{
      this.issellerlogin.next(true);
      // localStorage.setItem('seller',JSON.stringify(result.body));
      this.route.navigateByUrl('/sellerlogin');
      console.warn('result',result);}
      )
  }
  relode(){
    if(localStorage.getItem('seller'))
    {
      this.issellerlogin.next(true);
      this.route.navigateByUrl('/dashbord');
    }
  }
  login(data:any)
  {
    this.htttp.get('http://localhost:3000/seller?username='+data.username+'&email='+ data.email+'&password='+data.password,
    {observe : 'response'}).subscribe((result:any)=>{
      console.log(result);
      if(result && result.body && result.body.length)
      {
        console.warn('set item');
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.route.navigateByUrl('/dashbord');

      }
      else
      {
        console.warn('fail login');
      }
    });
  }

  addProduct(data:any)
  {
    return this.htttp.post('http://localhost:3000/product',data);
  }
  deleteProduct(data:number){
    return this.htttp.delete('http://localhost:3000/product/'+data);
  }

  oneProductget(data:number)
  {
    return this.htttp.get('http://localhost:3000/product/'+data);
  }
  editproduct(data:any,id:any){
    return this.htttp.put(`http://localhost:3000/product/${id}`,data);
   
    // console.warn(data);
    // console.warn(data.id)
  }
  getoder(){
    return this.htttp.get('http://localhost:3000/oder');
  }
}
