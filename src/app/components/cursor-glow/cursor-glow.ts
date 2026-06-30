import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Soft gradient blob that trails the cursor with a little easing.
 * Only runs on fine-pointer devices and when motion is allowed.
 */
@Component({
  selector: 'app-cursor-glow',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      #glow
      class="pointer-events-none fixed left-0 top-0 z-[60] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 mix-blend-screen blur-[80px] transition-opacity duration-500 lg:block"
      style="background: radial-gradient(circle, rgba(37,99,235,0.45), rgba(124,58,237,0.25) 45%, transparent 70%)"
      aria-hidden="true"
    ></div>
  `,
})
export class CursorGlowComponent implements AfterViewInit {
  @ViewChild('glow') glow!: ElementRef<HTMLDivElement>;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private active = false;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduce) return;

    window.addEventListener('mousemove', this.onMove, { passive: true });
    requestAnimationFrame(this.loop);
  }

  private onMove = (e: MouseEvent): void => {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    if (!this.active) {
      this.active = true;
      this.glow.nativeElement.style.opacity = '1';
    }
  };

  private loop = (): void => {
    // Lerp toward the cursor for a smooth, weighted trail.
    this.currentX += (this.targetX - this.currentX) * 0.12;
    this.currentY += (this.targetY - this.currentY) * 0.12;
    const el = this.glow.nativeElement;
    el.style.transform = `translate(${this.currentX}px, ${this.currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(this.loop);
  };
}
