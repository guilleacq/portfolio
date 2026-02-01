import { HashLink } from 'react-router-hash-link';

/**
 * Hero section configuration
 */
const HERO_CONTENT = {
  title: {
    lines: ['From fixing bugs', 'to building', 'what matters'],
  },
  subtitle:
    "I started in tech support, helping people solve problems one ticket at a time. Now I build the solutions myself — web apps, mobile experiences, and everything in between.",
  cta: {
    text: "Let's Talk",
    href: '#contact',
  },
};

/**
 * Hero section component - main landing area of the page
 */
const HeroSection = () => {
  const { title, subtitle, cta } = HERO_CONTENT;

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {title.lines.map((line, index) => (
              <span key={index}>
                {line}
                {index < title.lines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle">{subtitle}</p>
          <HashLink smooth to={`/${cta.href}`} className="cta-button">
            {cta.text}
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
