import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ARCHITECT_NAME } from '../../data/content';
import { useScrollPosition } from '../../hooks/useScroll';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 60;
  const isAboutPage = location.pathname === '/about';
  const navClass = isScrolled
    ? 'navbar--solid'
    : isAboutPage
      ? 'navbar--light'
      : 'navbar--transparent';

  const handleNavClick = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`navbar ${navClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={handleNavClick}>
          <span className="navbar__logo-mark">MS</span>
          <span className="navbar__logo-text">{ARCHITECT_NAME}</span>
        </Link>

        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`navbar__link ${location.pathname === item.path ? 'navbar__link--active' : ''}`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.span
                    className="navbar__link-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`navbar__mobile-link ${location.pathname === item.path ? 'navbar__mobile-link--active' : ''}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
