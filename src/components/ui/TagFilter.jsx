import PropTypes from 'prop-types';

/**
 * Tag filter component for filtering projects
 */
const TagFilter = ({ tags, activeTag, onTagClick }) => {
  return (
    <div className="tag-filter">
      <div className="tag-filter-label">Filter by:</div>
      <div className="tag-filter-list">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-filter-button ${activeTag === tag ? 'active' : ''}`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTag: PropTypes.string.isRequired,
  onTagClick: PropTypes.func.isRequired,
};

export default TagFilter;
