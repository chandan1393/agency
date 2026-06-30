import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <div
        class="fixed inset-0 z-[100] grid place-items-center bg-[var(--bg)] transition-opacity duration-500"
        [class.opacity-0]="fading()"
        aria-hidden="true"
      >
        <div class="flex flex-col items-center gap-5">
          <span class="relative grid h-16 w-16 place-items-center">
            <span class="absolute inset-0 animate-spin-slow rounded-full border-2 border-brand-primary/20 border-t-brand-primary"></span>
            <span
              class="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white shadow-glow"
            >
              <i class="fa-solid fa-meteor"></i>
            </span>
          </span>
          <span class="font-display text-sm font-semibold tracking-widest text-muted">
            NEBULA STUDIO
          </span>
        </div>
      </div>
    }
  `,
})
export class PageLoaderComponent implements OnInit {
  protected readonly visible = signal(true);
  protected readonly fading = signal(false);
  private readonly browser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.browser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.browser) {
      this.visible.set(false);
      return;
    }
    // Brief, deliberate intro then fade out.
    setTimeout(() => this.fading.set(true), 700);
    setTimeout(() => this.visible.set(false), 1200);
  }
}
