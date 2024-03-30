import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'about-us' , component:AboutUsComponent}
];
