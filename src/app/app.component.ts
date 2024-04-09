import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TogetherVGo';
  // @ts-ignore
  typeSelected: 'ball-fussion';
  adminHeading = false;
  constructor(
    private readonly router: Router,private spinnerService: NgxSpinnerService
  ) {
    this.router.events.subscribe((e) => {
      if(this.router.url == '/login'){
        this.adminHeading = true;
      }
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
