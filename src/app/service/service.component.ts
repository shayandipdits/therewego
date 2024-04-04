import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ServicesService} from "../services/services.service";
import {NgForOf, NgIf} from "@angular/common";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  public FILE_URL = environment.FILE_URL;
  serviceList: any[] = [];

  constructor(private servicesService:ServicesService) {
    this.servicesService.getServiceListListener().subscribe((response) => {
      this.serviceList = response;
      console.log(this.FILE_URL);
    });
    this.serviceList = this.servicesService.getServiceList();
  }
}
