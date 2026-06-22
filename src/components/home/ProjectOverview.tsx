import { motion } from 'framer-motion';
import { PROJECT } from '../../data/content';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './ProjectOverview.css';

export default function ProjectOverview() {
  const { ref, isInView } = useInViewOnce();

  return (
    <section className="section overview" id="overview" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label">Project Overview</span>
          <h2> Concept</h2>
          <div className="divider" />
        </motion.div>

        <div className="overview__grid">
          <motion.div
            className="overview__text"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <p className="overview__description">{PROJECT.description}</p>
            <blockquote className="overview__concept">
              <p>{PROJECT.concept}</p>
            </blockquote>
          </motion.div>

          <motion.div
            className="overview__cards"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {PROJECT.stats.map((stat) => (
              <motion.div key={stat.label} className="overview__card" variants={staggerItem}>
                <span className="overview__card-label">{stat.label}</span>
                <span className="overview__card-value">{stat.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
