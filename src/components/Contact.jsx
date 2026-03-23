import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { socialLinks } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Toast = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${
      type === 'success' ? 'bg-green-600' : 'bg-red-500'
    }`}
  >
    {message}
    <button onClick={onClose} className="ml-4 text-white/70 hover:text-white">
      &times;
    </button>
  </motion.div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showToast('Please fill in all fields.', 'error');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_t4wlzpa',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_z2txxka',
        {
          from_name: form.name,
          to_name: 'Ravi Kumar',
          from_email: form.email,
          to_email: 'mailmeonravikumar@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'hMefdcNslAsawy6me'
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          showToast('Thank you! I will get back to you soon.', 'success');
          setForm({ name: '', email: '', message: '' });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showToast('Something went wrong. Please try again.', 'error');
        }
      );
  };

  return (
    <>
      {/* Contact Info Cards */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="mailto:mailmeonravikumar@gmail.com"
          className="contact-info-card flex items-center gap-4 p-4 bg-tertiary rounded-xl border border-accent/10"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
          </div>
          <div>
            <p className="text-text-secondary text-xs">Email</p>
            <p className="text-text-primary text-sm font-medium">mailmeonravikumar@gmail.com</p>
          </div>
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info-card flex items-center gap-4 p-4 bg-tertiary rounded-xl border border-accent/10"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faLinkedin} className="text-accent" />
          </div>
          <div>
            <p className="text-text-secondary text-xs">LinkedIn</p>
            <p className="text-text-primary text-sm font-medium">ravikumar2901</p>
          </div>
        </a>
        <div className="contact-info-card flex items-center gap-4 p-4 bg-tertiary rounded-xl border border-accent/10">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faLocationDot} className="text-accent" />
          </div>
          <div>
            <p className="text-text-secondary text-xs">Location</p>
            <p className="text-text-primary text-sm font-medium">Bengaluru, India</p>
          </div>
        </div>
      </div>

      <div
        className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-accent/10"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-tertiary py-4 px-6 pt-6 text-text-primary rounded-lg outline-none border border-accent/10 focus:border-accent/50 font-medium transition-colors duration-300 w-full"
              />
              <span className="absolute left-6 top-4 text-text-secondary/60 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent pointer-events-none peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                Your Name
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-tertiary py-4 px-6 pt-6 text-text-primary rounded-lg outline-none border border-accent/10 focus:border-accent/50 font-medium transition-colors duration-300 w-full"
              />
              <span className="absolute left-6 top-4 text-text-secondary/60 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent pointer-events-none peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                Your Email
              </span>
            </div>
            <div className="relative">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-tertiary py-4 px-6 pt-6 text-text-primary rounded-lg outline-none border border-accent/10 focus:border-accent/50 font-medium transition-colors duration-300 w-full"
              />
              <span className="absolute left-6 top-4 text-text-secondary/60 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-accent pointer-events-none peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                Your Message
              </span>
            </div>

            <button
              type="submit"
              disabled={sent}
              className={`py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md transition-all duration-300 flex items-center gap-2 ${
                sent
                  ? 'bg-green-600 text-white'
                  : 'bg-accent text-white hover:shadow-lg hover:shadow-accent/25 btn-shimmer'
              }`}
            >
              {sent ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Sent!
                </>
              ) : loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
