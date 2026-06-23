import { motion } from 'framer-motion';
import { PROJECT } from '../../data/content';
import { useParallax } from '../../hooks/useScroll';
import './Hero.css';

export default function Hero() {
  const { ref, offset } = useParallax(0.15);

  const scrollToOverview = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={ref}>
      <motion.div
        className="hero__bg"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
      >
        <img src={PROJECT.heroImage} alt={PROJECT.title} />
      </motion.div>

      <div className="overlay-gradient" />

      <div className="hero__content container">
        <motion.span
          className="label hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Graduation Project 2026
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {PROJECT.title}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {PROJECT.subtitle}
        </motion.p>

        <motion.button
          className="btn btn--primary hero__btn"
          onClick={scrollToOverview}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Project
          <span className="btn__arrow">&rarr;</span>
        </motion.button>
      </div>

     
    </section>
  );
}
