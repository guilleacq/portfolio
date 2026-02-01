import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Navigation links configuration
 */
const NAV_ITEMS = [
  { label: 'Home', to: '/#hero', isHash: true },
  { label: 'About', to: '/#about', isHash: true },
  { label: 'Projects', to: '/#projects', isHash: true },
  { label: 'Blog', to: '/#blog', isHash: true },
];

/**
 * Hamburger menu button component
 */
const MenuButton = ({ isOpen, onClick }) => (
  <button
    className={`menu-button ${isOpen ? 'open' : ''}`}
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <span className="menu-line" />
    <span className="menu-line" />
  </button>
);

MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * Navigation link component - handles both hash and regular links
 */
const NavLink = ({ item, onClick, className = '' }) => {
  const LinkComponent = item.isHash ? HashLink : Link;
  const linkProps = item.isHash ? { smooth: true } : {};

  return (
    <li>
      <LinkComponent
        to={item.to}
        className={className}
        onClick={onClick}
        {...linkProps}
      >
        {item.label}
      </LinkComponent>
    </li>
  );
};

NavLink.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    isHash: PropTypes.bool.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

/**
 * Responsive navbar with mobile hamburger menu
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Guillermo Acq
        </Link>

        <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} item={item} onClick={closeMenu} />
          ))}
          <li>
            <HashLink
              smooth
              to="/#contact"
              className="nav-contact"
              onClick={closeMenu}
            >
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Mobile menu overlay */}
        <div
          className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </div>
    </nav>
  );
};

export default Navbar;
