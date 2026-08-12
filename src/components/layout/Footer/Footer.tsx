import React from 'react';
import { footerSection } from '../../../data/siteContent';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { brandName, tagline, conciergeEmail, copyrightText, links } = footerSection;

  return (
    <footer id="concierge" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Identity */}
          <div className={styles.brandCol}>
            <h3 className={styles.brandName}>{brandName}</h3>
            <p className={styles.tagline}>{tagline}</p>
          </div>

          {/* Direct Navigation */}
          <div className={styles.navCol}>
            <span className={styles.colTitle}>Navigation</span>
            <ul className={styles.navList}>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bespoke Concierge */}
          <div className={styles.conciergeCol}>
            <span className={styles.colTitle}>Bespoke Concierge</span>
            <p className={styles.conciergeText}>
              Inquiring about institutional orders, custom crest debossing, or executive gifts?
            </p>
            <a href={`mailto:${conciergeEmail}`} className={styles.emailBtn}>
              {conciergeEmail}
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;