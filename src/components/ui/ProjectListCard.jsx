import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';

/**
 * Project list card component - detailed view for recruiters
 */
const ProjectListCard = ({ project }) => {
  const {
    title,
    role,
    company,
    period,
    description,
    tags,
    links,
  } = project;

  const hasLinks = links.github || links.live;

  return (
    <article className="project-list-card">
      <div className="project-list-header">
        <div className="project-list-title-row">
          <h2 className="project-list-title">{title}</h2>
        </div>
        <div className="project-list-meta">
          <span className="project-list-role">{role}</span>
          <span className="project-list-separator">@</span>
          <span className="project-list-company">{company}</span>
          <span className="project-list-separator">·</span>
          <span className="project-list-period">{period}</span>
        </div>
      </div>

      <p className="project-list-description">{description}</p>

      <div className="project-list-footer">
        <div className="project-list-tags">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="project-list-tag">
              {tag}
            </span>
          ))}
          {tags.length > 4 && <span className="project-list-tag-more">+{tags.length - 4}</span>}
        </div>

        {hasLinks && (
          <div className="project-list-links">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View on GitHub"
              >
                <Github size={14} />
                <span>Code</span>
              </a>
            )}
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="View live project"
              >
                <ExternalLink size={14} />
                <span>Live</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

ProjectListCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.shape({
      github: PropTypes.string,
      live: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectListCard;
