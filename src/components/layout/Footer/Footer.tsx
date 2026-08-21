// import React from 'react';
// import { footerSection } from '../../../data/siteContent';
// import styles from './Footer.module.css';

// export const Footer: React.FC = () => {
//   const { brand, contact, socials, legal, navlinks } = footerSection;

//   return (
//     <footer id="concierge" className={styles.footer}>
//       <div className="container">
//         <div className={styles.grid}>
//           {/* Brand Identity */}
//           <div className={styles.brandCol}>
//             <h3 className={styles.brandName}>{brand.name}</h3>
//             <p className={styles.tagline}>{brand.tagline}</p>
//           </div>

//           {/* Direct Navigation */}
//           <div className={styles.navCol}>
//             <span className={styles.colTitle}>Navigation</span>
//             <ul className={styles.navList}>
//               {navlinks.map((link) => (
//                 <li key={link.label}>
//                   <a href={link.href} className={styles.navLink}>
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className={styles.socialsCol}>
//             <span className={styles.colTitle}>Socials</span>
//             <div className={styles.socialsList}>
//               {socials.instagram && <a href={socials.instagram.href} target="_blank" rel="noreferrer"><socials.instagram.icon size='28'/></a>}
//               {socials.linkedin && <a href={socials.linkedin.href} target="_blank" rel="noreferrer"><socials.linkedin.icon size='28'/></a>}
//             </div>
//           </div>

//           <div className={styles.contactCol}>
//             <span className={styles.colTitle}>Contacts</span>
//             <div className={styles.contactList}>
//               <a href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
//               <a href={`mailto:${contact.email}`}>{contact.email}</a>
//               {contact.address && <p>{contact.address}</p>}
//             </div>
//           </div>

//           {/* Bespoke Concierge */}
//           <div className={styles.conciergeCol}>
//             <span className={styles.colTitle}>Bespoke Concierge</span>
//             <p className={styles.conciergeText}>
//               Inquiring about institutional orders, custom crest debossing, or executive gifts?
//             </p>
//             <a href={`mailto:${contact.email}`} className={styles.emailBtn}>
//               {contact.email}
//             </a>
            
//           </div>
//         </div>

//         <div className={styles.bottomBar}>
//           <p>{legal.copyright}</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { footerSection } from '../../../data/siteContent'; // Adjust path if needed
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { brand, contact, socials, legal, navlinks } = footerSection;

  return (
    <footer id="concierge" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* 1. Brand Identity */}
          <div className={styles.brandCol}>
            <h3 className={styles.brandName}>{brand.name}</h3>
            <p className={styles.tagline}>{brand.tagline}</p>
          </div>

          {/* 2. Direct Navigation */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>Navigation</span>
            <ul className={styles.navList}>
              {navlinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Socials Section */}
          <div className={styles.socialsCol}>
            <span className={styles.colTitle}>Socials</span>
            <div className={styles.socialsList}>
              {socials.instagram && (
                <a 
                  href={socials.instagram.href} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={socials.instagram.arialabel}
                >
                  <socials.instagram.icon size={26} />
                </a>
              )}
              {socials.linkedin && (
                <a 
                  href={socials.linkedin.href} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label={socials.linkedin.arialabel}
                >
                  <socials.linkedin.icon size={26} />
                </a>
              )}
            </div>
          </div>

          {/* 4. Contacts Section with Phone & Email */}
          <div className={styles.contactCol}>
            <span className={styles.colTitle}>Contacts</span>
            <div className={styles.contactList}>
              <a href={`tel:${contact.phoneNumber.replace(/\D/g, '')}`}>{contact.phoneNumber}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              {contact.address && <p>{contact.address}</p>}
            </div>
          </div>

          {/* 5. Bespoke Concierge (Auto-wraps to next row under Brand) */}
          <div className={styles.conciergeCol}>
            <span className={styles.colTitle}>Bespoke Concierge</span>
            <p className={styles.conciergeText}>
              Inquiring about institutional orders, custom crest debossing, or executive gifts?
            </p>
            <a href={`mailto:${contact.email}`} className={styles.emailBtn}>
              {contact.email.toUpperCase()}
            </a>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>{legal.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;