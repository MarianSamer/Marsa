import { Link } from 'react-router-dom';
import { ARCHITECT_NAME, ABOUT } from '../../data/content';
import SocialIcons from '../SocialIcons';
import './Footer.css';

interface FooterProps {
  variant?: 'home' | 'about';
}

export default function Footer({ variant = 'home' }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${variant === 'about' ? 'footer--about' : ''}`}>
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__name">{ARCHITECT_NAME}</h3>
            <p className="footer__tagline">Housing, Architecture & Urban Development</p>
          </div>

          {variant === 'about' && (
            <div className="footer__contact">
              <p>{ABOUT.contact.email}</p>
              <p>{ABOUT.contact.phone}</p>
            </div>
          )}

          <SocialIcons variant={variant === 'about' ? 'dark' : 'light'} />
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} {ARCHITECT_NAME}. All rights reserved.
          </p>

          {variant === 'about' && (
            <Link to="/" className="footer__back">
              <span className="footer__back-arrow">&larr;</span>
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
