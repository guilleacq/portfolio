import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Project list card component - detailed view for recruiters
 */
const ProjectListCard = ({ project }) => {
  const {
    id,
    slug,
    title,
    role,
    company,
    period,
    description,
    tags,
    links,
  } = project;

  const hasLinks = links.github || links.live;
  const projectSlug = slug || id;

  return (
    <Link to={`/projects/${projectSlug}`} className="project-list-card-link">
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
                <span className="project-link">
                  <Github size={14} />
                  <span>Code</span>
                </span>
              )}
              {links.live && (
                <span className="project-link">
                  <ExternalLink size={14} />
                  <span>Live</span>
                </span>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
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
