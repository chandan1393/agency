import { ChangeDetectionStrategy, Component } from '@angular/core';
import { COMPANIES } from '../../core/data/site.data';

@Component({
  selector: 'app-marquee',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="border-y border-[var(--border)] bg-soft py-12">
      <div class="container-x">
        <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by ambitious teams worldwide
        </p>
        <div class="mask-fade-x mt-8 overflow-hidden">
          <div class="flex w-max animate-marquee items-center gap-12 hover:[animation-play-state:paused]">
            @for (name of loop; track $index) {
              <div class="flex shrink-0 items-center gap-2.5 text-lg font-bold text-muted/70">
                <i class="fa-solid fa-circle-nodes text-brand-primary/60"></i>
                <span class="font-display">{{ name }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MarqueeComponent {
  // Duplicate the list so the -50% translate loops seamlessly.
  protected readonly loop = [...COMPANIES, ...COMPANIES];
}
