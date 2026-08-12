import React from 'react';
import { testimonialsSection } from '../../../data/siteContent';
import styles from './Testimonials.module.css';

export const Testimonials: React.FC = () => {
  const { badge, title, subtitle, items } = testimonialsSection;

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <blockquote key={item.id} className={styles.card}>
              <div>
                <div className={styles.quoteMark} aria-hidden="true">“</div>
                <p className={styles.quoteText}>{item.quote}</p>
              </div>

              <footer className={styles.authorMeta}>
                <cite className={styles.authorName}>{item.author}</cite>
                <span className={styles.authorTitle}>
                  {item.roleTitle}{item.location ? ` — ${item.location}` : ''}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;