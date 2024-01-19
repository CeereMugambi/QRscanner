import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000';
  
 
  constructor(private http: HttpClient) { }
  
  getParams(params: any): Observable<any> {
  return this.http.get(`${this.url}/params`, { params }).pipe(
    catchError((error) => {
      console.error('Error fetching params:', error);
      return throwError(error);
    })
  );
}

}
