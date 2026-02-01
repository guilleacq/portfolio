/**
 * Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p className="footer-text">
          © {currentYear} Guillermo Acquistapace — Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
