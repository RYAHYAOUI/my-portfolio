import React from "react";

const Projects = ({ language }) => {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">{language === "en" ? "Projects" : "Projets"}</h2>

      {/* CCD Camera Cooling System - Placeholder Text */}
      <div className="mt-6">
        <h3 className="text-2xl">{language === "en" ? "CCD Camera Cooling System" : "Système de Refroidissement CCD"}</h3>
        <p className="mt-2">{language === "en" ? "This project involves the cooling system for CCD cameras." : "Ce projet concerne le système de refroidissement pour les caméras CCD."}</p>
      </div>

      {/* FSAE Brake Pedal - Placeholder Text */}
      <div className="mt-6">
        <h3 className="text-2xl">{language === "en" ? "FSAE Brake Pedal" : "Pédale de frein FSAE"}</h3>
        <p className="mt-2">{language === "en" ? "A brake pedal design for FSAE vehicles." : "Conception de la pédale de frein pour les véhicules FSAE."}</p>
      </div>

      {/* Ceramic Block Washing System - Image */}
      <div className="flex items-center mt-6">
        <img src="/assets/ceramic.png" alt="Ceramic Block Washer" className="w-1/2 rounded-lg shadow-md" />
        <p className="ml-6">
          {language === "en"
            ? "Automated washing system for ceramic blocks."
            : "Système automatisé de lavage pour blocs de céramique."}
        </p>
      </div>
    </section>
  );
};

export default Projects;
