import { useState, useMemo } from 'react';
import ProjectListCard from '../components/ui/ProjectListCard';
import TagFilter from '../components/ui/TagFilter';

/**
 * Projects data with detailed information for recruiters
 */
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'CICAMA Habit Tracker',
    role: 'Lead Developer & Architect',
    company: 'FLUXER',
    period: '2024 - Present',
    type: 'Mobile App',
    description:
      'Cross-platform mobile application designed to help users build and maintain healthy habits through personalized tracking and smart reminders.',
    highlights: [
      'Architected the entire application from scratch using React Native',
      'Implemented custom habit-tracking algorithms for personalized user engagement',
      'Designed scalable state management for offline-first functionality',
    ],
    tags: ['React Native', 'JavaScript', 'Mobile', 'Algorithms', 'Full Stack'],
    status: 'In Development',
    links: {
      // github: 'https://github.com',
      // live: 'https://example.com',
    },
  },
  {
    id: 2,
    title: 'VR Games & Experiences',
    role: 'Unity Game Developer',
    company: 'Kreitech',
    period: '2021 - 2023',
    type: 'Game Development',
    description:
      'High-performance videogames and immersive virtual reality experiences for Meta Quest 2, developed in an agile team environment.',
    highlights: [
      'Engineered performant gameplay mechanics in C# for VR environments',
      'Collaborated with cross-functional teams translating client feedback into features',
      'Managed Git workflows ensuring code integrity across multiple branches',
    ],
    tags: ['Unity 3D', 'C#', 'VR', 'Meta Quest', 'Agile', 'Git'],
    status: 'Completed',
    links: {},
  },
  {
    id: 3,
    title: 'Artist E-Commerce Platform',
    role: 'Full Stack Developer',
    company: 'FLUXER',
    period: '2024',
    type: 'Web Development',
    description:
      'Custom e-commerce solution for an independent artist, establishing their first direct-to-consumer sales channel with integrated payment processing.',
    highlights: [
      'Designed and deployed complete e-commerce infrastructure',
      'Integrated payment processing and inventory management',
      'Implemented SEO best practices resulting in organic traffic growth',
    ],
    tags: ['WordPress', 'E-Commerce', 'Web Design', 'SEO', 'Full Stack'],
    status: 'Live',
    links: {},
  },
  {
    id: 4,
    title: 'SMB Digital Presence',
    role: 'Web Consultant',
    company: 'FLUXER',
    period: '2024 - Present',
    type: 'Web Development',
    description:
      'Consulting and development services for local businesses (Ginza, FRADEC) to establish and improve their digital presence through modern, responsive websites.',
    highlights: [
      'Delivered responsive landing pages improving brand visibility',
      'Consulted on digital strategy and web presence optimization',
      'Built with modern HTML/CSS/JS ensuring cross-browser compatibility',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Consulting', 'Responsive Design'],
    status: 'Ongoing',
    links: {},
  },
];

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
          <h1 className="projects-page-title">Projects</h1>
          <p className="projects-page-subtitle">
            A selection of work I've shipped — from mobile apps to VR experiences.
            <br />
            <span className="projects-page-note">
              Currently open to Full Stack and React Native opportunities.
            </span>
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
