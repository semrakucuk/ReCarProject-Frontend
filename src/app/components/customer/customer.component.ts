import { Component, OnInit } from '@angular/core';
import { Customer} from 'src/app/models/customer'; 
 import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  dataLoaded=false;

  constructor( private CustomerService : CustomerService) { }

  ngOnInit(): void {
   this.getCustomers();
  }
  
  getCustomers()
  {
    console.log("1");
    this.CustomerService.getCustomers().subscribe(resonse=>{
      this.customers=resonse.data;
      this.dataLoaded=true;
      console.log("2");
    })
    console.log("3"); 
  }
}
