import { Component } from '@angular/core';
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent {
  serviceList: any[] = [];
  constructor(private servicesService:ServicesService) {
    this.servicesService.getServiceListListener().subscribe((response) => {
      this.serviceList = response;
    });
    this.serviceList = this.servicesService.getServiceList();
  }
}
