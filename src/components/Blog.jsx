import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import BlogCard from './BlogCard'
import posts from '../content/posts.json'

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Get latest 3 posts
  const latestPosts = posts.slice(0, 3)

  return (
    <section id="blog" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Blog
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Últimos artículos
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Comparto mis aprendizajes, experiencias y reflexiones sobre desarrollo web,
            tecnología y productividad.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

