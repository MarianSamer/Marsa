import { motion } from 'framer-motion';
import AboutHeader from '../components/about/AboutHeader';
import AboutSection from '../components/about/AboutSection';
import SkillsSection from '../components/about/SkillsSection';
import ContactSection from '../components/about/ContactSection';
import Footer from '../components/footer/Footer';
import { pageTransition } from '../utils/animations';

export default function About() {
  return (
    <motion.main {...pageTransition}>
      <AboutHeader />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer variant="about" />
    </motion.main>
  );
}
