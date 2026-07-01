import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { LottiePlayerComponent } from '../../shared/lottie-player/lottie-player';
import {
  BRAND,
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  SMS_CONSENT_TEXT,
} from '../../core/data/site.data';
import { CONTACT_ENDPOINT, CONTACT_HEADERS } from '../../core/config/site.config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, RevealDirective, LottiePlayerComponent],
  templateUrl: './contact.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly brand = BRAND;
  protected readonly services = SERVICE_OPTIONS;
  protected readonly budgets = BUDGET_OPTIONS;
  protected readonly smsConsentText = SMS_CONSENT_TEXT;
  protected readonly submitted = signal(false);
  protected readonly status = signal<Status>('idle');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+0-9()\s-]{7,}$/)]],
    company: [''],
    service: ['', Validators.required],
    budget: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
    // Optional SMS opt-in — NO validator, so the form submits whether or not
    // it is checked (A2P requirement). Unchecked by default.
    smsConsent: [false],
    // Mandatory agreement to the Privacy Policy and Terms & Conditions.
    legalConsent: [false, Validators.requiredTrue],
  });

  /** Convenience getter for template error checks. */
  invalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.touched || this.submitted());
  }

  get whatsappLink(): string {
    return `https://wa.me/${this.brand.whatsapp}?text=Hi%20${encodeURIComponent(this.brand.name)},%20I'd%20like%20a%20quote`;
  }

  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Capture consent metadata for the opt-in record (A2P 10DLC).
    const value = this.form.getRawValue();
    const payload = {
      ...value,
      smsConsentText: value.smsConsent ? SMS_CONSENT_TEXT : null,
      consentTimestamp: new Date().toISOString(),
    };

    // No endpoint configured -> keep the frontend-only success behaviour.
    if (!CONTACT_ENDPOINT) {
      this.status.set('success');
      this.resetForm();
      return;
    }

    this.status.set('submitting');
    this.http
      .post(CONTACT_ENDPOINT, payload, { headers: CONTACT_HEADERS })
      .pipe(
        catchError(() => {
          this.status.set('error');
          return of(null);
        }),
        finalize(() => {
          if (this.status() === 'submitting') {
            this.status.set('success');
            this.resetForm();
          }
        }),
      )
      .subscribe();
  }

  private resetForm(): void {
    this.form.reset();
    this.submitted.set(false);
  }

  retry(): void {
    this.status.set('idle');
  }

  reset(): void {
    this.status.set('idle');
  }
}
