import { Injectable } from '@angular/core'; 
import  {HttpClient} from "@angular/common/http"
import { customerResponseModel } from 'src/app/models/customerResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44351/api/customers/getall"; 
  constructor(private httpClient:HttpClient) { }

  getCustomers() : Observable<customerResponseModel>  {
     return this.httpClient.get<customerResponseModel>(this.apiUrl) ;
  }
}
