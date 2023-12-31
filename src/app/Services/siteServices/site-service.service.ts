import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteServiceService {


  private baseURL = 'http://localhost:3000/sites/' 

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.baseURL);
  }
}
