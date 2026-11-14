import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../features/dashboard/pages/dashboard-page/dashboard-page').then(
        (m) => m.DashboardPage
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../features/profile/pages/profile-page/profile-page').then(
        (m) => m.ProfilePage
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
