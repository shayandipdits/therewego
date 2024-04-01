import {CommonModule, NgForOf, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {CityService} from "../services/city.service";
import {environment} from "../../environments/environment";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,CommonModule,NgbModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public FILE_URL = environment.FILE_URL;
  starRating = 4;
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  cityList: any[] = [];
  constructor(private cityService: CityService) {
    this.cityService.getCityListListener().subscribe((response) => {
      this.cityList = response;
    });
    this.cityList = this.cityService.getCityList();
  }
}
