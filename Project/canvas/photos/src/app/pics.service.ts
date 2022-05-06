import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicsService {

  constructor(private http:HttpClient) {}
   
  get(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums/1/photos')
  }

}
