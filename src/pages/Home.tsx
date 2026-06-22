import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ProjectOverview from '../components/home/ProjectOverview';
import ImageCarousel from '../components/home/ImageCarousel';
import DesignProcess from '../components/home/DesignProcess';
import CallToAction from '../components/home/CallToAction';
import Footer from '../components/footer/Footer';
import { pageTransition } from '../utils/animations';

export default function Home() {
  return (
    <motion.main {...pageTransition}>
      <Hero />
      <ProjectOverview />
      <ImageCarousel />
      <DesignProcess />
      <CallToAction />
      <Footer variant="home" />
    </motion.main>
  );
}
