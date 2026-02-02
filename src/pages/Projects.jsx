import { useState, useMemo } from 'react';
import ProjectListCard from '../components/ui/ProjectListCard';
import TagFilter from '../components/ui/TagFilter';
import { projects as PROJECTS_DATA } from '../content/projects';

/**
 * Get all unique tags from projects
 */
const getAllTags = (projects) => {
  const tags = new Set();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return ['All', ...Array.from(tags).sort()];
};

/**
 * Projects page component - recruiter-friendly layout
 */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const allTags = useMemo(() => getAllTags(PROJECTS_DATA), []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((project) =>
      project.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <div className="projects-page">
      <div className="container">
        <header className="projects-header">
          <div className="availability-badge">
            <span className="availability-dot"></span>
            Currently open to new opportunities
          </div>
          <h1 className="projects-page-title">Projects</h1>
          <p className="projects-page-subtitle">
            A selection of work I've shipped — from mobile apps to VR experiences.
          </p>
        </header>

        <TagFilter
          tags={allTags}
          activeTag={activeFilter}
          onTagClick={setActiveFilter}
        />

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <ProjectListCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found with "{activeFilter}" tag.</p>
          </div>
        )}

        <div className="projects-count">
          Showing {filteredProjects.length} of {PROJECTS_DATA.length} projects
        </div>
      </div>
    </div>
  );
};

export default Projects;
