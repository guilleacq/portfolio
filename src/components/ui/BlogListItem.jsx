import PropTypes from 'prop-types';

/**
 * Blog list item component for the blog page
 */
const BlogListItem = ({ title, excerpt, date, readTime, tags }) => {
  return (
    <article className="blog-list-item">
      <div className="blog-list-meta">
        <time className="blog-list-date">{date}</time>
        <span className="blog-list-separator">·</span>
        <span className="blog-list-read-time">{readTime}</span>
      </div>
      
      <h2 className="blog-list-title">{title}</h2>
      
      <p className="blog-list-excerpt">{excerpt}</p>
      
      <div className="blog-list-tags">
        {tags.map((tag) => (
          <span key={tag} className="blog-list-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

BlogListItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogListItem;
