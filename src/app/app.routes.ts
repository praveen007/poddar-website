import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about-us',
    loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent)
  },
  {
    path: 'who-we-are',
    loadComponent: () => import('./components/who-we-are/who-we-are.component').then(m => m.WhoWeAreComponent)
  }
];
