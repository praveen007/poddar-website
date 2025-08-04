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
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'design-and-specifications',
    loadComponent: () => import('./features/design-specifications/design-specifications-page.component').then(m => m.DesignSpecificationsPageComponent)
  },
  {
    path: 'installation-and-services',
    loadComponent: () => import('./features/installation-training/installation-training-page.component').then(m => m.InstallationTrainingPageComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./features/contact/contact-page.component').then(m => m.ContactPageComponent)
  },
  {
    path: 'life-at-poddar',
    loadComponent: () => import('./features/careers/life-at-poddar.component').then(m => m.LifeAtPoddarComponent)
  },
  {
    path: 'why-poddar',
    loadComponent: () => import('./components/why-poddar/why-poddar.component').then(m => m.WhyPoddarComponent)
  }
];
