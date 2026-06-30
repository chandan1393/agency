import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalPageComponent } from '../../shared/legal-page/legal-page';
import { TERMS_DATA } from '../../core/data/terms.data';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LegalPageComponent],
  template: `<app-legal-page [data]="data" />`,
})
export class TermsAndConditionsComponent {
  protected readonly data = TERMS_DATA;
}
