import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SeoService } from '../../core/services/seo.service';
import { LegalPageData } from '../../core/models/site.models';
import { NgClass } from '@angular/common';

/**
 * Shared layout for legal pages (Privacy Policy, Terms & Conditions).
 * Renders a hero banner, a reading-progress bar, a sticky desktop table of
 * contents with active-section highlighting, and animated content cards.
 * Fully data-driven via the [data] input so both pages reuse one component.
 */
@Component({
  selector: 'app-legal-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, NgClass],
  templateUrl: './legal-page.html',
})
export class LegalPageComponent implements OnInit {
  @Input({ required: true }) data!: LegalPageData;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly seo = inject(SeoService);

  protected readonly progress = signal(0);
  protected readonly activeId = signal('');

  constructor() {
    afterNextRender(() => this.trackSections());
  }

  ngOnInit(): void {
    this.activeId.set(this.data.sections[0]?.id ?? '');
    this.seo.update({
      title: this.data.seoTitle,
      description: this.data.seoDescription,
      path: this.data.path,
    });
    this.seo.setJsonLd(
      this.seo.webPageSchema(this.data.title, this.data.seoDescription, this.data.path),
    );
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.progress.set(max > 0 ? Math.min((doc.scrollTop / max) * 100, 100) : 0);
  }

  /** Highlight the TOC entry for whichever section is in view. */
  private trackSections(): void {
    if (!('IntersectionObserver' in window)) return;
    const sections = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeId.set(entry.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
  }

  goToSection(id: string, event: Event): void {
    event.preventDefault();
    this.activeId.set(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
