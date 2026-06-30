import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type RevealVariant = 'up' | 'left' | 'right' | 'zoom';

/**
 * Lightweight scroll-reveal directive — an AOS replacement built on
 * IntersectionObserver. Adds `.reveal` (+ variant) and toggles `.is-visible`
 * once the element scrolls into view. Honors prefers-reduced-motion.
 *
 * Usage: <div appReveal variant="left" [delay]="120">…</div>
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() variant: RevealVariant = 'up';
  @Input() delay = 0; // ms
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngOnInit(): void {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'reveal');
    if (this.variant !== 'up') {
      this.renderer.addClass(host, `reveal--${this.variant}`);
    }
    if (this.delay) {
      this.renderer.setStyle(host, 'transition-delay', `${this.delay}ms`);
    }

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.renderer.addClass(host, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'is-visible');
            if (this.revealOnce) this.observer?.unobserve(host);
          } else if (!this.revealOnce) {
            this.renderer.removeClass(host, 'is-visible');
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
