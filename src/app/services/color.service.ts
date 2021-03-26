import { Injectable } from '@angular/core'; 
import  {HttpClient} from "@angular/common/http"
import { colorResponseModel } from 'src/app/models/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44351/api/colors/getall"; 
  constructor(private httpClient:HttpClient) { }

  getColors() : Observable<colorResponseModel>  {
     return this.httpClient.get<colorResponseModel>(this.apiUrl) ;
  }
}
