import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PORTFOLIO, PORTFOLIO_FILTERS } from '../../core/data/site.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, NgClass],
  templateUrl: './portfolio.html',
})
export class PortfolioComponent {
  protected readonly filters = PORTFOLIO_FILTERS;
  protected readonly active = signal('All');

  protected readonly items = computed(() => {
    const filter = this.active();
    return filter === 'All'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === filter);
  });

  setFilter(value: string): void {
    this.active.set(value);
  }
}
