import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function BlogCard({ post, index }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        {/* Image */}
        {post.image && (
          <div className="aspect-video overflow-hidden rounded-xl mb-4 bg-placeholder border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-muted mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="w-1 h-1 rounded-full bg-muted" />
          <span>{post.readTime} min de lectura</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read more */}
        <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent">
          Leer más
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </Link>
    </motion.article>
  )
}

