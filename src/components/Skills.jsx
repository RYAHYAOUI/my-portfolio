const Skills = ({ language }) => {
  return (
    <section className="skills-section">
      <h2>{language === "en" ? "Skills" : "Compétences"}</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS/HTML</li>
        <li>Node.js</li>
        <li>Three.js</li>
        <li>Machine Learning</li>
        {/* Add more skills here */}
      </ul>
    </section>
  );
};

export default Skills;
