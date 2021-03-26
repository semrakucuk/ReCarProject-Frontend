import { Component, OnInit } from '@angular/core';
import { Rental} from 'src/app/models/rental'; 
 import { RentalService } from 'src/app/services/rental.service';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  dataLoaded=false;

  constructor( private RentalService : RentalService) { }

  ngOnInit(): void {
   this.getRentals();
  }
  
  getRentals()
  {
    console.log("1");
    this.RentalService.getRentals().subscribe(resonse=>{
      this.rentals=resonse.data;
      this.dataLoaded=true;
      console.log("2");
    })
    console.log("3"); 
  }
}
