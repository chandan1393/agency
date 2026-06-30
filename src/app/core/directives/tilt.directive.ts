import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Subtle pointer-driven 3D tilt for cards. Disabled for reduced-motion
 * and on non-browser platforms. Resets smoothly on mouse leave.
 */
@Directive({ selector: '[appTilt]' })
export class TiltDirective {
  @Input() max = 8; // max degrees
  private enabled = true;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    if (!isPlatformBrowser(platformId)) {
      this.enabled = false;
      return;
    }
    this.enabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const node = this.el.nativeElement;
    node.style.transformStyle = 'preserve-3d';
    node.style.transition = 'transform 0.25s ease';
  }

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    if (!this.enabled) return;
    const node = this.el.nativeElement;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${-py * this.max}deg) rotateY(${px * this.max}deg) translateY(-4px)`;
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (!this.enabled) return;
    this.el.nativeElement.style.transform =
      'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  }
}
