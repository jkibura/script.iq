import type { IconType } from 'react-icons'
//Header
export interface BrandHeader {
    name?: string
    logo?: string
    span?: string
    alt?: string
    description?: string
    href?: string
}

export interface navLink {
    id: string
    label: string
    href: string
}

export interface CTALink {
    label: string
    href: string
}

export interface NavLinks {
    [key: string]: navLink
}

export interface HeaderContent {
    brand: BrandHeader
    navLinks: NavLinks
    cta: CTALink
}


// Hero Content
export interface HeroContent {
    eyebrow?: string
    badge?: string
    title?: string
    headline?: string
    highlight?: string
    subtitle?: string
    description?: string
    primaryCta: CTALink
    secondaryCta?: CTALink
    image: {
        src: string
        alt: string
    }
}

// Product Grid
export interface NotebookProduct {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  pagePreviewImage: string;
  price: number | string;
  badge?: string;
  href?: string;
  isCustom?: boolean;
}

export interface ProductGridContent {
    title: string;
    subtitle: string;
    products: NotebookProduct[];
}

// Specs
export interface SpecFeature {
    id: string;
    icon?: string;
    title: string;
    subtitle: string;
    description: string;
}

export interface SpecSheetContent {
    badge?: string;
    title: string;
    subtitle: string;
    features: SpecFeature[];
}

//Testimonials
export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    roleTitle: string;
    location?: string;
}

export interface TestimonialsContent {
    badge?: string;
    title: string;
    subtitle: string;
    items: Testimonial[];
}

// TrustBar Content
export interface TrustStat {
    icon?: string
    value?: string
    label: string
}

export interface TrustBarContent {
    heading?: string
    stats: TrustStat[]
}
 

//FAQ
export interface FAQItem {
    id: string
    question: string
    answer: string
}

export interface FAQContent {
    badge?: string
    title: string
    subtitle: string
    // heading: string
    items: FAQItem[]
}


//Contact
export interface ContactContent {
    heading: string
    description: string
    phone: string
    email: string
    area: string
}


//WhatsAppConfig
export interface WhatsAppConfig {
    phoneNumber: string
    message: string
    label?: string
}


//Footer
// export interface contact {
//     office?: string
//     address?: string
//     email: string
//     phoneNumber: string
// }

// export interface SocialLink {
//     icon: IconType
//     href: string
//     arialabel?: string
// }

// export interface socials {
//     facebook?: SocialLink
//     instagram?: SocialLink
//     twitter?: SocialLink
//     linkedin?: SocialLink
//     youtube?: SocialLink
//     pinterest?: SocialLink
// }

// export interface legal {
//     copyright: string
//     terms?: string
//     privacy?: string
//     termsHref?: string
//     privacyHref?: string
// }

// export interface FooterContent {
//     brand: Brand
//     contact: contact
//     socials: socials
//     legal: legal
// }


export interface CtaBannerContent {
  badge?: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}


// THE UPDATED FOOTER CONTENT TYPES
export interface BrandFooter {
    name?: string;
    logo?: string;
    tagline: string;
}

export interface Contact {
    office?: string
    address?: string
    email: string
    phoneNumber: string
}

export interface SocialLink {
    icon: IconType
    href: string
    arialabel?: string
}

export interface Socials {
    facebook?: SocialLink
    instagram?: SocialLink
    twitter?: SocialLink
    linkedin?: SocialLink
    youtube?: SocialLink
    pinterest?: SocialLink
}

export interface Legal {
    copyright: string
    terms?: string
    privacy?: string
    termsHref?: string
    privacyHref?: string
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
    brand: BrandFooter;
    contact: Contact;
    socials: Socials;
    legal: Legal;
    navlinks: FooterLink[];
}

// THE OLD FOOTER CONTENT TYPES

// export interface FooterContent {
//   brandName: string;
//   tagline: string;
//   conciergeEmail: string;
//   copyrightText: string;
//   links: FooterLink[];
// }