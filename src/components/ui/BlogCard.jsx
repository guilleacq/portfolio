import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Blog card component with staggered animation
 */
const BlogCard = ({ post, index }) => {
  const { date, title, excerpt } = post;

  return (
    <motion.article
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <time className="blog-date">{date}</time>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
    </motion.article>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default BlogCard;
