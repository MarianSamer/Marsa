import { motion } from 'framer-motion';
import { PROJECT } from '../../data/content';
import { useParallax } from '../../hooks/useScroll';
import { useInViewOnce } from '../../hooks/useScroll';
import './CallToAction.css';

export default function CallToAction() {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  const { ref: viewRef, isInView } = useInViewOnce();

  const contactSection = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta" ref={viewRef}>
      <div className="cta__bg" ref={parallaxRef}>
        <motion.div style={{ transform: `translateY(${offset}px) scale(1.1)` }}>
          <img src={PROJECT.ctaImage} alt="Architectural render" />
        </motion.div>
      </div>

      <div className="overlay-gradient overlay-gradient--light"/>

      <div className="cta__content container">
        

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Let's Create Something<br />Extraordinary Together
        </motion.h2>

        <motion.button
          className="btn btn--primary hero__btn"
          onClick={contactSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
          <span className="btn__arrow">&rarr;</span>
        </motion.button>
      </div>
    </section>
  );
}
