const About = ({ language }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold">{language === "en" ? "About Me" : "À Propos de Moi"}</h2>
      <p>{language === "en" ? "This is where I describe myself." : "Voici où je me décris."}</p>
    </section>
  );
};

export default About;
