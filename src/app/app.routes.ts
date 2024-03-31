import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'about-us' , component:AboutUsComponent},
    {path:'service' , component:ServiceComponent},
    {path:'service-details' , component:ServiceDetailsComponent}
];
