import {
  FaqItem,
  Feature,
  FooterColumn,
  NavLink,
  PortfolioItem,
  PricingPlan,
  ProcessStep,
  ServiceItem,
  Stat,
  TechCard,
  TechItem,
  Testimonial,
} from '../models/site.models';

/** Brand */
export const BRAND = {
  name: 'Nebula Studio',
  tagline: 'Websites that grow your business',
  email: 'hello@nebulastudio.example',
  phone: '+1 (555) 012-3344',
  whatsapp: '15550123344',
} as const;

/** Navigation */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'Services', fragment: 'services' },
  { label: 'Portfolio', fragment: 'portfolio' },
  { label: 'Process', fragment: 'process' },
  { label: 'Pricing', fragment: 'pricing' },
  { label: 'Testimonials', fragment: 'testimonials' },
  { label: 'FAQ', fragment: 'faq' },
  { label: 'Contact', fragment: 'contact' },
];

/** Hero counters */
export const STATS: readonly Stat[] = [
  { value: 100, suffix: '+', label: 'Projects delivered' },
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 99, suffix: '%', label: 'Client satisfaction' },
  { value: 24, suffix: '/7', label: 'Support coverage' },
];

/** Floating hero tech chips */
export const HERO_TECH: readonly TechCard[] = [
  { name: 'Angular', icon: 'fa-brands fa-angular', color: '#DD0031' },
  { name: 'Java', icon: 'fa-brands fa-java', color: '#f89820' },
  { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6DB33F' },
  { name: 'SEO', icon: 'fa-solid fa-magnifying-glass-chart', color: '#2563EB' },
  { name: 'AWS', icon: 'fa-brands fa-aws', color: '#FF9900' },
  { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
  { name: 'Responsive', icon: 'fa-solid fa-mobile-screen', color: '#06B6D4' },
];

/** Trusted companies (placeholder names) */
export const COMPANIES: readonly string[] = [
  'Quantnova',
  'Brightwave',
  'Helio',
  'Northpeak',
  'Lumina',
  'Vertex',
  'Skyforge',
  'Pulse',
  'Atlasworks',
  'Monarch',
];

/** Services */
export const SERVICES: readonly ServiceItem[] = [
  { title: 'Business Website', description: 'Polished marketing sites that turn visitors into qualified leads.', icon: 'fa-solid fa-briefcase', accent: '#2563EB' },
  { title: 'Corporate Website', description: 'Enterprise-grade presence with multi-page structure and CMS.', icon: 'fa-solid fa-building', accent: '#7C3AED' },
  { title: 'Landing Page', description: 'High-converting single pages built around one clear goal.', icon: 'fa-solid fa-rocket', accent: '#06B6D4' },
  { title: 'Portfolio Website', description: 'Showcase work with cinematic galleries and case studies.', icon: 'fa-solid fa-palette', accent: '#F59E0B' },
  { title: 'E-commerce', description: 'Fast storefronts with cart, checkout and payment-ready UX.', icon: 'fa-solid fa-cart-shopping', accent: '#10B981' },
  { title: 'School Website', description: 'Admissions, events and portals for modern institutions.', icon: 'fa-solid fa-graduation-cap', accent: '#2563EB' },
  { title: 'Hospital Website', description: 'Appointment-led healthcare sites with trust at the core.', icon: 'fa-solid fa-stethoscope', accent: '#EF4444' },
  { title: 'Real Estate', description: 'Listings, maps and lead capture for property businesses.', icon: 'fa-solid fa-house-chimney', accent: '#7C3AED' },
  { title: 'Restaurant', description: 'Mouth-watering menus, reservations and online ordering.', icon: 'fa-solid fa-utensils', accent: '#F59E0B' },
  { title: 'Hotel Website', description: 'Booking-ready experiences that fill more rooms.', icon: 'fa-solid fa-hotel', accent: '#06B6D4' },
  { title: 'Doctor Website', description: 'Personal practice sites with scheduling and credibility.', icon: 'fa-solid fa-user-doctor', accent: '#10B981' },
  { title: 'Lawyer Website', description: 'Authoritative legal sites that win consultations.', icon: 'fa-solid fa-scale-balanced', accent: '#2563EB' },
  { title: 'Travel Website', description: 'Inspiring trip planners with packages and inquiries.', icon: 'fa-solid fa-plane', accent: '#06B6D4' },
  { title: 'NGO Website', description: 'Story-driven sites that grow donations and volunteers.', icon: 'fa-solid fa-hand-holding-heart', accent: '#EF4444' },
  { title: 'CRM', description: 'Custom client pipelines tailored to your sales motion.', icon: 'fa-solid fa-users-gear', accent: '#7C3AED' },
  { title: 'ERP', description: 'Operations, inventory and finance unified in one place.', icon: 'fa-solid fa-diagram-project', accent: '#2563EB' },
  { title: 'Admin Dashboard', description: 'Data-rich panels with charts, tables and role access.', icon: 'fa-solid fa-gauge-high', accent: '#10B981' },
  { title: 'SEO', description: 'Technical and on-page SEO that climbs the rankings.', icon: 'fa-solid fa-magnifying-glass-chart', accent: '#F59E0B' },
  { title: 'Maintenance', description: 'Updates, monitoring and care plans that keep you live.', icon: 'fa-solid fa-screwdriver-wrench', accent: '#06B6D4' },
  { title: 'Hosting', description: 'Domain, SSL and cloud hosting set up end to end.', icon: 'fa-solid fa-server', accent: '#7C3AED' },
];

/** Why choose us */
export const FEATURES: readonly Feature[] = [
  { title: 'Fast Delivery', description: 'Tight, milestone-driven timelines without cutting corners.', icon: 'fa-solid fa-bolt' },
  { title: 'Modern UI', description: 'Design systems inspired by the best products on the web.', icon: 'fa-solid fa-wand-magic-sparkles' },
  { title: 'SEO Optimized', description: 'Built to be discovered, indexed and ranked from day one.', icon: 'fa-solid fa-chart-line' },
  { title: 'Secure', description: 'Hardened, best-practice code and dependency hygiene.', icon: 'fa-solid fa-shield-halved' },
  { title: 'Mobile Responsive', description: 'Pixel-perfect across every screen size and device.', icon: 'fa-solid fa-mobile-screen-button' },
  { title: 'Affordable', description: 'Premium quality at pricing that respects your budget.', icon: 'fa-solid fa-tags' },
  { title: 'Scalable', description: 'Architecture that grows smoothly with your traffic.', icon: 'fa-solid fa-arrow-up-right-dots' },
  { title: 'Clean Code', description: 'Maintainable, well-documented, typed and tested.', icon: 'fa-solid fa-code' },
];

/** Process */
export const PROCESS: readonly ProcessStep[] = [
  { step: '01', title: 'Requirement', description: 'We listen, audit and define exactly what success looks like.', icon: 'fa-solid fa-clipboard-list' },
  { step: '02', title: 'Planning', description: 'Scope, sitemap, timeline and tech choices mapped together.', icon: 'fa-solid fa-map' },
  { step: '03', title: 'UI Design', description: 'High-fidelity, on-brand designs you approve before we build.', icon: 'fa-solid fa-pen-ruler' },
  { step: '04', title: 'Development', description: 'Clean, component-driven engineering with weekly demos.', icon: 'fa-solid fa-laptop-code' },
  { step: '05', title: 'Testing', description: 'Cross-device QA, performance and accessibility checks.', icon: 'fa-solid fa-vial-circle-check' },
  { step: '06', title: 'Deployment', description: 'Smooth launch with domain, hosting and SSL configured.', icon: 'fa-solid fa-cloud-arrow-up' },
  { step: '07', title: 'Support', description: 'Ongoing care, monitoring and improvements after launch.', icon: 'fa-solid fa-headset' },
];

/** Portfolio */
export const PORTFOLIO: readonly PortfolioItem[] = [
  { title: 'Vertex Corporate', category: 'Business', description: 'Brand-led corporate site with CMS.', gradient: 'from-blue-500 to-indigo-600', icon: 'fa-solid fa-building' },
  { title: 'Saffron Table', category: 'Restaurant', description: 'Menu, reservations & ordering.', gradient: 'from-amber-500 to-rose-500', icon: 'fa-solid fa-utensils' },
  { title: 'Brightmind Academy', category: 'School', description: 'Admissions & student portal.', gradient: 'from-cyan-500 to-blue-600', icon: 'fa-solid fa-graduation-cap' },
  { title: 'Carewell Hospital', category: 'Hospital', description: 'Appointments & departments.', gradient: 'from-emerald-500 to-teal-600', icon: 'fa-solid fa-stethoscope' },
  { title: 'Irongate Build', category: 'Construction', description: 'Projects & quote requests.', gradient: 'from-orange-500 to-amber-600', icon: 'fa-solid fa-helmet-safety' },
  { title: 'Aria Folio', category: 'Portfolio', description: 'Cinematic creative showcase.', gradient: 'from-fuchsia-500 to-purple-600', icon: 'fa-solid fa-palette' },
  { title: 'Azure Bay Hotel', category: 'Hotel', description: 'Rooms, booking & gallery.', gradient: 'from-sky-500 to-cyan-600', icon: 'fa-solid fa-hotel' },
  { title: 'PulseFit Gym', category: 'Gym', description: 'Classes, trainers & plans.', gradient: 'from-lime-500 to-emerald-600', icon: 'fa-solid fa-dumbbell' },
  { title: 'Northpeak Realty', category: 'Real Estate', description: 'Listings, maps & leads.', gradient: 'from-violet-500 to-indigo-600', icon: 'fa-solid fa-house-chimney' },
  { title: 'Sterling & Co.', category: 'Law Firm', description: 'Practice areas & consults.', gradient: 'from-slate-600 to-blue-700', icon: 'fa-solid fa-scale-balanced' },
  { title: 'Open Hands NGO', category: 'NGO', description: 'Stories, causes & donations.', gradient: 'from-rose-500 to-red-600', icon: 'fa-solid fa-hand-holding-heart' },
  { title: 'Lumina Store', category: 'Business', description: 'Conversion-first storefront.', gradient: 'from-indigo-500 to-blue-600', icon: 'fa-solid fa-cart-shopping' },
];

export const PORTFOLIO_FILTERS: readonly string[] = [
  'All', 'Business', 'Restaurant', 'School', 'Hospital', 'Construction',
  'Portfolio', 'Hotel', 'Gym', 'Real Estate', 'Law Firm', 'NGO',
];

/** Pricing */
export const PRICING: readonly PricingPlan[] = [
  {
    name: 'Starter',
    price: 499,
    cadence: 'one-time',
    tagline: 'Perfect for a sharp, single-page launch.',
    popular: false,
    cta: 'Start with Starter',
    features: [
      'Up to 5 sections',
      'Responsive design',
      'Basic on-page SEO',
      'Contact form',
      '1 round of revisions',
      '7-day delivery',
    ],
  },
  {
    name: 'Professional',
    price: 1299,
    cadence: 'one-time',
    tagline: 'Our most popular package for growing brands.',
    popular: true,
    cta: 'Choose Professional',
    features: [
      'Up to 12 pages',
      'Custom UI design system',
      'Advanced SEO setup',
      'CMS integration',
      'Speed optimization',
      '3 rounds of revisions',
      '30 days support',
    ],
  },
  {
    name: 'Enterprise',
    price: 3499,
    cadence: 'starting at',
    tagline: 'Full-scale web apps and platforms.',
    popular: false,
    cta: 'Talk to us',
    features: [
      'Custom web application',
      'Angular + Spring Boot',
      'Dashboards & integrations',
      'Dedicated project manager',
      'Performance & security audit',
      'Unlimited revisions',
      '90 days priority support',
    ],
  },
];

/** Tech stack */
export const TECH_STACK: readonly TechItem[] = [
  { name: 'Angular', icon: 'fa-brands fa-angular', color: '#DD0031' },
  { name: 'Java', icon: 'fa-brands fa-java', color: '#f89820' },
  { name: 'Spring Boot', icon: 'fa-solid fa-leaf', color: '#6DB33F' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database', color: '#336791' },
  { name: 'MySQL', icon: 'fa-solid fa-database', color: '#00758F' },
  { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ED' },
  { name: 'AWS', icon: 'fa-brands fa-aws', color: '#FF9900' },
  { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
  { name: 'GitHub', icon: 'fa-brands fa-github', color: '#6e5494' },
  { name: 'Redis', icon: 'fa-solid fa-bolt', color: '#DC382D' },
  { name: 'RabbitMQ', icon: 'fa-solid fa-envelopes-bulk', color: '#FF6600' },
  { name: 'REST API', icon: 'fa-solid fa-plug', color: '#2563EB' },
  { name: 'Microservices', icon: 'fa-solid fa-cubes', color: '#7C3AED' },
  { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572B6' },
  { name: 'SCSS', icon: 'fa-brands fa-sass', color: '#CC6699' },
  { name: 'Tailwind', icon: 'fa-solid fa-wind', color: '#06B6D4' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952B3' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178C6' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
];

/** Testimonials */
export const TESTIMONIALS: readonly Testimonial[] = [
  { name: 'Amelia Hart', role: 'Founder', company: 'Brightwave', rating: 5, initials: 'AH', accent: '#2563EB', quote: 'Nebula rebuilt our site and conversions jumped 60% in two months. The team genuinely cared about our growth.' },
  { name: 'David Chen', role: 'CTO', company: 'Helio', rating: 5, initials: 'DC', accent: '#7C3AED', quote: 'Their Angular and Spring Boot work is rock solid. Clean architecture, on time, and a joy to collaborate with.' },
  { name: 'Priya Nair', role: 'Marketing Lead', company: 'Northpeak', rating: 5, initials: 'PN', accent: '#06B6D4', quote: 'The landing page they designed is gorgeous and blazing fast. Our paid campaigns finally have a page that converts.' },
  { name: 'Marcus Bell', role: 'Owner', company: 'Saffron Table', rating: 5, initials: 'MB', accent: '#F59E0B', quote: 'Online orders doubled after launch. They understood our brand and the result feels truly premium.' },
  { name: 'Sofia Romano', role: 'Director', company: 'Lumina', rating: 5, initials: 'SR', accent: '#10B981', quote: 'From SEO to speed optimization, every detail was handled. We rank on page one for our key terms now.' },
  { name: 'James Okoro', role: 'CEO', company: 'Vertex', rating: 5, initials: 'JO', accent: '#EF4444', quote: 'A reliable partner, not just a vendor. Communication was clear and the craftsmanship is exceptional.' },
];

/** FAQ */
export const FAQS: readonly FaqItem[] = [
  { question: 'How long does a typical project take?', answer: 'A landing page usually takes 5–7 days, a multi-page business site 2–3 weeks, and full web apps 4–8 weeks depending on scope. You get a clear timeline before we start.' },
  { question: 'Do you work with my brand and content?', answer: 'Absolutely. We design around your brand, and we can also help shape copy, structure and imagery if you need a hand.' },
  { question: 'Will my website be SEO friendly?', answer: 'Yes. Every build ships with technical SEO, semantic markup, fast load times, sitemaps and meta tags so search engines can find and rank you.' },
  { question: 'Is the website mobile responsive?', answer: 'Always. We build mobile-first and test across phones, tablets, laptops and desktops so it looks great everywhere.' },
  { question: 'What technologies do you use?', answer: 'Frontends in Angular with Tailwind, backends in Java Spring Boot, plus Docker, AWS and modern databases when a full application is required.' },
  { question: 'Do you offer ongoing maintenance?', answer: 'Yes, we offer care plans covering updates, monitoring, backups, security and small content changes so you can stay focused on your business.' },
  { question: 'Can you redesign my existing website?', answer: 'Definitely. We can refresh the look, rebuild on a modern stack, improve speed and keep your SEO equity intact.' },
  { question: 'How much does a website cost?', answer: 'It depends on scope. Our packages start at $499 for a starter site. Share your goals and we will send a tailored quote.' },
  { question: 'Do you set up hosting and domains?', answer: 'Yes. We handle domain registration, SSL and cloud hosting end to end so your site goes live without the hassle.' },
  { question: 'How do we get started?', answer: 'Send us a message or book a call. We will discuss your goals, propose a plan, and get moving once you approve it.' },
];

/** Footer */
export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  { title: 'Quick Links', links: ['Home', 'Services', 'Portfolio', 'Process', 'Pricing', 'Contact'] },
  { title: 'Services', links: ['Business Website', 'E-commerce', 'Landing Pages', 'SEO', 'Maintenance', 'Hosting'] },
  { title: 'Technologies', links: ['Angular', 'Spring Boot', 'Docker', 'AWS', 'PostgreSQL', 'Tailwind'] },
];

export const SOCIALS: readonly { icon: string; label: string }[] = [
  { icon: 'fa-brands fa-x-twitter', label: 'Twitter' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { icon: 'fa-brands fa-dribbble', label: 'Dribbble' },
];

export const SERVICE_OPTIONS: readonly string[] = [
  'Business Website', 'E-commerce', 'Landing Page', 'Custom Web App',
  'SEO Services', 'Website Redesign', 'Maintenance', 'Other',
];

export const BUDGET_OPTIONS: readonly string[] = [
  'Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000+',
];
