import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'

function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Blog />
    </Layout>
  )
}

function BlogPostPage() {
  return (
    <Layout>
      <BlogPost />
    </Layout>
  )
}

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App
