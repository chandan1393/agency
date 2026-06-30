import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <button
        type="button"
        (click)="toTop()"
        aria-label="Back to top"
        class="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-white shadow-glow transition-transform hover:-translate-y-1"
        [style.background]="
          'conic-gradient(#2563EB ' + progress() + '%, rgba(37,99,235,0.18) 0)'
        "
      >
        <span
          class="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary"
        >
          <i class="fa-solid fa-arrow-up text-sm"></i>
        </span>
      </button>
    }
  `,
})
export class BackToTopComponent {
  protected readonly visible = signal(false);
  protected readonly progress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    this.progress.set(height > 0 ? Math.min((scrollTop / height) * 100, 100) : 0);
    this.visible.set(scrollTop > 600);
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
