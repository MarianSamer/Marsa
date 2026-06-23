import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './VideoSection.css';

export default function VideoSection() {
  const { ref, isInView } = useInViewOnce();

  return (
    <section className="section video-section" ref={ref}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', }}> Live the <strong> Experience </strong>! </h3>
      <div className="container">
        <motion.div
          className="video-section__wrapper"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <video
            className="video-section__player"
            src="/images/video.mp4"
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
