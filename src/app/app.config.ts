import { ApplicationConfig } from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  // providers: [provideHttpClient(),provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync()]
  providers: [provideHttpClient(),provideRouter(routes, withHashLocation()), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync()]
};
