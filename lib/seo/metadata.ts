/**
 * SEO Metadata Utility
 * Centralized utility for generating consistent SEO metadata across all pages
 */

import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  noindex?: boolean;
}

const siteConfig = {
  name: 'Liberty Bell Property Management',
  description: 'A property management company working for leaseholders. We put leaseholders\' needs before profits, offering transparent and fair block management services.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.libertybellpm.co.uk',
  ogImage: '/og-image.png',
  twitterHandle: '@libertybellpm',
};

/**
 * Generate comprehensive SEO metadata for a page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = siteConfig.ogImage,
    ogType = 'website',
    canonicalUrl,
    noindex = false,
  } = config;

  // Create full title
  const fullTitle = title.includes('Liberty Bell') 
    ? title 
    : `${title} | Liberty Bell Property Management`;

  // Create absolute URL for canonical and OG
  const absoluteUrl = canonicalUrl 
    ? `${siteConfig.url}${canonicalUrl}`
    : siteConfig.url;

  // Create absolute image URL
  const absoluteImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${siteConfig.url}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: 'Liberty Bell Property Management' }],
    
    // Robots
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },

    // Canonical URL
    alternates: {
      canonical: absoluteUrl,
    },

    // Open Graph
    openGraph: {
      type: ogType,
      locale: 'en_GB',
      url: absoluteUrl,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: fullTitle,
      description,
      images: [absoluteImageUrl],
    },

    // Additional meta tags
    other: {
      'application-name': siteConfig.name,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': siteConfig.name,
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
    },
  };
}

/**
 * Common metadata configurations for different page types
 */
export const seoConfig = {
  home: {
    title: 'Liberty Bell Property Management - Putting Leaseholders First',
    description: 'A property management company working for leaseholders. Transparent service charges, fair block management, and real value for money. We manage properties where leaseholders are in control.',
    keywords: [
      'property management',
      'block management',
      'leaseholder services',
      'service charge',
      'building management',
      'resident management company',
      'RMC',
      'RTM company',
      'right to manage',
      'leaseholder rights',
      'transparent management',
    ],
  },

  about: {
    title: 'About Us - Leaseholders Helping Leaseholders',
    description: 'We\'re leaseholders who\'ve been through the system. After seven years of frustration with managing agents, we built Liberty Bell to put leaseholders in control.',
    keywords: [
      'about liberty bell',
      'property management company',
      'leaseholder support',
      'ethical property management',
      'leaseholder owned',
    ],
  },

  services: {
    title: 'Property Management Services - Complete Building Management',
    description: 'Comprehensive property management services including service charge budgeting, building management, insurance, onsite staff management, community management, and RMC/RTM secretariat services.',
    keywords: [
      'property management services',
      'service charge budgeting',
      'building management',
      'building insurance',
      'onsite staff management',
      'community management',
      'RMC secretariat',
      'RTM company management',
      'block management services',
    ],
  },

  contact: {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Liberty Bell Property Management for a free consultation. We\'re here to help leaseholders take control of their buildings with transparent, fair management.',
    keywords: [
      'contact liberty bell',
      'property management enquiry',
      'block management consultation',
      'leaseholder support',
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    description: 'How Liberty Bell Property Management collects, uses, and protects your personal information. GDPR compliant.',
    keywords: ['privacy policy', 'data protection', 'GDPR'],
    noindex: true,
  },

  terms: {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using Liberty Bell Property Management services and website.',
    keywords: ['terms and conditions', 'terms of service'],
    noindex: true,
  },
};
