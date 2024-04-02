import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CitiesComponent } from './cities/cities.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'about-us' , component:AboutUsComponent},
    {path:'how-it-works' , component:HowItWorksComponent},
    {path:'contact-us' , component:ContactUsComponent},
    {path:'cities' , component:CitiesComponent},
    {path:'services' , component:ServiceComponent},
    {path:'service-details/:id' , component:ServiceDetailsComponent},
    {path:'how-it-works' , component:HowItWorksComponent},
];
