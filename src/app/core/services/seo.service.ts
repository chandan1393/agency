import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const SITE_ORIGIN = 'https://nebulastudio.example';
const OG_IMAGE = `${SITE_ORIGIN}/og-cover.png`;

export interface SeoConfig {
  title: string;
  description: string;
  /** Path beginning with '/', used for canonical + og:url. */
  path: string;
  type?: string;
}

/**
 * Centralizes page metadata. SSR-safe: Title/Meta and DOCUMENT all operate on
 * the injected document, so tags are serialized into the prerendered HTML.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(config: SeoConfig): void {
    const url = `${SITE_ORIGIN}${config.path}`;

    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: config.type ?? 'website' });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    const head = this.doc.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Inject (or replace) a single JSON-LD structured-data block. */
  setJsonLd(data: Record<string, unknown>): void {
    const id = 'page-jsonld';
    const head = this.doc.head;
    let script = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.setAttribute('type', 'application/ld+json');
      head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  webPageSchema(name: string, description: string, path: string): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name,
      description,
      url: `${SITE_ORIGIN}${path}`,
      isPartOf: { '@type': 'WebSite', name: 'Nebula Studio', url: SITE_ORIGIN },
    };
  }
}
