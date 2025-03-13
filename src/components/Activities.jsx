const Activities = ({ language }) => {
    return (
      <section className="activities-section">
        <h2>{language === "en" ? "Extracurricular Activities" : "Activités Extracurriculaires"}</h2>
        <ul>
          <li>{language === "en" ? "Football Team Captain" : "Capitaine de l'équipe de football"}</li>
          <li>{language === "en" ? "Volunteering at local charity events" : "Bénévolat lors d'événements de charité locaux"}</li>
          {/* Add more activities here */}
        </ul>
      </section>
    );
  };
  
  export default Activities;
  