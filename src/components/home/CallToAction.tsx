import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECT } from '../../data/content';
import { useParallax } from '../../hooks/useScroll';
import { useInViewOnce } from '../../hooks/useScroll';
import './CallToAction.css';

export default function CallToAction() {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  const { ref: viewRef, isInView } = useInViewOnce();

  return (
    <section className="cta" ref={viewRef}>
      <div className="cta__bg" ref={parallaxRef}>
        <motion.div style={{ transform: `translateY(${offset}px) scale(1.1)` }}>
          <img src={PROJECT.ctaImage} alt="Architectural render"/>
        </motion.div>
      </div>

      <div className="overlay-gradient overlay-gradient--light"/>

      <div className="cta__content container">
        <motion.span
          className="label"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get to Know Me
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Let's Create Something<br />Extraordinary Together
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/about" className="btn btn--primary">
            About Me
            <span className="btn__arrow">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
