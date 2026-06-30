import { LegalPageData } from '../models/site.models';
import { BRAND } from './site.data';

export const PRIVACY_DATA: LegalPageData = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  subtitle:
    'Your privacy is important to us. Learn how we collect, use, and protect your information.',
  updated: 'June 1, 2026',
  seoTitle: `Privacy Policy | ${BRAND.name}`,
  seoDescription:
    'Read our Privacy Policy to understand how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: 'fa-solid fa-circle-info',
      blocks: [
        {
          type: 'p',
          text: `${BRAND.name} ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, why we collect it, and how we handle it when you visit our website or engage our services.`,
        },
        {
          type: 'p',
          text: 'By using our website or services, you consent to the practices described in this policy. If you do not agree with any part of it, please discontinue use of our website and services.',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: 'fa-solid fa-database',
      blocks: [
        {
          type: 'p',
          text: 'We collect information that helps us provide, improve, and support our services. The information we gather falls into two broad categories: information you provide directly and information collected automatically as you interact with our website.',
        },
        {
          type: 'list',
          items: [
            'Details you submit through forms, quotes, or project inquiries',
            'Information shared during consultations and project communication',
            'Technical data such as browser type, device, and IP address',
            'Usage data describing how you navigate and interact with our pages',
          ],
        },
      ],
    },
    {
      id: 'personal-information',
      title: 'Personal Information',
      icon: 'fa-solid fa-id-card',
      blocks: [
        {
          type: 'p',
          text: 'Personal information is any data that can identify you as an individual. We only request the personal details necessary to respond to your enquiries and deliver our services.',
        },
        {
          type: 'list',
          items: [
            'Full name and job title',
            'Email address and phone number',
            'Company or organisation name',
            'Project requirements and budget preferences you choose to share',
          ],
        },
      ],
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      icon: 'fa-solid fa-address-book',
      blocks: [
        {
          type: 'p',
          text: 'When you reach out through our contact form, email, phone, or messaging channels, we collect the contact details you provide so we can reply, prepare quotations, and manage our working relationship with you.',
        },
        {
          type: 'p',
          text: 'We use this information solely to communicate with you about your request and never sell it to third parties.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: 'fa-solid fa-cookie-bite',
      blocks: [
        {
          type: 'p',
          text: 'Our website may use cookies and similar technologies to remember your preferences, keep the site secure, and understand how visitors use our pages. Cookies are small text files stored on your device.',
        },
        {
          type: 'p',
          text: 'You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of some parts of the website.',
        },
      ],
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: 'fa-solid fa-chart-line',
      blocks: [
        {
          type: 'p',
          text: 'We may use analytics tools to measure traffic and understand visitor behaviour in aggregate. These tools help us improve our content, performance, and user experience. Analytics data is generally pseudonymised and is not used to personally identify you.',
        },
      ],
    },
    {
      id: 'third-party-services',
      title: 'Third-party Services',
      icon: 'fa-solid fa-handshake',
      blocks: [
        {
          type: 'p',
          text: 'To operate effectively, we may rely on trusted third-party providers for hosting, analytics, email delivery, and payment processing. These providers only receive the information necessary to perform their function and are required to protect your data.',
        },
        {
          type: 'p',
          text: 'We are not responsible for the independent privacy practices of these providers and encourage you to review their respective policies.',
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Information',
      icon: 'fa-solid fa-gears',
      blocks: [
        { type: 'p', text: 'We use the information we collect for legitimate business purposes, including:' },
        {
          type: 'list',
          items: [
            'Responding to enquiries and preparing project quotations',
            'Delivering, maintaining, and supporting our services',
            'Improving our website, offerings, and customer experience',
            'Sending service updates and, where permitted, relevant communications',
            'Meeting legal, accounting, and security obligations',
          ],
        },
      ],
    },
    {
      id: 'marketing-communications',
      title: 'Marketing Communications',
      icon: 'fa-solid fa-bullhorn',
      blocks: [
        {
          type: 'p',
          text: 'With your consent, we may occasionally send you updates about our services, offers, or insights we think you will find useful. You can opt out of marketing communications at any time using the unsubscribe link in our emails or by contacting us directly.',
        },
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: 'fa-solid fa-lock',
      blocks: [
        {
          type: 'p',
          text: 'We apply appropriate technical and organisational measures to protect your information against unauthorised access, alteration, disclosure, or destruction. While we work hard to safeguard your data, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: 'fa-solid fa-clock-rotate-left',
      blocks: [
        {
          type: 'p',
          text: 'We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, including any legal, accounting, or reporting requirements. When data is no longer needed, we securely delete or anonymise it.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: 'fa-solid fa-user-shield',
      blocks: [
        { type: 'p', text: 'Depending on your location, you may have the following rights regarding your personal data:' },
        {
          type: 'list',
          items: [
            'Access the personal information we hold about you',
            'Request correction of inaccurate or incomplete data',
            'Request deletion of your personal information',
            'Object to or restrict certain processing activities',
            'Withdraw consent where processing is based on consent',
            'Request a portable copy of your data',
          ],
        },
        { type: 'p', text: 'To exercise any of these rights, please contact us using the details below.' },
      ],
    },
    {
      id: 'gdpr',
      title: 'GDPR Compliance',
      icon: 'fa-solid fa-scale-balanced',
      blocks: [
        {
          type: 'p',
          text: 'If you are located in the European Economic Area (EEA) or the United Kingdom, we process your personal data in accordance with the General Data Protection Regulation (GDPR). We process data lawfully on the basis of your consent, the performance of a contract, our legitimate interests, or to comply with legal obligations.',
        },
        {
          type: 'p',
          text: 'You also have the right to lodge a complaint with your local data protection authority if you believe your rights have been infringed.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      icon: 'fa-solid fa-child',
      blocks: [
        {
          type: 'p',
          text: 'Our website and services are intended for businesses and individuals over the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it promptly.',
        },
      ],
    },
    {
      id: 'external-links',
      title: 'External Links',
      icon: 'fa-solid fa-up-right-from-square',
      blocks: [
        {
          type: 'p',
          text: 'Our website may contain links to external websites that are not operated by us. We have no control over, and assume no responsibility for, the content or privacy practices of any third-party sites. We encourage you to review the privacy policies of every website you visit.',
        },
      ],
    },
    {
      id: 'updates-to-this-policy',
      title: 'Updates to this Policy',
      icon: 'fa-solid fa-rotate',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.',
        },
      ],
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      icon: 'fa-solid fa-envelope',
      blocks: [
        {
          type: 'p',
          text: `If you have any questions about this Privacy Policy or how we handle your information, please contact us at ${BRAND.email} or call ${BRAND.phone}. We will be happy to help.`,
        },
      ],
    },
  ],
};
