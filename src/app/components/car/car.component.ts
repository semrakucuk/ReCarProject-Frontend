import { Component, OnInit } from '@angular/core';
import { Car} from 'src/app/models/car';  
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  dataLoaded=false;

  constructor( private CarService : CarService) { }

  ngOnInit(): void {
   this.getCars();
  }
  
  getCars()
  {
    console.log("1");
    this.CarService.getCars().subscribe(resonse=>{
      this.cars=resonse.data;
      this.dataLoaded=true;
      console.log("2");
    })
    console.log("3"); 
  }
}
