import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BRAND,
  FOOTER_COLUMNS,
  NAV_LINKS,
  SOCIALS,
} from '../../core/data/site.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class FooterComponent {
  protected readonly brand = BRAND;
  protected readonly columns = FOOTER_COLUMNS;
  protected readonly socials = SOCIALS;
  protected readonly year = new Date().getFullYear();

  // Map footer "Quick Links" labels to scroll fragments where possible.
  private readonly fragmentByLabel = new Map(
    NAV_LINKS.map((l) => [l.label.toLowerCase(), l.fragment]),
  );

  scrollTo(label: string, event: Event): void {
    const fragment = this.fragmentByLabel.get(label.toLowerCase());
    if (!fragment) return;
    event.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
