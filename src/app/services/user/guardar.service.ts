import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../../componentes/main/estudiante.model';
@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  urlPost = 'http://127.0.0.1/Apis/guardar.php';
  constructor(private http: HttpClient) { }
  guardar(est: Estudiante): Observable<any> {
    return this.http.post<any>(this.urlPost, est);
  }
}
