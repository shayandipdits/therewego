import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

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

}
