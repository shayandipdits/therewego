import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private BASE_API_URL = environment.BASE_API_URL;

  testimonialList = [];

  testimonialListSubject = new Subject<any[]>();

  getTestimonialListListener(){
    return this.testimonialListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getTestimonial').subscribe((response: any) =>{
      this.testimonialList = response.data;
      this.testimonialListSubject.next([...this.testimonialList]);
    });
  }

  getTestimonial(){
    return [...this.testimonialList];
  }
}
