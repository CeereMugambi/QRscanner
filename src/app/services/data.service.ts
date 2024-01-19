import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000';
 
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable <any>{
    return this.http.get(this.url + '/data');
  }
}
