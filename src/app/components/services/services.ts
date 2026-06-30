import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';
import { SERVICES } from '../../core/data/site.data';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, TiltDirective],
  templateUrl: './services.html',
})
export class ServicesComponent {
  protected readonly services = SERVICES;
}
