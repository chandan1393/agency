import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

/**
 * The landing page lives at '' and is navigated internally via fragment
 * scrolling. The two legal pages have their own routes. Lazy-loaded so they
 * stay out of the initial bundle.
 */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicyComponent),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./pages/terms-and-conditions/terms-and-conditions').then(
        (m) => m.TermsAndConditionsComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
