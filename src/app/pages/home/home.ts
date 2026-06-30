import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { MarqueeComponent } from '../../components/marquee/marquee';
import { ServicesComponent } from '../../components/services/services';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us';
import { ProcessComponent } from '../../components/process/process';
import { PortfolioComponent } from '../../components/portfolio/portfolio';
import { PricingComponent } from '../../components/pricing/pricing';
import { TechStackComponent } from '../../components/tech-stack/tech-stack';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { FaqComponent } from '../../components/faq/faq';
import { ContactComponent } from '../../components/contact/contact';
import { SeoService } from '../../core/services/seo.service';

/**
 * Landing page — composes all marketing sections. The navbar, footer and
 * global widgets live in the app shell so they persist across routes.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    MarqueeComponent,
    ServicesComponent,
    WhyChooseUsComponent,
    ProcessComponent,
    PortfolioComponent,
    PricingComponent,
    TechStackComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
})
export class HomeComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Nebula Studio — Premium Web Design & Development Agency',
      description:
        'Nebula Studio builds fast, SEO-optimized, conversion-focused websites and web apps — Angular, Java Spring Boot, e-commerce, and more. Get a free quote today.',
      path: '/',
    });
  }
}
