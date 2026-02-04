import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BlogListItem from '../components/ui/BlogListItem';
import SearchInput from '../components/ui/SearchInput';
import { blogEntries } from '../content/blog';

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
    
    if (!query) return blogEntries;

    return blogEntries.filter(
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
              <Link to={`/blog/${entry.slug}`} key={entry.id} className="blog-list-item-link">
                <BlogListItem
                  title={entry.title}
                  excerpt={entry.excerpt}
                  date={formatDate(entry.date)}
                  readTime={entry.readTime}
                  tags={entry.tags}
                />
              </Link>
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
