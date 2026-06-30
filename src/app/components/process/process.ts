import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROCESS } from '../../core/data/site.data';

@Component({
  selector: 'app-process',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, RevealDirective, NgClass],
  templateUrl: './process.html',
})
export class ProcessComponent {
  protected readonly steps = PROCESS;
}
