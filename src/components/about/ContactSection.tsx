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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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
          <span className="label">Contact</span>
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
                linkedin.com/in/elenavasquez
              </a>
            </motion.div>

            <motion.div className="contact__info-item" variants={staggerItem}>
              <span className="contact__info-label">Behance</span>
              <a href={ABOUT.contact.behance} target="_blank" rel="noopener noreferrer">
                behance.net/elenavasquez
              </a>
            </motion.div>

            <motion.div variants={staggerItem}>
              <a href="/portfolio.pdf" download className="btn btn--dark contact__download">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Portfolio PDF
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <div className="contact__field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={errors.name ? 'contact__input--error' : ''}
              />
              {errors.name && <span className="contact__error">{errors.name}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={errors.email ? 'contact__input--error' : ''}
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={errors.message ? 'contact__input--error' : ''}
              />
              {errors.message && <span className="contact__error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
              <span className="btn__arrow">&rarr;</span>
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="contact__success"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
