  
import { Injectable } from '@angular/core'; 
import  {HttpClient} from "@angular/common/http"
import { brandResponseModel } from 'src/app/models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44351/api/brands/getall"; 
  constructor(private httpClient:HttpClient) { }

  getBrands() : Observable<brandResponseModel>  {
     return this.httpClient.get<brandResponseModel>(this.apiUrl) ;
  }
}
