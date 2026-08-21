// import heroImg from "/images/hero/hero.png"
// import heroImg from "/images/hero/hero1.jpg"
import heroImg from "/images/hero/logo.jpeg"
import logoImg from "/favicon.ico"
import churchCover from "/images/notebooks/church-front.jpeg"
import uniCover from "/images/notebooks/uni-front.jpeg"
import journalCover from "/images/notebooks/journal-front.jpeg"
import customCover from "/images/notebooks/custom-front.png"
import backPreview from "/images/notebooks/back-preview.jpeg"
import { contact } from "../config/site"
import type {
    BrandHeader,
    NavLinks,
    CTALink,
    HeaderContent,
    HeroContent,
    ProductGridContent,
    SpecSheetContent,
    TrustBarContent,
    TestimonialsContent,
    FAQContent,
    ContactContent,
    CtaBannerContent,
    FooterContent,
    BrandFooter,
    // Contact,
    Socials,
    Legal
} from "../types/index"
import {
    FaInstagram,
    // FaTwitter,
    FaLinkedin,
    // FaYoutube,
    // FaPinterest
} from "react-icons/fa"


export const brand: BrandHeader = {
        name: "ScriptIQ",
        logo: logoImg,
        alt: "ScriptIQ Emblem",
        // span: "script.iq",
        // description: "script.iq",
        href: "#"
    }


// NAV LINKS FOR THE HEADER
export const navLinks: NavLinks = {
    church: {
        id: 'church',
        label: 'Church Edition',
        href: '#church-edition',
    },
    comrade: {
        id: 'comrade',
        label: 'Academic Edition',
        href: '#comrade-edition',
    },
    journal: {
        id: 'journal',
        label: 'Journal',
        href: '#custom-leather',
    },
    custom: {
        id: 'custom',
        label: 'Custom Cover Edition',
        href: '#custom-notebook',
    },
}

export const cta: CTALink = {
    label: 'Get Started',
    href: '#contact',
}

export const headerContent: HeaderContent = {
    brand,
    navLinks,
    cta,
}


// export const heroContent: HeroContent = {
//     title: "For the thinkers",
//     subtitle: "Thoughtfully engineered with bleed-resistant paper and lay-flat binding. Choose from our 3 signature layouts or create a custom cover tailored to your brand.",
//     primaryCta: {
//         label: "Pick Your Style — 400 KES",
//         href: "#pricing"
//     },
//     secondaryCta: {
//         label: "Explore Custom Printing →",
//         href: "#contact"
//     },
//     image: {
//         src: heroImg,
//         alt: "script.iq"
//     }
// }

export const heroContent: HeroContent = {
  badge: '✦ Bespoke Notebooks',
  headline: 'Where Sacred Text Meets Masterful Craft',
  description: 'Hand-bound journals and tailored editions engineered for spiritual reflection, academic pursuit, and enduring legacies.',
  primaryCta: {
    label: 'Explore Editions',
    href: '#editions',
  },
  secondaryCta: {
    label: 'Order Custom Cover',
    href: '#custom-notebook',
  },
  image: {
    src: heroImg,
    alt: 'ScriptIQ Custom Leather Journal Showcase',
  },
};


export const productGridSection: ProductGridContent = {
  title: 'Bespoke Editions',
  subtitle: 'Hover over any journal to flip the cover and preview interior page layouts.',
  products: [
    {
      id: 'church-edition',
      title: 'Church Edition',
      description: 'Crafted for sermon notes, scripture journaling, and prayer logs with specialized dual-column margins.',
      coverImage: churchCover,
      pagePreviewImage: backPreview,
      price: 400,
      badge: 'Most Popular',
      href: '#church-edition',
    },
    {
      id: 'academic-edition',
      title: 'Academic Edition',
      description: 'Engineered for intensive lecture notes and research indexing with numbered pages and matrix layouts.',
      coverImage: uniCover,
      pagePreviewImage: backPreview,
      price: 400,
      href: '#academic-edition',
    },
    {
      id: 'custom-leather',
      title: 'Script Journal',
      description: 'Hand-stitched full-grain leather cover with custom gold-foil monogramming and archival gilt edges.',
      coverImage: journalCover,
      pagePreviewImage: backPreview,
      price: 'From Kes390',
      badge: 'Bespoke',
      href: '#custom-leather',
    },
    {
      id: 'custom-notebook',
      title: 'Custom Notebook For Your Brand',
      description: 'Hand-stitched full-grain leather cover with custom gold-foil monogramming and archival gilt edges.',
      coverImage: customCover,
      pagePreviewImage: backPreview,
      price: 'From Kes380',
      badge: 'Bespoke',
      href: '#custom-leather',
      isCustom: true
    },
  ],
};

export const specSheetSection: SpecSheetContent = {
  badge: '✦ Uncompromising Craft',
  title: 'Engineered for Generations',
  subtitle: 'Every ScriptIQ journal is hand-assembled using archival-grade materials built to outlast daily use.',
  features: [
    {
      id: 'paper',
      icon: '📜',
      title: '120 GSM Archival Paper',
      subtitle: 'Zero Bleed & Ghosting',
      description: 'Ultra-opaque, acid-free pages engineered to absorb fountain pen inks without feathered edges or pass-through bleed.',
    },
    {
      id: 'binding',
      icon: '📖',
      title: 'Smyth-Sewn Binding',
      subtitle: '180° Lay-Flat Opening',
      description: 'Traditional thread-bound signatures ensure your notebook rests completely flat without forcing the spine.',
    },
    {
      id: 'leather',
      icon: '✨',
      title: 'Full-Grain Leather',
      subtitle: 'Patina That Tells a Story',
      description: 'Hand-selected from heritage tanneries, developing a rich character and supple feel across years of active use.',
    },
    {
      id: 'gilt',
      icon: '⚜️',
      title: 'Gold Foil Gilt Edges',
      subtitle: 'Archival Dust Protection',
      description: 'Precision hand-stamped metallic edges that protect interior pages from ambient moisture while delivering timeless prestige.',
    },
  ],
};

export const trustBarContent: TrustBarContent = {
    stats: [
        {
            icon: "⚡",
            label: "Fast M-Pesa Checkout — One-tap STK Push payment, zero friction."
        },
        {
            icon: "📜",
            label: "80+ GSM Bleed-Proof Paper — No ghosting with fountain pens, gel pens, or markers."
        },
        {
            icon: "📑 📖",
            label: "80+ GSM Bleed-Proof Paper — No ghosting with fountain pens, gel pens, or markers."
            // label: "Lay-Flat Binding — Opens 180° flat for smooth, edge-to-edge writing."
        },
        {
            icon: "🚚",
            label: "Islandwide & Regional Shipping — Doorstep delivery via local couriers across Kenya."
        }
    ]
}

export const testimonialsSection: TestimonialsContent = {
  badge: '✦ Endorsements',
  title: 'Voices of Legacy',
  subtitle: 'Trusted by theologians, scholars, and creators who demand uncompromising permanence.',
  items: [
    {
      id: '1',
      quote: 'The 120GSM paper completely changed my study flow. Zero fountain pen bleed, even with heavy iron gall inks. It feels less like a notebook and more like an heirloom.',
      author: 'Dr. Aris Thorne',
      roleTitle: 'Professor of Historical Theology',
      location: 'Oxford, UK',
    },
    {
      id: '2',
      quote: 'The lay-flat binding is an engineering marvel for long archival research sessions. ScriptIQ has achieved something truly rare: functional perfection cloaked in timeless luxury.',
      author: 'Elena Rostova',
      roleTitle: 'Executive Architect & Book Binder',
      location: 'Vienna, Austria',
    },
    {
      id: '3',
      quote: 'Having our ministry emblem blind-debossed into custom full-grain leather was effortless. The reverence in craft is immediately tangible the moment you hold it.',
      author: 'Pastor Marcus Vance',
      roleTitle: 'Senior Pastor & Author',
      location: 'Dallas, TX',
    },
  ],
};

// export const faqContent: FAQContent = {
//     title: "Because we care about you.",
//     items: [
//         {   
//             id: "1",
//             question: "What is lay-flat binding?",
//             answer: "Lay-flat binding opens 180° flat for smooth, edge-to-edge writing."
//         },
//         {
//             id: "2",
//             question: "How does custom cover printing work for 400 KES?",
//             answer: "Simply select the Custom Cover Edition, upload your design, image, or text (like your name or company logo), and pick your preferred inner paper style (Ruled, Dot-Grid, or Unlined). We precision-print your cover and ship it out within 48 hours—at no extra charge beyond the standard 400 KES price."
//         },
//         {
//             id: "3",
//             question: "How do I pay using M-Pesa on the website?",
//             answer: "When you click Buy Now or Checkout, enter your phone number. You’ll instantly receive an M-Pesa STK Push prompt on your screen asking for your PIN. Once entered, your payment clears automatically on our page without needing to manually copy transaction codes."
//         },
//         {
//             id: "4",
//             question: "Will gel pens, fountain pens, or highlighters bleed through the pages?",
//             answer: "No. We use high-grade 80 GSM (and 100 GSM on our Unlined Canvas) fountain-pen-friendly paper engineered to prevent ink ghosting and feathering"
//         },
//         {
//             id: "5",
//             question: "How long does delivery take across Kenya?",
//             answer: "Nairobi & Environs: Same-day or next-day delivery via direct courier.\n\nRest of Kenya: 24–48 hours via trusted parcel services (Wells Fargo, Easy Coach, or G4S)."
//         },
//         {
//             id: "6",
//             question: "Can I order notebooks in bulk for corporate events or weddings?",
//             answer: "Absolutely! For bulk orders over 20 pieces with custom logo engraving, contact us directly via WhatsApp or email for dedicated corporate pricing and volume discounts."
//         },
//     ]
// }

export const faqSection: FAQContent = {
  badge: '✦ Clarity',
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about our archival paper, customization timeline, and craftsmanship.',
  items: [
    {
      id: 'paper-bleed',
      question: 'Does the paper bleed or ghost with fountain pens?',
      answer: 'Not at all. We specifically source 120 GSM acid-free archival paper engineered with high opacity to eliminate ghosting and ink feathering, even with heavy fountain pen nibs and wet inks.',
    },
    {
      id: 'custom-timeline',
      question: 'How long does a custom gold-foil monogrammed order take?',
      answer: 'Custom monogrammed editions enter production immediately upon reservation and typically ship within 3 to 5 business days after hand-stamping and quality control.',
    },
    {
      id: 'lay-flat',
      question: 'Does the notebook lie completely flat while writing?',
      answer: 'Yes. Every edition is bound using traditional Smyth-sewn binding across individual paper signatures, allowing the journal to rest completely 180° flat without forcing the spine.',
    },
    {
      id: 'bulk-orders',
      question: 'Do you offer bulk orders for churches, academic institutions, or executive gifts?',
      answer: 'Yes. We offer bespoke corporate and institutional orders with custom debossed logos, specialized interior inserts, and tiered volume pricing.',
    },
  ],
};



export const contactContent: ContactContent = {
    heading: "Chat with our Lovely Service Team.",
    description: "here for you.",
    phone: "+254712398746",
    email: "script.iq@gmail.com",
    area: "Nairobi, Kenya"
}


export const ctaBannerSection: CtaBannerContent = {
  badge: '✦ Begin Your Legacy',
  title: 'Ready to Craft Your Heirloom Edition?',
  description: 'Experience the distinction of hand-bound 120GSM paper wrapped in heritage full-grain leather. Built for daily reflection and preserved for generations.',
  primaryCta: {
    label: 'Explore Editions',
    href: '#editions',
  },
  secondaryCta: {
    label: 'Concierge Inquiry',
    href: '#concierge',
  },
};

// THE OLD FOOTER SECTION CONTENT

// export const footerSection: FooterContent = {
//   brandName: 'ScriptIQ',
//   tagline: 'Where Sacred Text Meets Masterful Craft.',
//   conciergeEmail: 'script.iqnotebooks@gmail.com',
//   copyrightText: `© ${new Date().getFullYear()} ScriptIQ Notebooks. All rights reserved.`,
//   links: [
//     { label: 'Bespoke Editions', href: '#editions' },
//     { label: 'Craftsmanship', href: '#craftsmanship' },
//     { label: 'Endorsements', href: '#testimonials' },
//     { label: 'FAQ', href: '#faq' },
//   ],
// };



// THE UPDATED FOOTER SECTION CONTENT!!!
export const brandFooter: BrandFooter = {
  name: 'ScriptIQ',
  tagline: 'Where Sacred Text Meets Masterful Craft.',
}

// THIS WILL BE FETCHED FROM THE CONFIG FILE FOR EASY MANAGEMENT OF IMPORTANT BUSINESS DETAILS.
// export const contact: Contact = {
//   email: 'script.iqnotebooks@gmail.com',
//   phoneNumber: '+254798864813',
// }

export const socials: Socials = {
  instagram: {
      icon: FaInstagram,
      href: 'https://www.instagram.com/script.iq-notebooks/',
      arialabel: 'Instagram',
    },
    linkedin: {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/company/harbor-city-elite-cleaning',
      arialabel: 'LinkedIn',
    },
}

export const legal: Legal = {
  copyright: `© ${new Date().getFullYear()} ScriptIQ Notebooks. All rights reserved.`,
}

export const footerSection: FooterContent = {
  brand: brandFooter,
  contact: contact,
  socials: socials,
  legal: legal,
  // NAV LINKS FOR THE FOOTER
  navlinks: [
    { label: 'Bespoke Editions', href: '#editions' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Endorsements', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
}