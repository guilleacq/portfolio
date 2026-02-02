import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollIndicator from './components/ScrollIndicator';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollToTop';

/**
 * Main App component - handles routing and layout structure
 */
function App() {
  return (
    <Router>
      
      <div className="app-wrapper">
        <ScrollToTop />
        <ScrollIndicator />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
