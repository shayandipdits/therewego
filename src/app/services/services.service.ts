import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private BASE_API_URL = environment.BASE_API_URL;

  serviceList = [];

  serviceListSubject = new Subject<any[]>();

  getServiceListListener(){
    return this.serviceListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getService').subscribe((response: any) =>{
      this.serviceList = response.data;
      this.serviceListSubject.next([...this.serviceList]);
    });
  }

  getServiceList(){
    return [...this.serviceList];
  }
}
