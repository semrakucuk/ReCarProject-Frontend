import { Component, OnInit } from '@angular/core';
import { Brand} from 'src/app/models/brand'; 
 import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  dataLoaded=false;

  constructor( private BrandService : BrandService) { }

  ngOnInit(): void {
   this.getBrands();
  }
  
  getBrands()
  {
    console.log("1");
    this.BrandService.getBrands().subscribe(resonse=>{
      this.brands=resonse.data;
      this.dataLoaded=true;
      console.log("2");
    })
    console.log("3"); 
  }
}
