import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private BASE_API_URL = environment.BASE_API_URL;

  cityList = [];

  cityListSubject = new Subject<any[]>();

  getCityListListener(){
    return this.cityListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getCity').subscribe((response: any) =>{
      this.cityList = response.data;
      this.cityListSubject.next([...this.cityList]);
    });
  }

  getCityList(){
    return [...this.cityList];
  }

}
