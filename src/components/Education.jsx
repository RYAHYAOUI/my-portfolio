const Education = ({ language }) => {
  return (
    <section className="education">
      <h2>{language === "en" ? "Education" : "Éducation"}</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>M.Sc in Vision and Intelligent Machines</h3>
          <p>Université Paris Cité, France (Jan 2025 - Present)</p>
        </div>
        <div className="timeline-item">
          <h3>M.Sc in Information Processing and Complexity of Living Systems</h3>
          <p>National Engineering School of Tunis (ENIT), Tunisia (Sep 2024 - Present)</p>
        </div>
        <div className="timeline-item">
          <h3>Telecommunications Engineering with Minors in Data Science</h3>
          <p>National Engineering School of Tunis (ENIT), Tunisia (Sep 2022 - Present)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
