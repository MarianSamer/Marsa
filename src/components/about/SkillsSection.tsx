import { motion } from 'framer-motion';
import { ABOUT } from '../../data/content';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './SkillsSection.css';

export default function SkillsSection() {
  const { ref, isInView } = useInViewOnce();

  return (
    <section className="section skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label">Expertise</span>
          <h2>Skills & Tools</h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {ABOUT.skills.map((skill) => (
            <motion.div key={skill.name} className="skills__card" variants={staggerItem}>
              <div className="skills__card-header">
                <span className="skills__name">{skill.name}</span>
                <span className="skills__level">{skill.level}%</span>
              </div>
              <div className="skills__bar">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
