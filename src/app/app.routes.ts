import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'destination',
    loadComponent: () => import('./features/destination/destination.component').then(m => m.DestinationComponent)
  },
  {
    path: 'destination/:sub/:name',
    loadComponent: () => import('./features/destination/destination-details/destination-details.component').then(m => m.DestinationDetailsComponent)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];
