/**
 * Strongly-typed interfaces for all site content.
 * Kept in one place so every component shares the same shapes.
 */

export interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

export interface Stat {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
}

export interface TechCard {
  readonly name: string;
  readonly icon: string; // Font Awesome class
  readonly color: string; // hex accent
}

export interface ServiceItem {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly accent: string; // hex used for glow/gradient border
}

export interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface PortfolioItem {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly gradient: string; // tailwind gradient classes for the cover
  readonly icon: string;
}

export interface PricingPlan {
  readonly name: string;
  readonly price: number;
  readonly cadence: string;
  readonly tagline: string;
  readonly features: readonly string[];
  readonly popular: boolean;
  readonly cta: string;
}

export interface TechItem {
  readonly name: string;
  readonly icon: string;
  readonly color: string;
}

export interface Testimonial {
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly quote: string;
  readonly rating: number;
  readonly initials: string;
  readonly accent: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly string[];
}
