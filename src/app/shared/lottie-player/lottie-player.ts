import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import type { AnimationItem } from 'lottie-web';

/**
 * Thin wrapper around lottie-web. The library is dynamically imported inside
 * afterNextRender so it never runs during SSR/prerender and is code-split out
 * of the main server bundle. Respects prefers-reduced-motion.
 */
@Component({
  selector: 'app-lottie-player',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div #host class="h-full w-full" role="img" [attr.aria-label]="ariaLabel"></div>`,
})
export class LottiePlayerComponent implements OnDestroy {
  @ViewChild('host', { static: true }) host!: ElementRef<HTMLDivElement>;

  @Input() src = '';
  @Input() loop = true;
  @Input() autoplay = true;
  @Input() speed = 1;
  @Input() ariaLabel = 'Animation';

  private animation?: AnimationItem;

  constructor() {
    afterNextRender(() => this.load());
  }

  private async load(): Promise<void> {
    if (!this.src) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    try {
      const lottie = (await import('lottie-web')).default;
      this.animation = lottie.loadAnimation({
        container: this.host.nativeElement,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay && !reduce,
        path: this.src,
      });
      this.animation.setSpeed(this.speed);
      // For reduced motion, show the final frame statically.
      if (reduce) {
        this.animation.addEventListener('DOMLoaded', () => {
          this.animation?.goToAndStop(this.animation.totalFrames - 1, true);
        });
      }
    } catch {
      // Fail silently — the surrounding UI still works without the animation.
    }
  }

  ngOnDestroy(): void {
    this.animation?.destroy();
  }
}
