import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  serviceList: any[] = [];

  constructor(private servicesService:ServicesService) {
    this.servicesService.getServiceListListener().subscribe((response) => {
      this.serviceList = response;
    });
    this.serviceList = this.servicesService.getServiceList();
  }
}
