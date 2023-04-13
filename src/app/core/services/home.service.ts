import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _httpClient:HttpClient) { 
    console.log(environment.baseUrl)
  }
  getData(){
    return this._httpClient.get(environment.baseUrl)
  }
}
