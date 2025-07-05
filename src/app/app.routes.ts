import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about-us',
    loadComponent: () => import('./features/about/about-us-page.component').then(m => m.AboutUsPageComponent)
  },
  {
    path: 'who-we-are',
    loadComponent: () => import('./components/who-we-are/who-we-are.component').then(m => m.WhoWeAreComponent)
  }
  ,
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent)
  }
];
