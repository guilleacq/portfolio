import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../content/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === slug);
    setProject(foundProject);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-loading">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <header className="project-detail-header">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          
          <div className="title-status-group">
            <h1 className="project-detail-title">{project.title}</h1>
            <div className={`status-badge ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="status-dot"></span>
              {project.status}
            </div>
          </div>

          <div className="project-meta-info">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">{project.role}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Company</span>
              <span className="meta-value">{project.company}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Period</span>
              <span className="meta-value">{project.period}</span>
            </div>
          </div>

          <div className="project-detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-detail-links">
            {project.links.map((link) => (
              <a 
                key={link.label} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                {link.label.toLowerCase().includes('github') ? (
                  <Github size={16} />
                ) : (
                  <ArrowUpRight size={16} />
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </header>

        <section className="project-detail-section">
          <h2 className="section-subtitle">Overview</h2>
          <div className="project-description">
            {project.overview.split('\n').map((paragraph, i) => (
              paragraph.trim() && <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </section>

        <section className="project-detail-section">
          <h2 className="section-subtitle">Key Highlights</h2>
          <ul className="highlights-list">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </section>

        {project.images && project.images.length > 0 && (
          <section className="project-detail-section">
            <h2 className="section-subtitle">Project Gallery</h2>
            <div className="project-images-grid">
              {project.images.map((img, i) => (
                <div key={i} className="project-image-item">
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${i + 1}`} 
                    className="project-grid-image"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
