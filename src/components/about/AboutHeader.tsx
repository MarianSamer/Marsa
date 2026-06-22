import { motion } from 'framer-motion';
import { ARCHITECT_NAME, ABOUT } from '../../data/content';
import { slideInLeft, slideInRight } from '../../utils/animations';
import './AboutHeader.css';

export default function AboutHeader() {
  return (
    <section className="about-header">
      <div className="container about-header__inner">
        <motion.div
          className="about-header__image-wrap"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="about-header__image-frame">
            <img src={ABOUT.portrait} alt={ARCHITECT_NAME} />
          </div>
        </motion.div>

        <motion.div
          className="about-header__text"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <span className="label">About Me</span>
          <h1>{ARCHITECT_NAME}</h1>
          <div className="divider" />
          <p className="about-header__statement">{ABOUT.statement}</p>
        </motion.div>
      </div>
    </section>
  );
}
