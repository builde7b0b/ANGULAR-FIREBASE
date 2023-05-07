import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public get(){ // METHOD TO INVOKE GET METHOD OF HTTP CLIENT TO SENT GET REQUEST
    return this.httpClient.get(this.SERVER_URL); // TO THE REST APIS ERVER
    
  }
}
