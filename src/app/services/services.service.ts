import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {catchError, Subject, tap} from "rxjs";

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

  saveServices(data: any){
    return this.http.post(this.BASE_API_URL + '/saveService', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          this.serviceList.push(response.data);
          this.serviceListSubject.next([...this.serviceList]);
        }
      }));
  }

  updateServices(data: any){
    return this.http.post(this.BASE_API_URL + '/updateService', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          const index = this.cityList.findIndex(x => x.id === response.data.id);
          // @ts-ignore
          this.serviceList[index] = response.data;
          this.serviceListSubject.next([...this.serviceList]);
        }
      }));
  }

  deleteServices(id: number){
    return this.http.get(this.BASE_API_URL + '/deleteService/' + id)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          const index = this.cityList.findIndex(x => x.id === response.data.id);
          this.serviceList.splice(index,1);
          this.serviceListSubject.next([...this.serviceList]);
        }
      }));
  }

}
