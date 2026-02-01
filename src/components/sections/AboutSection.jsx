import SkillsList from '../ui/SkillsList';
import SectionTitle from '../ui/SectionTitle';

/**
 * About section configuration
 */
const ABOUT_CONTENT = {
  paragraphs: [
    "Hey, I'm Guillermo — a Full Stack developer from Montevideo, Uruguay. I got my start doing IT support at ANTEL, where I learned that the best solutions come from actually understanding what people need, not just what they ask for.",
    "That mindset stuck with me. These days I work across the whole stack — React and React Native on the frontend, Node and Python on the backend, and whatever else the project needs. I've also spent a couple years building VR games in Unity, which taught me a lot about performance and user experience.",
    "I'm finishing my Software Engineering degree and just got back from a semester in Genova, Italy. I speak Spanish, English, and Italian fluently — which comes in handy more often than you'd think.",
  ],
  skills: [
    'React & React Native',
    'Node.js & Express',
    'Python & SQL',
    'Unity & C#',
    'Git & Docker',
    'Agile Teams',
  ],
};

/**
 * About section component with bio and skills
 */
const AboutSection = () => {
  const { paragraphs, skills } = ABOUT_CONTENT;

  return (
    <section id="about">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <div className="about-content">
          <div className="about-text">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <SkillsList skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
