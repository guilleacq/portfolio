import { useState, useMemo } from 'react';
import BlogListItem from '../components/ui/BlogListItem';
import SearchInput from '../components/ui/SearchInput';

/**
 * Blog entries data - sorted by date (newest first)
 */
const BLOG_ENTRIES = [
  {
    id: 1,
    date: '2026-02-15',
    title: 'What IT Support Taught Me About Building Software',
    excerpt:
      "Before I wrote my first line of production code, I spent a year helping people fix their problems. Here's what that taught me about understanding users and solving real problems.",
    readTime: '5 min read',
    tags: ['Career', 'Lessons'],
  },
  {
    id: 2,
    date: '2026-02-01',
    title: 'Two Years in VR Development: The Good and The Hard',
    excerpt:
      'Lessons from building games and experiences for Meta Quest at Kreitech — from performance optimization tricks to working effectively in agile teams.',
    readTime: '8 min read',
    tags: ['VR', 'Unity', 'Game Dev'],
  },
  {
    id: 3,
    date: '2026-01-20',
    title: 'When to Use React Native vs a Web App',
    excerpt:
      "A practical take on choosing the right tool for your project, based on mobile and web apps I've actually shipped.",
    readTime: '6 min read',
    tags: ['React Native', 'Web', 'Mobile'],
  },
  {
    id: 4,
    date: '2026-01-10',
    title: 'Building CICAMA: Architecture Decisions for a Habit Tracking App',
    excerpt:
      'A deep dive into the technical choices behind CICAMA — from state management to the algorithm that keeps users engaged.',
    readTime: '10 min read',
    tags: ['React Native', 'Architecture', 'Case Study'],
  },
  {
    id: 5,
    date: '2025-12-28',
    title: 'My Semester in Italy: Code, Coffee, and Culture',
    excerpt:
      'Reflections on studying Computer Science at Università di Genova and how living abroad changed my perspective on work and life.',
    readTime: '4 min read',
    tags: ['Personal', 'Travel'],
  },
];

/**
 * Format date for display
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Blog page component with search and vertical list
 */
const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and sort entries
  const filteredEntries = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    if (!query) return BLOG_ENTRIES;

    return BLOG_ENTRIES.filter(
      (entry) =>
        entry.title.toLowerCase().includes(query) ||
        entry.excerpt.toLowerCase().includes(query) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="blog-page">
      <div className="container">
        <header className="blog-header">
          <h1 className="blog-page-title">Blog</h1>
          <p className="blog-page-subtitle">
            Thoughts on software, career, and the occasional adventure.
          </p>
        </header>

        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search articles..."
        />

        <div className="blog-list">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry) => (
              <BlogListItem
                key={entry.id}
                title={entry.title}
                excerpt={entry.excerpt}
                date={formatDate(entry.date)}
                readTime={entry.readTime}
                tags={entry.tags}
              />
            ))
          ) : (
            <div className="blog-empty">
              <p>No articles found for "{searchQuery}"</p>
            </div>
          )}
        </div>

        <div className="blog-count">
          {filteredEntries.length} {filteredEntries.length === 1 ? 'article' : 'articles'}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      </div>
    </div>
  );
};

export default Blog;
