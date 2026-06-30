import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { FAQS } from '../../core/data/site.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, NgClass],
  templateUrl: './faq.html',
})
export class FaqComponent {
  protected readonly faqs = FAQS;
  protected readonly open = signal(0); // first item open by default

  toggle(i: number): void {
    this.open.update((current) => (current === i ? -1 : i));
  }
}
