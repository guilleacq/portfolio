import PropTypes from 'prop-types';

/**
 * External link icon component
 */
const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/**
 * GitHub icon component
 */
const GitHubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/**
 * Status badge component
 */
const StatusBadge = ({ status }) => {
  const statusClass = status.toLowerCase().replace(' ', '-');
  return <span className={`project-status project-status--${statusClass}`}>{status}</span>;
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

/**
 * Project list card component - detailed view for recruiters
 */
const ProjectListCard = ({ project }) => {
  const {
    title,
    role,
    company,
    period,
    type,
    description,
    highlights,
    tags,
    status,
    links,
  } = project;

  const hasLinks = links.github || links.live;

  return (
    <article className="project-list-card">
      <div className="project-list-header">
        <div className="project-list-title-row">
          <h2 className="project-list-title">{title}</h2>
          <StatusBadge status={status} />
        </div>
        <div className="project-list-meta">
          <span className="project-list-role">{role}</span>
          <span className="project-list-separator">@</span>
          <span className="project-list-company">{company}</span>
          <span className="project-list-separator">·</span>
          <span className="project-list-period">{period}</span>
          <span className="project-list-separator">·</span>
          <span className="project-list-type">{type}</span>
        </div>
      </div>

      <p className="project-list-description">{description}</p>

      <ul className="project-list-highlights">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <div className="project-list-footer">
        <div className="project-list-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-list-tag">
              {tag}
            </span>
          ))}
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
                <GitHubIcon />
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
                <ExternalLinkIcon />
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
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    links: PropTypes.shape({
      github: PropTypes.string,
      live: PropTypes.string,
    }),
  }).isRequired,
};

export default ProjectListCard;
