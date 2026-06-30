import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Animates a number from 0 to [appCountUp] when it scrolls into view.
 * Renders [prefix] + value + [suffix]. Respects reduced-motion.
 */
@Directive({ selector: '[appCountUp]' })
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCountUp') end = 0;
  @Input() duration = 1800; // ms
  @Input() suffix = '';
  @Input() prefix = '';

  private observer?: IntersectionObserver;
  private started = false;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.textContent = `${this.prefix}0${this.suffix}`;

    if (!isPlatformBrowser(this.platformId)) {
      node.textContent = `${this.prefix}${this.end}${this.suffix}`;
      return;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      node.textContent = `${this.prefix}${this.end}${this.suffix}`;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.started) {
          this.started = true;
          this.run();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(node);
  }

  private run(): void {
    const node = this.el.nativeElement;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      // easeOutExpo for a snappy, premium settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * this.end);
      node.textContent = `${this.prefix}${current}${this.suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
