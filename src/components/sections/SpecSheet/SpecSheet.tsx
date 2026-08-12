import React from 'react';
import { specSheetSection } from '../../../data/siteContent';
import styles from './SpecSheet.module.css';

export const SpecSheet: React.FC = () => {
  const { badge, title, subtitle, features } = specSheetSection;

  return (
    <section id="craftsmanship" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article key={feature.id} className={styles.featureCard}>
              {feature.icon && (
                <div className={styles.iconWrapper} aria-hidden="true">
                  {feature.icon}
                </div>
              )}

              <div className={styles.cardHeader}>
                <span className={styles.featureSubtitle}>{feature.subtitle}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
              </div>

              <p className={styles.featureDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecSheet;