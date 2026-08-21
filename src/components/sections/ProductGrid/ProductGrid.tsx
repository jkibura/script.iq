import React, { useState } from 'react';
import { productGridSection } from '../../../data/siteContent';
import styles from './ProductGrid.module.css';
import CustomizerModal from '../CustomNotebook/CustomizerModal';

export const ProductGrid: React.FC = () => {
  const { title, subtitle, products } = productGridSection;
  // State tracking flipped cards for mobile touch support
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="editions" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => {
            const isFlipped = flippedCards[product.id];

            return (
              <article id={product.id} key={product.id} className={styles.card}>
                <div>
                  {/* 3D Flip Image Container */}
                  <div
                    className={`${styles.flipContainer} ${
                      isFlipped ? styles.flipContainerFlipped : ''
                    }`}
                    onClick={() => (toggleFlip(product.id))}
                    title="Click or hover to flip cover"
                  >
                    {/* Front: Notebook Cover */}
                    <div className={`${styles.cardFace} ${styles.frontFace}`}>
                      <img
                        src={product.coverImage}
                        alt={`${product.title} cover`}
                        className={styles.cardImage}
                        loading="lazy"
                      />
                      <span className={styles.flipBadge}>✦ Cover</span>
                    </div>

                    {/* Back: Interior Page Preview Spread */}
                    <div className={`${styles.cardFace} ${styles.backFace}`}>
                      <img
                        src={product.pagePreviewImage}
                        alt={`${product.title} interior page spread`}
                        className={styles.cardImage}
                        loading="lazy"
                      />
                      <span className={styles.flipBadge}>📖 Page Preview</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={styles.content}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{product.title}</h3>
                      {product.badge && (
                        <span className={styles.productBadge}>{product.badge}</span>
                      )}
                    </div>
                    <p className={styles.cardDescription}>{product.description}</p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className={styles.footer}>
                  <span className={styles.price}>
                    {typeof product.price === 'number' ? `Kes${product.price}` : product.price}
                  </span>

                  {product.isCustom? (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="btn-primary"
                    >
                      Configure Edition
                    </button>
                  ) : (
                    <a href={product.href || `#${product.id}`} className="btn-primary">
                      Order Now
                    </a>
                  )}

                </div>
              </article>
            );
          })}
        </div>
      </div>
      
      {/* Interactive Bespoke Customizer Modal */}
      <CustomizerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} />  
    </section>
  );
};

export default ProductGrid;