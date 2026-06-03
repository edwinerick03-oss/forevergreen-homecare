/**
 * SEO Helper Functions
 * Manages meta tags, Open Graph, and structured data for all pages
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "organization";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Update document meta tags
 */
export function updateMetaTags(config: SEOConfig) {
  // Title
  document.title = `${config.title} | ForeverGreen Staffing Solutions`;

  // Meta Description
  updateMetaTag("description", config.description);

  // Keywords
  if (config.keywords?.length) {
    updateMetaTag("keywords", config.keywords.join(", "));
  }

  // Open Graph Tags
  updateMetaTag("og:title", config.title, "property");
  updateMetaTag("og:description", config.description, "property");
  updateMetaTag("og:type", config.type || "website", "property");
  if (config.image) {
    updateMetaTag("og:image", config.image, "property");
  }
  if (config.url) {
    updateMetaTag("og:url", config.url, "property");
  }

  // Twitter Card Tags
  updateMetaTag("twitter:title", config.title);
  updateMetaTag("twitter:description", config.description);
  updateMetaTag("twitter:card", "summary_large_image");
  if (config.image) {
    updateMetaTag("twitter:image", config.image);
  }

  // Article Tags (if applicable)
  if (config.type === "article") {
    if (config.publishedDate) {
      updateMetaTag("article:published_time", config.publishedDate, "property");
    }
    if (config.modifiedDate) {
      updateMetaTag("article:modified_time", config.modifiedDate, "property");
    }
    if (config.author) {
      updateMetaTag("article:author", config.author, "property");
    }
  }
}

/**
 * Helper to update or create meta tag
 */
function updateMetaTag(
  name: string,
  content: string,
  attribute: "name" | "property" = "name"
) {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.content = content;
}

/**
 * Add structured data (JSON-LD)
 */
export function addStructuredData(schema: Record<string, any>) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Organization Schema
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ForeverGreen Staffing Solutions",
  url: "https://forevergreenstaffing.com",
  logo: "https://forevergreenstaffing.com/logo.png",
  description:
    "Connecting families with caregivers they can trust. Paying caregivers fairly. Putting money back into communities that need it.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lakewood",
    addressLocality: "Lakewood",
    addressRegion: "WA",
    postalCode: "98499",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-253-341-6755",
    contactType: "Customer Support",
  },
  sameAs: [
    "https://www.facebook.com/forevergreenstaffing",
    "https://www.linkedin.com/company/forevergreen-staffing",
  ],
};

/**
 * Local Business Schema
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ForeverGreen Staffing Solutions",
  image: "https://forevergreenstaffing.com/hero.png",
  description:
    "Home Care Agency providing CNA and HHA staffing in Washington",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lakewood",
    addressLocality: "Lakewood",
    addressRegion: "WA",
    postalCode: "98499",
    addressCountry: "US",
  },
  telephone: "+1-253-341-6755",
  url: "https://forevergreenstaffing.com",
  priceRange: "$$",
  areaServed: "WA",
  serviceType: ["Home Care", "CNA Staffing", "HHA Staffing"],
};

/**
 * Service Schema
 */
export function serviceSchema(
  name: string,
  description: string,
  price?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "ForeverGreen Staffing Solutions",
      url: "https://forevergreenstaffing.com",
    },
    ...(price && { priceRange: price }),
    areaServed: "WA",
    serviceType: "Home Care",
  };
}

/**
 * Job Posting Schema
 */
export function jobPostingSchema(
  title: string,
  description: string,
  location: string,
  salary?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    hiringOrganization: {
      "@type": "Organization",
      name: "ForeverGreen Staffing Solutions",
      url: "https://forevergreenstaffing.com",
      logo: "https://forevergreenstaffing.com/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: location,
        addressRegion: "WA",
        addressCountry: "US",
      },
    },
    baseSalary: salary
      ? {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: salary,
        }
      : undefined,
    validThrough: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  };
}

/**
 * Breadcrumb Schema
 */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQ Schema
 */
export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Page-specific SEO configurations
 */
export const pageConfigs: Record<string, SEOConfig> = {
  home: {
    title: "ForeverGreen Staffing Solutions",
    description:
      "Connecting families with caregivers they can trust. CNA and HHA staffing in Washington. Fair wages, real impact.",
    keywords: [
      "home care agency",
      "CNA staffing",
      "HHA staffing",
      "caregivers",
      "Washington",
      "Lakewood",
    ],
    type: "website",
  },
  about: {
    title: "About ForeverGreen",
    description:
      "Meet Sequoia and learn how ForeverGreen is transforming home care staffing with fair wages and community impact.",
    keywords: [
      "about us",
      "founder",
      "mission",
      "values",
      "home care",
      "staffing",
    ],
    type: "website",
  },
  services: {
    title: "Our Services",
    description:
      "Professional home care services including CNA, HHA, and care coordination. Quality screening, training, and support.",
    keywords: [
      "home care services",
      "CNA services",
      "HHA services",
      "care coordination",
      "Washington",
    ],
    type: "website",
  },
  "for-families": {
    title: "For Families",
    description:
      "Find reliable caregivers you can trust. We match families with screened, trained caregivers for peace of mind.",
    keywords: [
      "find caregivers",
      "home care for families",
      "senior care",
      "elder care",
      "Washington",
    ],
    type: "website",
  },
  "for-caregivers": {
    title: "For Caregivers",
    description:
      "Join ForeverGreen and get paid fairly for meaningful work. Steady hours, professional support, and community impact.",
    keywords: [
      "caregiver jobs",
      "CNA jobs",
      "HHA jobs",
      "home care jobs",
      "Washington",
    ],
    type: "website",
  },
  "community-impact": {
    title: "Community Impact",
    description:
      "ForeverGreen creates impact locally in Washington and globally in Ghana. Supporting families, caregivers, and communities.",
    keywords: [
      "community impact",
      "social impact",
      "nonprofit",
      "Ghana",
      "women empowerment",
    ],
    type: "website",
  },
  careers: {
    title: "Careers",
    description:
      "Join the ForeverGreen team. We're hiring CNAs, HHAs, Care Coordinators, and Operations staff.",
    keywords: ["careers", "jobs", "hiring", "CNA", "HHA", "Washington"],
    type: "website",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with ForeverGreen. Call (253) 341-6755 or fill out our contact form.",
    keywords: ["contact", "phone", "email", "support", "inquiries"],
    type: "website",
  },
  blog: {
    title: "Blog & Resources",
    description:
      "Articles and resources about home care, caregiving, and community impact.",
    keywords: ["blog", "articles", "resources", "home care", "caregiving"],
    type: "website",
  },
};
