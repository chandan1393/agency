import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { BRAND, NAV_LINKS } from '../../core/data/site.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly brand = BRAND;
  protected readonly links = NAV_LINKS;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('home');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
    this.updateActive();
  }

  private updateActive(): void {
    const offset = window.innerHeight * 0.35;
    for (const link of this.links) {
      const el = document.getElementById(link.fragment);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        this.active.set(link.fragment);
        break;
      }
    }
  }

  goTo(fragment: string, event: Event): void {
    event.preventDefault();
    this.menuOpen.set(false);
    const el = document.getElementById(fragment);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
