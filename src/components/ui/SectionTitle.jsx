import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const SectionTitle = ({ children, isVisible = true, to = null }) => {
  const titleClass = `section-title ${isVisible ? 'visible' : ''} ${to ? 'section-title--linked' : ''}`;

  if (to) {
    return (
      <Link to={to} className={titleClass}>
        <span>{children}</span>
        <ArrowRight className="section-title-arrow" />
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
