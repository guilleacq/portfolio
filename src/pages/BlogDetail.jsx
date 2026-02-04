import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogEntries } from '../content/blog';

/**
 * BlogDetail page component - displays a single blog post
 */
const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this might be a fetch call to a markdown file or API
    const foundPost = blogEntries.find((p) => p.slug === slug);
    setPost(foundPost);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="container">
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-detail-error">
        <div className="container">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="error-content">
            <h1>Post not found</h1>
            <p>The article you're looking for doesn't exist or has been moved.</p>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="blog-detail">
      <div className="container">
        <header className="blog-detail-header">
          <Link to="/blog" className="back-link">← Back to Blog</Link>

          <h1 className="blog-detail-title">{post.title}</h1>

          <div className="project-meta-info">
            <div className="meta-item">
              <span className="meta-label">Published</span>
              <span className="meta-value">{formatDate(post.date)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Read Time</span>
              <span className="meta-value">{post.readTime}</span>
            </div>
          </div>

          <div className="project-detail-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="project-detail-divider"></div>

        <div className="blog-detail-content">
          <ReactMarkdown
            components={{
              // Custom components for markdown elements to match the design
              h1: ({ node, ...props }) => <h1 className="md-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="md-h2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="md-h3" {...props} />,
              p: ({ node, ...props }) => <p className="md-p" {...props} />,
              ul: ({ node, ...props }) => <ul className="md-ul" {...props} />,
              li: ({ node, ...props }) => <li className="md-li" {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote className="md-blockquote" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className="md-img" {...props} alt={props.alt || ''} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="blog-detail-footer">
          <div className="share-section">
            <p>Thanks for reading!</p>
            <Link to="/blog" className="back-link-bottom">
              Explore more articles <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogDetail;
