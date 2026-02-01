import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ViewAllLink from '../ui/ViewAllLink';

/**
 * Projects section configuration
 */
const PROJECTS_DATA = [
  {
    id: 1,
    number: '01',
    title: 'CICAMA Habit Tracker',
    description:
      "A React Native app I'm building from scratch for a client. Users track daily habits, and the app uses custom algorithms to help them stay consistent. Full ownership of architecture and development.",
    tags: ['React Native', 'Full Stack', 'Mobile', 'Algorithms'],
    image: 'CICAMA',
  },
  {
    id: 2,
    number: '02',
    title: 'VR Games at Kreitech',
    description:
      'Spent two years building games and VR experiences for Meta Quest 2. Worked in agile teams, wrote performant C# code, and learned how to ship polished products under real deadlines.',
    tags: ['Unity 3D', 'C#', 'VR', 'Agile'],
    image: 'VR Games',
  },
  {
    id: 3,
    number: '03',
    title: 'Artist E-Commerce Store',
    description:
      "Built a full e-commerce platform for an independent artist who needed to sell directly to customers. Set up everything from product pages to payment processing. They're still using it today.",
    tags: ['WordPress', 'E-Commerce', 'Web', 'SEO'],
    image: 'E-Commerce',
  },
];

/**
 * Projects section component with project cards
 */
const ProjectsSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <SectionTitle to="/projects" isVisible={isVisible}>
          Selected Work
        </SectionTitle>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        <ViewAllLink to="/projects">View all projects</ViewAllLink>
      </div>
    </section>
  );
};

export default ProjectsSection;
