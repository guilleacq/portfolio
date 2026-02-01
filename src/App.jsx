import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollIndicator from './components/ScrollIndicator';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Footer from './components/Footer';

/**
 * Main App component - handles routing and layout structure
 */
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <ScrollIndicator />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
