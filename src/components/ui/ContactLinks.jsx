import PropTypes from 'prop-types';

/**
 * Individual contact link component
 */
const ContactLink = ({ label, href, isExternal }) => {
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className="contact-link" {...externalProps}>
      {label}
    </a>
  );
};

ContactLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

/**
 * Contact links container component
 */
const ContactLinks = ({ links }) => {
  return (
    <div className="contact-links">
      {links.map((link) => (
        <ContactLink
          key={link.label}
          label={link.label}
          href={link.href}
          isExternal={link.isExternal}
        />
      ))}
    </div>
  );
};

ContactLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isExternal: PropTypes.bool,
    })
  ).isRequired,
};

export default ContactLinks;
