import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  private readonly router = inject(Router);
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
    if (this.onHome()) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment });
    }
  }

  scrollTop(event: Event): void {
    event.preventDefault();
    if (this.onHome()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }

  private onHome(): boolean {
    return this.router.url.split(/[?#]/)[0] === '/';
  }
}
