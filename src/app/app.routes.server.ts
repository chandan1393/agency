import { RenderMode, ServerRoute } from '@angular/ssr';

/** Prerender every static route at build time. */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'privacy-policy', renderMode: RenderMode.Prerender },
  { path: 'terms-and-conditions', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
