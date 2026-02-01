import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../ui/SectionTitle';
import BlogCard from '../ui/BlogCard';
import ViewAllLink from '../ui/ViewAllLink';

/**
 * Blog section configuration
 */
const BLOG_DATA = [
  {
    id: 1,
    date: 'Coming Soon',
    title: 'What IT Support Taught Me About Building Software',
    excerpt:
      "Before I wrote my first line of production code, I spent a year helping people fix their problems. Here's what that taught me.",
  },
  {
    id: 2,
    date: 'Coming Soon',
    title: 'Two Years in VR Development: The Good and The Hard',
    excerpt:
      'Lessons from building games and experiences for Meta Quest — from performance tricks to working in agile teams.',
  },
  {
    id: 3,
    date: 'Coming Soon',
    title: 'When to Use React Native vs a Web App',
    excerpt:
      "A practical take on choosing the right tool, based on projects I've actually shipped.",
  },
];

/**
 * Blog section component with blog cards
 */
const BlogSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section id="blog" ref={sectionRef}>
      <div className="container">
        <SectionTitle to="/blog" isVisible={isVisible}>
          Writing
        </SectionTitle>
        <div className="blog-grid">
          {BLOG_DATA.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
        <ViewAllLink to="/blog">View all articles</ViewAllLink>
      </div>
    </section>
  );
};

export default BlogSection;
