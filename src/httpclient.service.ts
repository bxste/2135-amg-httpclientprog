import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(private http: HttpClient) {}
  getUserfromServer() {
    let params = new HttpParams().set('limit', 6);
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
