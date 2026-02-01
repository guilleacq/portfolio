import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * "View all" link component for section footers
 */
const ViewAllLink = ({ to, children = 'View all' }) => {
  return (
    <div className="view-all-container">
      <Link to={to} className="view-all-link">
        <span>{children}</span>
        <svg
          className="view-all-arrow"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

ViewAllLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ViewAllLink;
