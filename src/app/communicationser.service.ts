import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Icustomer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationserService {
  private url:string = "/assets/data/customers.json";

  constructor(private http:HttpClient) { }
    getCustomers():Observable<any>{
      return this.http.get<any>(this.url);
    }
}
