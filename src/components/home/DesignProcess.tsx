import { motion } from 'framer-motion';
import { PROJECT } from '../../data/content';
import { fadeInUp } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './DesignProcess.css';

export default function DesignProcess() {
  const { ref, isInView } = useInViewOnce();

  return (
    <section className="section process" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label">Design Process</span>
          <h2>From Research to Resolution</h2>
          <div className="divider" />
        </motion.div>

        <div className="process__timeline">
          <div className="process__line">
            <motion.div
              className="process__line-fill"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          {PROJECT.timeline.map((item, i) => (
            <motion.div
              key={item.stage}
              className={`process__item ${i % 2 === 0 ? 'process__item--left' : 'process__item--right'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="process__dot">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15, type: 'spring' }}
                />
              </div>
              <div className="process__card">
                <span className="process__number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.stage}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
