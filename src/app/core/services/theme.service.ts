import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'nebula-theme';

/**
 * Central dark-mode state using Angular signals.
 * Persists preference and reflects it on the <html> element.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly browser: boolean;
  readonly theme = signal<Theme>('light');

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.browser = isPlatformBrowser(platformId);

    if (this.browser) {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme.set(stored ?? (prefersDark ? 'dark' : 'light'));
    }

    // Keep the DOM + storage in sync whenever the signal changes.
    effect(() => {
      const value = this.theme();
      if (!this.browser) return;
      document.documentElement.classList.toggle('dark', value === 'dark');
      localStorage.setItem(STORAGE_KEY, value);
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }
}
