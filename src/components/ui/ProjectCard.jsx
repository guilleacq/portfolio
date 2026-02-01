import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Tag component for project technologies
 */
const Tag = ({ label }) => (
  <span className="tag">{label}</span>
);

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

/**
 * Project card component with staggered animation
 */
const ProjectCard = ({ project, index }) => {
  const { number, title, description, tags, image } = project;

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
    >
      <div className="project-info">
        <span className="project-number">{number}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
      <div className="project-image">{image}</div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
