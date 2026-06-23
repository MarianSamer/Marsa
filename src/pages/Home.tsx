import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ProjectOverview from '../components/home/ProjectOverview';
import VideoSection from '../components/home/VideoSection';
import ImageCarousel from '../components/home/ImageCarousel';
import DesignProcess from '../components/home/DesignProcess';
import CallToAction from '../components/home/CallToAction';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/footer/Footer';
import { pageTransition } from '../utils/animations';

export default function Home() {
  return (
    <motion.main {...pageTransition}>
      <Hero />
      <ProjectOverview />
      <VideoSection />
      <ImageCarousel />
      <DesignProcess />
      <CallToAction />
      <ContactSection />
      <Footer variant="home" />
    </motion.main>
  );
}
