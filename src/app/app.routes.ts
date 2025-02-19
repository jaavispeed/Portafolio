import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./Pages/landing-page/landing-page.component')
  },
];
