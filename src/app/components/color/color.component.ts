import { Component, OnInit } from '@angular/core';
import { Color} from 'src/app/models/color'; 
 import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  dataLoaded=false;

  constructor( private ColorService : ColorService) { }

  ngOnInit(): void {
   this.getColors();
  }
  
  getColors()
  {
    console.log("1");
    this.ColorService.getColors().subscribe(resonse=>{
      this.colors=resonse.data;
      this.dataLoaded=true;
      console.log("2");
    })
    console.log("3"); 
  }
}
