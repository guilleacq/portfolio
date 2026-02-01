import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Individual skill item component
 */
const SkillItem = ({ skill, index }) => {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      {skill}
    </motion.div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

/**
 * Skills list component with staggered animation
 */
const SkillsList = ({ skills }) => {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <SkillItem
          key={skill}
          skill={skill}
          index={index}
        />
      ))}
    </div>
  );
};

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsList;
