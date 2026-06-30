import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { MarqueeComponent } from './components/marquee/marquee';
import { ServicesComponent } from './components/services/services';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us';
import { ProcessComponent } from './components/process/process';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { PricingComponent } from './components/pricing/pricing';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { FaqComponent } from './components/faq/faq';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { PageLoaderComponent } from './components/page-loader/page-loader';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
import { CursorGlowComponent } from './components/cursor-glow/cursor-glow';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
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
    FooterComponent,
    PageLoaderComponent,
    BackToTopComponent,
    CursorGlowComponent,
  ],
  templateUrl: './app.html',
})
export class App {}
