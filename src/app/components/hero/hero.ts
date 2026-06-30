import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import { CountUpDirective } from '../../core/directives/count-up.directive';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { HERO_TECH, STATS } from '../../core/data/site.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CountUpDirective, RevealDirective],
  templateUrl: './hero.html',
})
export class HeroComponent {
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly stats = STATS;
  protected readonly tech = HERO_TECH;

  constructor() {
    // GSAP scroll-driven parallax — browser-only, lazily imported so it
    // never touches the SSR/prerender pass.
    afterNextRender(() => this.initGsap());
  }

  private async initGsap(): Promise<void> {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    try {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const root = this.host.nativeElement as HTMLElement;
      const aurora = root.querySelector('.js-aurora');
      const mockup = root.querySelector('.js-mockup');

      if (aurora) {
        gsap.to(aurora, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
        });
      }

      if (mockup) {
        // Gentle entrance pop, then a soft scroll parallax.
        gsap.from(mockup, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
        gsap.to(mockup, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }
    } catch {
      // GSAP optional — the page is fully functional without it.
    }
  }

  scrollTo(fragment: string, event: Event): void {
    event.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
