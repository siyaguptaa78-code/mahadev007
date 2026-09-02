import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/siteConfig";

export const metadata: Metadata = generatePageMetadata(
  "Mahadev Book ID Guide | Official Online Information",
  "Explore Mahadev Book information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
  "/mahadev-book-id"
);

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mahadevsportsbookie.com/#website",
      "url": "https://mahadevsportsbookie.com/",
      "name": "Mahadev Book",
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "@id": "https://mahadevsportsbookie.com/#organization",
      "name": "Mahadev Book",
      "url": "https://mahadevsportsbookie.com/"
    },
    {
      "@type": "WebPage",
      "@id": "https://mahadevsportsbookie.com/#webpage",
      "url": "https://mahadevsportsbookie.com/",
      "name": "Mahadev Book ID Guide | Official Online Information",
      "description": "Explore Mahadev Book information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
      "isPartOf": {
        "@id": "https://mahadevsportsbookie.com/#website"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://mahadevsportsbookie.com/#faq",
      "url": "https://mahadevsportsbookie.com/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Mahadev Book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mahadev Book is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
          }
        },
        {
          "@type": "Question",
          "name": "How does a Mahadev Book ID work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An account ID is generally used to identify a user account. Refer to Mahadev Book's current account instructions and terms for the exact process."
          }
        },
        {
          "@type": "Question",
          "name": "How can I access Mahadev Book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
          }
        },
        {
          "@type": "Question",
          "name": "What sports are available on Mahadev Book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
          }
        },
        {
          "@type": "Question",
          "name": "Does Mahadev Book provide live sports information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get help with my Mahadev Book account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
          }
        },
        {
          "@type": "Question",
          "name": "How do I find Mahadev Book login information?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
          }
        },
        {
          "@type": "Question",
          "name": "What payment options are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I have trouble accessing my account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find the latest Mahadev Book updates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Refer to Mahadev Book's current website information and terms for the most accurate answer."
          }
        }
      ]
    }
  ]
};

export default function BookIDLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
