import { motion } from 'framer-motion';
import ContactLinks from '../ui/ContactLinks';

/**
 * Contact section configuration
 */
const CONTACT_CONTENT = {
  title: "Got a project? Let's talk.",
  description:
    "I'm always up for interesting work — whether it's a web app, mobile project, or something I haven't tried yet. Drop me a line.",
  links: [
    { label: 'Email', href: 'mailto:guillermoacq@gmail.com', isExternal: false },
    { label: 'GitHub', href: 'https://github.com', isExternal: true },
    { label: 'LinkedIn', href: 'https://linkedin.com', isExternal: true },
    { label: 'WhatsApp', href: 'https://wa.me/59891003020', isExternal: true },
  ],
};

/**
 * Contact section component
 */
const ContactSection = () => {
  const { title, description, links } = CONTACT_CONTENT;

  return (
    <section id="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="contact-title">{title}</h2>
          <p className="contact-description">{description}</p>
          <ContactLinks links={links} />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
