import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';

/**
 * Shared heading block: eyebrow label, gradient title and optional subtitle.
 * Centered by default; pass [align]="'left'" for left-aligned headers.
 */
@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <div
      class="mx-auto max-w-2xl"
      [class.text-center]="align === 'center'"
      [class.mx-auto]="align === 'center'"
      appReveal
    >
      @if (eyebrow) {
        <span class="eyebrow">
          <i class="fa-solid fa-sparkles text-[0.65rem]"></i>{{ eyebrow }}
        </span>
      }
      <h2
        class="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
      >
        {{ title }} <span class="gradient-text">{{ highlight }}</span>
      </h2>
      @if (subtitle) {
        <p class="mt-5 text-base leading-relaxed text-muted sm:text-lg">{{ subtitle }}</p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() highlight = '';
  @Input() subtitle = '';
  @Input() align: 'center' | 'left' = 'center';
}
