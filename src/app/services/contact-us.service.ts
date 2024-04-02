import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {catchError, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private BASE_API_URL = environment.BASE_API_URL;

  contactUsList: any[] = [];

  contactUsSubject = new Subject<any[]>();

  getContactUsListener(){
    return this.contactUsSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getContactUs').subscribe((response: any) =>{
      this.contactUsList = response.data;
      this.contactUsSubject.next([...this.contactUsList]);
    });
  }

  saveContactUs(value: any){
    return this.http.post(this.BASE_API_URL + '/saveContactUs', value)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if(response.success == 1){
          // @ts-ignore
          this.contactUsList.push(response.data);
          this.contactUsSubject.next([...this.contactUsList]);
        }
      }));
  }

}
