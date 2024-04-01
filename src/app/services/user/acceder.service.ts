import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccederService {
  urlBase = 'http://127.0.0.1/Apis/acceder.php';


  constructor(private http: HttpClient) {  }
  acceder(): Observable<any[]>{
    return this.http.get<any[]>(this.urlBase)
  }
  
  

}
