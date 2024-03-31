import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'about-us' , component:AboutUsComponent},
    {path:'service' , component:ServiceComponent},
    {path:'service-details' , component:ServiceDetailsComponent},
    {path:'how-it-works' , component:HowItWorksComponent}
];
