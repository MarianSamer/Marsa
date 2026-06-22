import { motion } from 'framer-motion';
import { ARCHITECT_NAME } from '../data/content';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="loading-screen__content">
        <motion.div
          className="loading-screen__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 48 48" fill="none" className="loading-screen__icon">
            <path d="M8 36L24 10L40 36H8Z" stroke="#C4A574" strokeWidth="1.5" fill="none" />
            <line x1="14" y1="30" x2="34" y2="30" stroke="#C4A574" strokeWidth="1" />
          </svg>
        </motion.div>

        <motion.h1
          className="loading-screen__name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {ARCHITECT_NAME}
        </motion.h1>

        <motion.p
          className="loading-screen__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Architecture Portfolio
        </motion.p>

        <motion.div
          className="loading-screen__bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
