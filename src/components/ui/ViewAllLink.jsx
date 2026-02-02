import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * "View all" link component for section footers
 */
const ViewAllLink = ({ to, children = 'View all' }) => {
  return (
    <div className="view-all-container">
      <Link to={to} className="view-all-link">
        <span>{children}</span>
        <ArrowRight className="view-all-arrow" size={16} />
      </Link>
    </div>
  );
};

ViewAllLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ViewAllLink;
