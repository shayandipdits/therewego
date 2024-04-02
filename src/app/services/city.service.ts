import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Subject, tap} from "rxjs";

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

  saveCity(data: any){
    return this.http.post(this.BASE_API_URL + '/saveCity', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          this.cityList.push(response.data);
          this.cityListSubject.next([...this.cityList]);
        }
      }));
  }

  updateCity(data: any){
    return this.http.post(this.BASE_API_URL + '/updateCity', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          const index = this.cityList.findIndex(x => x.id === response.data.id);
          // @ts-ignore
          this.cityList[index] = response.data;
          this.cityListSubject.next([...this.cityList]);
        }
      }));
  }

  deleteCity(id: number){
    return this.http.get(this.BASE_API_URL + '/deleteCity/' + id)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          const index = this.cityList.findIndex(x => x.id === response.data.id);
          this.cityList.splice(index,1);
          this.cityListSubject.next([...this.cityList]);
        }
      }));
  }

}
