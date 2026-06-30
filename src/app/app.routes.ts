import { Routes } from '@angular/router';

/**
 * Single-page experience — all sections live on the home route and are
 * navigated via in-page fragment scrolling (see the navbar component).
 * A wildcard keeps any unknown path on the landing page.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', children: [] },
  { path: '**', redirectTo: '' },
];
