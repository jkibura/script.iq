import React, { useState } from 'react';
import { faqSection } from '../../../data/siteContent';
import styles from './Faq.module.css';

export const Faq: React.FC = () => {
  const { badge, title, subtitle, items } = faqSection;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          {badge && <span className={styles.badge}>{badge}</span>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.accordionContainer}>
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    ✦
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.content}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;