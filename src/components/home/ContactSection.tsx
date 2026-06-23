import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT } from '../../data/content';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import { useInViewOnce } from '../../hooks/useScroll';
import './ContactSection.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const { ref, isInView } = useInViewOnce();
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header section-header--center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span className="label">Contact Me</span>
          <h2>Get In Touch</h2>
          <div className="divider" />
        </motion.div>
      
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="contact__info-item-container">
            <motion.div className="contact__info-item" variants={staggerItem}>
              <span className="contact__info-label">Full Name</span>
              <p>{ABOUT.contact.fullName}</p>
            </motion.div>
            
            <motion.div className="contact__info-item" variants={staggerItem}>
              <span className="contact__info-label">Email Address</span>
              <a href={`mailto:${ABOUT.contact.email}`}>{ABOUT.contact.email}</a>
            </motion.div>

            <motion.div className="contact__info-item" variants={staggerItem}>
              <span className="contact__info-label">Phone Number</span>
              <a href={`tel:${ABOUT.contact.phone.replace(/\s/g, '')}`}>{ABOUT.contact.phone}</a>
            </motion.div>
            
           
            <motion.div className="contact__info-item" variants={staggerItem}>
              <span className="contact__info-label">LinkedIn</span>
              <a href={ABOUT.contact.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/marian-samer
              </a>
            </motion.div>
             </div>

          </motion.div>


        </div>
      </div>
    </section>
  );
}
