import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECT } from '../../data/content';
import { fadeInUp } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './ImageCarousel.css';

const AUTO_PLAY_INTERVAL = 5000;

export default function ImageCarousel() {
  const { ref, isInView } = useInViewOnce();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const images = PROJECT.gallery;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || fullscreen) return;
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, fullscreen, next]);

  useEffect(() => {
    if (!fullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [fullscreen, next, prev]);

  return (
    <section className="section carousel-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label">Gallery</span>
          <h2>Visual Journey</h2>
          <div className="divider" />
        </motion.div>
      </div>

      <motion.div
        className="carousel"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="carousel__main">
          <button className="carousel__arrow carousel__arrow--prev" onClick={prev} aria-label="Previous image">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel__viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="carousel__slide"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="carousel__image"
                />
                <div className="carousel__overlay" />
              </motion.div>
            </AnimatePresence>

            <button
              className="carousel__fullscreen-btn"
              onClick={() => setFullscreen(true)}
              aria-label="View fullscreen"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
              </svg>
            </button>

            <div className="carousel__counter">
              <span>{String(current + 1).padStart(2, '0')}</span>
              <span className="carousel__counter-sep">/</span>
              <span>{String(images.length).padStart(2, '0')}</span>
            </div>
          </div>

          <button className="carousel__arrow carousel__arrow--next" onClick={next} aria-label="Next image">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel__thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`carousel__thumb ${i === current ? 'carousel__thumb--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img.src} alt={img.alt} />
            </button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="carousel__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(false)}
          >
            <button
              className="carousel__lightbox-close"
              onClick={() => setFullscreen(false)}
              aria-label="Close fullscreen"
            >
              &times;
            </button>
            <button
              className="carousel__lightbox-arrow carousel__lightbox-arrow--prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              &larr;
            </button>
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              className="carousel__lightbox-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="carousel__lightbox-arrow carousel__lightbox-arrow--next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
