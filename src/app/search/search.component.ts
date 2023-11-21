import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  serchitem:any;
  serchresult:any;
  constructor(private activated:ActivatedRoute,private _apiservicesa:ApiserviceService){
    
    this.serchitem = this.activated.snapshot.paramMap.get('query');
    // console.log(this.serchitem);
  
  }

  serch(){
    // console.log(this.serchitem)
    this._apiservicesa.serch(this.serchitem).subscribe(result=>{
      // console.log(result);
      this.serchresult = result;
      console.warn(this.serchresult)
    });
  }
  ngOnInit()
  {
    this.serch();
  }
  
}
