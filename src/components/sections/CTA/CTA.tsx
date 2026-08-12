import React from 'react';
import { ctaBannerSection } from '../../../data/siteContent';
import styles from './CtaBanner.module.css';

export const CtaBanner: React.FC = () => {
  const { badge, title, description, primaryCta, secondaryCta } = ctaBannerSection;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.bannerCard}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.ctaGroup}>
            <a href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </a>

            {secondaryCta && (
              <a href={secondaryCta.href} className={styles.secondaryCta}>
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;