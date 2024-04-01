import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {
  public FILE_URL = environment.FILE_URL;
  serviceList: any[] = [];
  serviceDetails : any;
  constructor(private servicesService:ServicesService,private route: ActivatedRoute) {
    this.servicesService.getServiceListListener().subscribe((response) => {
      this.serviceList = response;
      this.serviceDetails = this.serviceList.find(x => x.id == this.route.snapshot.paramMap.get('id'));
    });
    this.serviceList = this.servicesService.getServiceList();
    if(this.serviceList.length > 0){
      this.serviceDetails = this.serviceList.find(x => x.id == this.route.snapshot.paramMap.get('id'));
    }
  }
}
