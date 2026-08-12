import heroImg from "/hero/hero.png"
import logoImg from "/favicon.ico"
import type {
    Brand,
    NavLinks,
    CTALink,
    HeaderContent,
    HeroContent,
    TrustBarContent,
    FAQContent,
    ContactContent,
    WhatsAppConfig,
    FooterContent
} from "../types/index"
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaPinterest
} from "react-icons/fa"


export const brand: Brand = {
        name: "ScriptIQ",
        logo: logoImg,
        alt: "ScriptIQ Emblem",
        // span: "script.iq",
        // description: "script.iq",
        href: "#"
    }

export const navLinks: NavLinks = {
    church: {
        id: 'church',
        label: 'Church Edition',
        href: '#church',
    },
    comrade: {
        id: 'comrade',
        label: 'Academic Edition',
        href: '#comrade',
    },
    journal: {
        id: 'journal',
        label: 'Journal',
        href: '#journal',
    },
    custom: {
        id: 'custom',
        label: 'Custom Cover Edition',
        href: '#custom',
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
  badge: '✦ Bespoke Leathercraft',
  headline: 'Where Sacred Text Meets Masterful Craft',
  description: 'Hand-bound journals and tailored editions engineered for spiritual reflection, academic pursuit, and enduring legacies.',
  primaryCta: {
    label: 'Explore Editions',
    href: '#editions',
  },
  secondaryCta: {
    label: 'Order Custom Cover',
    href: '#custom',
  },
  image: {
    src: heroImg,
    alt: 'ScriptIQ Custom Leather Journal Showcase',
  },
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

export const faqContent: FAQContent = {
    heading: "Because we care about you.",
    items: [
        {
            question: "What is lay-flat binding?",
            answer: "Lay-flat binding opens 180° flat for smooth, edge-to-edge writing."
        },
        {
            question: "How does custom cover printing work for 400 KES?",
            answer: "Simply select the Custom Cover Edition, upload your design, image, or text (like your name or company logo), and pick your preferred inner paper style (Ruled, Dot-Grid, or Unlined). We precision-print your cover and ship it out within 48 hours—at no extra charge beyond the standard 400 KES price."
        },
        {
            question: "How do I pay using M-Pesa on the website?",
            answer: "When you click Buy Now or Checkout, enter your phone number. You’ll instantly receive an M-Pesa STK Push prompt on your screen asking for your PIN. Once entered, your payment clears automatically on our page without needing to manually copy transaction codes."
        },
        {
            question: "Will gel pens, fountain pens, or highlighters bleed through the pages?",
            answer: "No. We use high-grade 80 GSM (and 100 GSM on our Unlined Canvas) fountain-pen-friendly paper engineered to prevent ink ghosting and feathering"
        },
        {
            question: "How long does delivery take across Kenya?",
            answer: "Nairobi & Environs: Same-day or next-day delivery via direct courier.\n\nRest of Kenya: 24–48 hours via trusted parcel services (Wells Fargo, Easy Coach, or G4S)."
        },
        {
            question: "Can I order notebooks in bulk for corporate events or weddings?",
            answer: "Absolutely! For bulk orders over 20 pieces with custom logo engraving, contact us directly via WhatsApp or email for dedicated corporate pricing and volume discounts."
        },
    ]
}


export const contactContent: ContactContent = {
    heading: "Chat with our Lovely Service Team.",
    description: "here for you.",
    phone: "+254712398746",
    email: "script.iq@gmail.com",
    area: "Nairobi, Kenya"
}

export const whatsAppConfig: WhatsAppConfig = {
    phoneNumber: "+254712398746",
    message: "Hey, I have an inquiry about ..."
}

export const footerContent: FooterContent = {
    brand: {
        logo: logoImg,
        href: "#",
        description: "your home of thought"
    },
    contact: {
        office: "Parklands, Nairobi",
        address: "Nairobi, Kenya",
        email: "script.iq@gmail.com",
        phoneNumber: "+254712398746"
    },
    socials: {
        instagram: {
            icon: FaInstagram,
            href: "https://www.instagram.com/script.iq",
            arialabel: "Instagram"
        },
        twitter: {
            icon: FaTwitter,
            href: "https://twitter.com/scriptiq",
            arialabel: "Twitter"
        },
        linkedin: {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/script.iq",
            arialabel: "LinkedIn"
        },
        youtube: {
            icon: FaYoutube,
            href: "https://www.youtube.com/script.iq",
            arialabel: "YouTube"
        },
        pinterest: {
            icon: FaPinterest,
            href: "https://www.pinterest.com/script.iq",
            arialabel: "Pinterest"
        }               
    },
    legal: {
        copyright: "script.iq",
        terms: "Terms",
        privacy: "Privacy",
        termsHref: "#terms",
        privacyHref: "#privacy"
    }
}