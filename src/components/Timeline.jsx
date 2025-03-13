const Timeline = ({ language }) => {
    return (
      <section className="timeline-section">
        <h2>{language === "en" ? "Education Timeline" : "Chronologie de l'Éducation"}</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>2023 - Present</h4>
            <p>{language === "en" ? "Bachelor's in Mechanical Engineering, UQAC" : "Baccalauréat en Génie Mécanique, UQAC"}</p>
          </div>
          <div className="timeline-item">
            <h4>2019 - 2023</h4>
            <p>{language === "en" ? "High School, Tunis" : "Lycée, Tunis"}</p>
          </div>
          {/* Add more items here */}
        </div>
      </section>
    );
  };
  
  export default Timeline;
  