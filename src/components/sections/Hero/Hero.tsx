import React from 'react';
import { heroContent } from '../../../data/siteContent';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { badge, headline, description, primaryCta, secondaryCta, image } = heroContent;

  return (
    <section className={styles.hero}>
      {/* Background Glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        {/* Left Column: Copy & Actions */}
        <div className={styles.content}>
          {badge && <span className={styles.badge}>{badge}</span>}
          
          <h1 className={styles.headline}>{headline}</h1>
          
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

        {/* Right Column: Floating Product Visual */}
        <div className={styles.visual}>
          <div className={styles.imageContainer}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.mockupImage}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;