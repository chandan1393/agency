import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  computed,
  signal,
} from '@angular/core';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TESTIMONIALS } from '../../core/data/site.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, NgClass],
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  protected readonly items = TESTIMONIALS;
  protected readonly index = signal(0);
  protected readonly stars = [1, 2, 3, 4, 5];

  // Track-position as a percentage for the sliding transform.
  protected readonly offset = computed(() => `-${this.index() * 100}%`);

  private timer?: ReturnType<typeof setInterval>;
  private readonly browser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.browser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.browser) this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  start(): void {
    this.stop();
    this.timer = setInterval(() => this.next(), 5000);
  }

  stop(): void {
    if (this.timer) clearInterval(this.timer);
  }

  next(): void {
    this.index.update((i) => (i + 1) % this.items.length);
  }

  prev(): void {
    this.index.update((i) => (i - 1 + this.items.length) % this.items.length);
  }

  goTo(i: number): void {
    this.index.set(i);
    this.start(); // reset timer on manual interaction
  }
}
