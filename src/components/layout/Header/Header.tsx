import React, { useState, useEffect } from 'react';
import { headerContent } from '../../../data/siteContent';
import type { navLink } from '../../../types/index';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { brand, navLinks, cta } = headerContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Convert the navLinks object into an iterable array
  const navList: navLink[] = Object.values(navLinks)

  // Monitor scroll position to toggle header border and background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        {/* Brand Logo & Name */}
        <a href={brand.href || '#'} className={styles.brand} onClick={handleLinkClick}>
          <img src={brand.logo} alt={brand.alt} className={styles.logo} />
          <span className={`${styles.brandText} gold-gradient-text`}>{brand.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {navList.map((link) => (
            <a key={link.id} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a href={cta.href} 
            className={`${styles.desktopCta} btn-primary`}>
          {cta.label}
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          {navList.map((link) => (
            <a key={link.id} href={link.href} className={styles.mobileNavLink} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href={cta.href} 
            className={`btn-primary ${styles.mobileCta}`} onClick={handleLinkClick}>
          {cta.label}
        </a>
      </div>
    </header>
  );
};

export default Header;