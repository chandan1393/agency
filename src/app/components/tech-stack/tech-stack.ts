import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TECH_STACK } from '../../core/data/site.data';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section-pad bg-soft">
      <div class="container-x">
        <app-section-heading
          eyebrow="Our toolkit"
          title="A modern stack we"
          highlight="know inside out"
          subtitle="Battle-tested technologies chosen for performance, reliability and long-term maintainability."
        />

        <div
          class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          appReveal
        >
          @for (tech of stack; track tech.name; let i = $index) {
            <div
              appReveal
              [delay]="(i % 5) * 60"
              class="group flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-white/70 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft dark:bg-white/[0.03]"
            >
              <i
                [class]="tech.icon"
                class="text-3xl transition-transform duration-300 group-hover:scale-125"
                [style.color]="tech.color"
              ></i>
              <span class="text-sm font-medium">{{ tech.name }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechStackComponent {
  protected readonly stack = TECH_STACK;
}
