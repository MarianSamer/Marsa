import { motion } from 'framer-motion';
import { ABOUT } from '../../data/content';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './AboutSection.css';

export default function AboutSection() {
  const { ref, isInView } = useInViewOnce();

  return (
    <section className="section about-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label">Biography</span>
          <h2>My Story</h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className="about-section__grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-section__block" variants={staggerItem}>
            <h3>Background</h3>
            <p>{ABOUT.biography}</p>
          </motion.div>

          <motion.div className="about-section__block" variants={staggerItem}>
            <h3>Philosophy</h3>
            <p>{ABOUT.philosophy}</p>
          </motion.div>

          <motion.div className="about-section__block" variants={staggerItem}>
            <h3>Design Interests</h3>
            <ul className="about-section__list">
              {ABOUT.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="about-section__block" variants={staggerItem}>
            <h3>Education</h3>
            <div className="about-section__education">
              {ABOUT.education.map((edu) => (
                <div key={edu.degree} className="about-section__edu-item">
                  <span className="about-section__edu-year">{edu.year}</span>
                  <div>
                    <strong>{edu.degree}</strong>
                    <p>{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-section__block about-section__block--full" variants={staggerItem}>
            <h3>Professional Goals</h3>
            <p>{ABOUT.goals}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
