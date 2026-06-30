import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { FEATURES } from '../../core/data/site.data';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section-pad bg-soft">
      <div class="container-x">
        <app-section-heading
          eyebrow="Why choose us"
          title="A partner that sweats"
          highlight="the details"
          subtitle="We obsess over speed, design and clean code so your website performs as good as it looks."
        />

        <div class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          @for (feature of features; track feature.title; let i = $index) {
            <div
              appReveal
              [delay]="(i % 4) * 90"
              class="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40 hover:shadow-glow dark:bg-white/[0.03]"
            >
              <span
                class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15 text-xl text-brand-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              >
                <i [class]="feature.icon"></i>
              </span>
              <h3 class="mt-5 font-display text-base font-semibold">{{ feature.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-muted">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class WhyChooseUsComponent {
  protected readonly features = FEATURES;
}
