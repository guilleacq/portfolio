import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Arrow icon for linked titles
 */
const ArrowIcon = () => (
  <svg
    className="section-title-arrow"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/**
 * Animated section title component
 * Can be a link if 'to' prop is provided
 */
const SectionTitle = ({ children, isVisible = true, to = null }) => {
  const titleClass = `section-title ${isVisible ? 'visible' : ''} ${to ? 'section-title--linked' : ''}`;

  if (to) {
    return (
      <Link to={to} className={titleClass}>
        <span>{children}</span>
        <ArrowIcon />
      </Link>
    );
  }

  return (
    <h2 className={titleClass}>
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  to: PropTypes.string,
};

export default SectionTitle;
