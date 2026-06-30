import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LegalPageComponent } from '../../shared/legal-page/legal-page';
import { PRIVACY_DATA } from '../../core/data/privacy.data';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LegalPageComponent],
  template: `<app-legal-page [data]="data" />`,
})
export class PrivacyPolicyComponent {
  protected readonly data = PRIVACY_DATA;
}
