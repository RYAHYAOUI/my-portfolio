import { useEffect, useState } from "react";

const Hero = ({ language }) => {
  const [text, setText] = useState("");
  const fullText =
    language === "en"
      ? "Mechanical Engineering student at UQAC, passionate about technical design and innovation."
      : "Étudiant en génie mécanique à l’UQAC, passionné par la conception technique et l’innovation.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Adjust speed here

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [fullText]);

  return (
    <section className="hero">
      <h1 className="hero-title">
        {language === "en" ? "Welcome to my portfolio" : "Bienvenue sur mon portfolio"}
      </h1>
      <h2 className="hero-subtitle">{text}</h2>
    </section>
  );
};

export default Hero;
