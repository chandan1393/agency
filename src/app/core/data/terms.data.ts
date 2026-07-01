import { LegalPageData } from '../models/site.models';
import { BRAND, SMS_PROGRAM } from './site.data';

export const TERMS_DATA: LegalPageData = {
  eyebrow: 'Legal',
  title: 'Terms & Conditions',
  subtitle: 'Please read these terms carefully before using our website and services.',
  updated: 'June 1, 2026',
  seoTitle: `Terms & Conditions | ${BRAND.name}`,
  seoDescription:
    'Review the Terms & Conditions governing the use of our website development and digital services.',
  path: '/terms-and-conditions',
  sections: [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      icon: 'fa-solid fa-file-signature',
      blocks: [
        {
          type: 'p',
          text: `These Terms & Conditions govern your use of the ${BRAND.name} website and the services we provide. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our website or services.`,
        },
      ],
    },
    {
      id: 'services',
      title: 'Services',
      icon: 'fa-solid fa-briefcase',
      blocks: [
        {
          type: 'p',
          text: 'We provide web design and development services, including website development, Angular and Spring Boot development, web application development, UI/UX design, SEO, maintenance, hosting support, and domain services.',
        },
        {
          type: 'p',
          text: 'The exact scope of each engagement is defined in the proposal or quotation agreed with the client. We reserve the right to refuse or discontinue services at our discretion.',
        },
      ],
    },
    {
      id: 'sms-messaging',
      title: 'SMS / Text Messaging',
      icon: 'fa-solid fa-comment-sms',
      blocks: [
        {
          type: 'p',
          text: `Our SMS program, "${SMS_PROGRAM.programName}", allows customers who opt in to receive ${SMS_PROGRAM.messageTypes} from ${BRAND.name} at the mobile number they provide. Enrolment is optional and is not a condition of purchasing any product or service.`,
        },
        {
          type: 'list',
          items: [
            'Opt-out: Reply STOP to any message to unsubscribe at any time.',
            `Help: Reply HELP for assistance, or contact us at ${BRAND.email}.`,
            'Message frequency varies.',
            'Message and data rates may apply.',
            'Supported carriers are not liable for delayed or undelivered messages.',
          ],
        },
        {
          type: 'p',
          text: 'By opting in, you confirm that you are the account holder or have authorisation to consent for the mobile number provided. For details on how we collect, use, and protect your mobile information and SMS consent, please see our',
          link: { label: 'Privacy Policy', route: '/privacy-policy' },
        },
      ],
    },
    {
      id: 'quotations',
      title: 'Quotations',
      icon: 'fa-solid fa-file-invoice-dollar',
      blocks: [
        {
          type: 'p',
          text: 'Quotations are based on the requirements provided at the time of enquiry and are valid for the period stated within them. If project requirements change, the quotation may be revised accordingly. A quotation does not constitute a binding contract until accepted in writing by both parties.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: 'fa-solid fa-credit-card',
      blocks: [
        {
          type: 'p',
          text: 'Payment terms are specified in each project agreement. Unless otherwise stated, an upfront deposit is required before work begins, with the remaining balance due at agreed milestones or upon completion.',
        },
        {
          type: 'list',
          items: [
            'Invoices are payable within the period stated on the invoice',
            'Late payments may incur additional charges or pause active work',
            'All fees are exclusive of applicable taxes unless stated otherwise',
          ],
        },
      ],
    },
    {
      id: 'project-timeline',
      title: 'Project Timeline',
      icon: 'fa-solid fa-calendar-days',
      blocks: [
        {
          type: 'p',
          text: 'Estimated timelines are provided in good faith and depend on timely client feedback, content delivery, and approvals. Delays caused by late responses or changes in scope may extend the agreed timeline. We will communicate any anticipated changes as early as possible.',
        },
      ],
    },
    {
      id: 'client-responsibilities',
      title: 'Client Responsibilities',
      icon: 'fa-solid fa-user-check',
      blocks: [
        { type: 'p', text: 'To help your project run smoothly, you agree to:' },
        {
          type: 'list',
          items: [
            'Provide accurate requirements, content, and assets in a timely manner',
            'Review deliverables and provide consolidated feedback promptly',
            'Ensure you hold the rights to any materials you supply to us',
            'Designate a point of contact authorised to approve work',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: 'fa-solid fa-copyright',
      blocks: [
        {
          type: 'p',
          text: 'All intellectual property we create during a project remains our property until full payment has been received. Upon final payment, ownership of the agreed deliverables transfers to the client, except for third-party assets and our pre-existing tools, frameworks, and components.',
        },
      ],
    },
    {
      id: 'source-code-ownership',
      title: 'Source Code Ownership',
      icon: 'fa-solid fa-code',
      blocks: [
        {
          type: 'p',
          text: 'Unless otherwise agreed in writing, the source code produced specifically for your project is delivered to you upon full payment. We may retain the right to reuse generic, non-confidential code, libraries, and techniques developed in the course of our work for other projects.',
        },
      ],
    },
    {
      id: 'third-party-licenses',
      title: 'Third-party Licenses',
      icon: 'fa-solid fa-puzzle-piece',
      blocks: [
        {
          type: 'p',
          text: 'Projects may incorporate third-party software, plugins, fonts, images, or services that are subject to their own licenses. The client is responsible for maintaining any required licenses and subscriptions after handover. We will inform you of any such dependencies where applicable.',
        },
      ],
    },
    {
      id: 'revisions',
      title: 'Revisions',
      icon: 'fa-solid fa-pen-to-square',
      blocks: [
        {
          type: 'p',
          text: 'Each project includes a defined number of revision rounds as stated in the agreement. Additional revisions, or changes that fall outside the original scope, may be subject to extra charges agreed in advance.',
        },
      ],
    },
    {
      id: 'cancellation-policy',
      title: 'Cancellation Policy',
      icon: 'fa-solid fa-ban',
      blocks: [
        {
          type: 'p',
          text: 'Either party may cancel a project by providing written notice. In the event of cancellation, the client is responsible for payment of all work completed up to the cancellation date, and any non-refundable deposits or third-party costs already incurred.',
        },
      ],
    },
    {
      id: 'refund-policy',
      title: 'Refund Policy',
      icon: 'fa-solid fa-rotate-left',
      blocks: [
        {
          type: 'p',
          text: 'Because our services are time- and labour-intensive, fees for completed work are generally non-refundable. Where a refund is considered, it will reflect only the portion of work not yet performed. Deposits that secure project scheduling are non-refundable.',
        },
      ],
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      icon: 'fa-solid fa-user-secret',
      blocks: [
        {
          type: 'p',
          text: 'Both parties agree to keep confidential any non-public information shared during the engagement and to use it only for the purpose of delivering the project. This obligation continues after the project ends. We are happy to sign a separate non-disclosure agreement on request.',
        },
      ],
    },
    {
      id: 'warranty-disclaimer',
      title: 'Warranty Disclaimer',
      icon: 'fa-solid fa-triangle-exclamation',
      blocks: [
        {
          type: 'p',
          text: 'Our services and deliverables are provided "as is" and "as available". While we strive for high quality and reliability, we do not warrant that our work will be uninterrupted, error-free, or fit for a particular purpose beyond what is expressly agreed. Post-launch support is provided according to the agreed maintenance terms.',
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of Liability',
      icon: 'fa-solid fa-shield-halved',
      blocks: [
        {
          type: 'p',
          text: 'To the maximum extent permitted by law, our total liability arising from any project shall not exceed the total fees paid for that project. We shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business opportunities.',
        },
      ],
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      icon: 'fa-solid fa-cloud-bolt',
      blocks: [
        {
          type: 'p',
          text: 'We are not liable for any delay or failure to perform our obligations caused by events beyond our reasonable control, including natural disasters, power or internet outages, strikes, government actions, or other unforeseeable circumstances.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: 'fa-solid fa-landmark',
      blocks: [
        {
          type: 'p',
          text: 'These Terms & Conditions are governed by and construed in accordance with the applicable laws of the jurisdiction in which our business is registered, without regard to its conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in that location.',
        },
      ],
    },
    {
      id: 'changes-to-terms',
      title: 'Changes to Terms',
      icon: 'fa-solid fa-rotate',
      blocks: [
        {
          type: 'p',
          text: 'We may update these Terms & Conditions at any time. Changes take effect once posted on this page, with the "Last updated" date revised accordingly. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.',
        },
      ],
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      icon: 'fa-solid fa-envelope',
      blocks: [
        {
          type: 'p',
          text: `If you have any questions about these Terms & Conditions, please contact us at ${BRAND.email} or call ${BRAND.phone}.`,
        },
      ],
    },
  ],
};
