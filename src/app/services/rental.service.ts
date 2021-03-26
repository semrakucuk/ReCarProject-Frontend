import { Injectable } from '@angular/core'; 
import  {HttpClient} from "@angular/common/http"
import { rentalResponseModel } from 'src/app/models/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44351/api/rentals/getall"; 
  constructor(private httpClient:HttpClient) { }

  getRentals() : Observable<rentalResponseModel>  {
     return this.httpClient.get<rentalResponseModel>(this.apiUrl) ;
  }
}
