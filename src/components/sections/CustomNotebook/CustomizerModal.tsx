import React, { useState } from 'react';
import styles from './CustomizerModal.module.css';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEATHER_OPTIONS = ['Obsidian Black', 'Cognac Brown', 'Deep Navy', 'Forest Green'];
const GRID_OPTIONS = ['Dual-Column Scripture', 'Archival Dot Grid', 'Academic Matrix', 'Ruled Lines'];
const FOIL_OPTIONS = ['24K Gold Foil', 'Silver Foil', 'Blind Deboss (No Foil)'];

export const CustomizerModal: React.FC<CustomizerModalProps> = ({ isOpen, onClose }) => {
  const [leather, setLeather] = useState(LEATHER_OPTIONS[0]);
  const [grid, setGrid] = useState(GRID_OPTIONS[0]);
  const [foil, setFoil] = useState(FOIL_OPTIONS[0]);
  const [monogram, setMonogram] = useState('');

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>Bespoke Studio</h2>
          <p className={styles.subtitle}>Customize your handcrafted journal before master guild assembly.</p>
        </div>

        {/* 1. Leather Option */}
        <div className={styles.section}>
          <span className={styles.label}>1. Select Full-Grain Leather</span>
          <div className={styles.optionsGrid}>
            {LEATHER_OPTIONS.map((item) => (
              <button
                key={item}
                className={`${styles.optionBtn} ${leather === item ? styles.activeOption : ''}`}
                onClick={() => setLeather(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Grid Option */}
        <div className={styles.section}>
          <span className={styles.label}>2. Select Page Layout</span>
          <div className={styles.optionsGrid}>
            {GRID_OPTIONS.map((item) => (
              <button
                key={item}
                className={`${styles.optionBtn} ${grid === item ? styles.activeOption : ''}`}
                onClick={() => setGrid(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Monogram */}
        <div className={styles.section}>
          <span className={styles.label}>3. Cover Monogramming (Max 3 Letters)</span>
          <input
            type="text"
            maxLength={3}
            value={monogram}
            onChange={(e) => setMonogram(e.target.value.toUpperCase())}
            placeholder="A.T."
            className={styles.monogramInput}
          />
        </div>

        {/* 4. Foil Finish */}
        <div className={styles.section}>
          <span className={styles.label}>4. Stamping Finish</span>
          <div className={styles.optionsGrid}>
            {FOIL_OPTIONS.map((item) => (
              <button
                key={item}
                className={`${styles.optionBtn} ${foil === item ? styles.activeOption : ''}`}
                onClick={() => setFoil(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Summary */}
        <div className={styles.previewSummary}>
          <div className={styles.summaryText}>
            <div>Finish: <span className={styles.summaryValue}>{leather}</span></div>
            <div>Layout: <span className={styles.summaryValue}>{grid}</span></div>
          </div>
          <div className={styles.summaryText}>
            <div>Monogram: <span className={styles.summaryValue}>{monogram || 'None'}</span> ({foil})</div>
          </div>
        </div>

        {/* Action Footer */}
        <div className={styles.footer}>
          <span className={styles.price}>$65.00</span>
          <button className="btn-primary" onClick={() => alert('Custom build saved!')}>
            Reserve Custom Edition
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizerModal;