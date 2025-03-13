import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaInfoCircle,
  FaProjectDiagram,
  FaCogs,
  FaDraftingCompass,
  FaMicrochip,
  FaWrench,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaUniversity,
  FaLinkedin
} from "react-icons/fa";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar fixed top-0 w-full bg-transparent text-white p-4">
        <div className="tabs">
          <Link to="home" smooth={true} duration={800} className="cursor-pointer tab-item">
            <FaInfoCircle className="tab-icon" />{" "}
            <span className="tab-text" style={{ marginLeft: "10px" }}>
              {language === "en" ? "About" : "À propos"}
            </span>
          </Link>
          <span className="tab-separator" style={{ alignSelf: "center", margin: "0 12px" }}>
            |
          </span>
          <Link to="projects" smooth={true} duration={800} className="cursor-pointer tab-item">
            <FaProjectDiagram className="tab-icon" />{" "}
            <span className="tab-text" style={{ marginLeft: "10px" }}>
              {language === "en" ? "Projects" : "Projets"}
            </span>
          </Link>
          <span className="tab-separator" style={{ alignSelf: "center", margin: "0 12px" }}>
            |
          </span>
          <Link to="skills" smooth={true} duration={800} className="cursor-pointer tab-item">
            <FaCogs className="tab-icon" />{" "}
            <span className="tab-text" style={{ marginLeft: "10px" }}>
              {language === "en" ? "Skills" : "Compétences"}
            </span>
          </Link>
          <span className="tab-separator" style={{ alignSelf: "center", margin: "0 12px" }}>
            |
          </span>
          <Link to="education" smooth={true} duration={800} className="cursor-pointer tab-item">
            <FaGraduationCap className="tab-icon" />{" "}
            <span className="tab-text" style={{ marginLeft: "10px" }}>
              {language === "en" ? "Education" : "Éducation"}
            </span>
          </Link>
          <span className="tab-separator" style={{ alignSelf: "center", margin: "0 12px" }}>
            |
          </span>
          <Link to="contact" smooth={true} duration={800} className="cursor-pointer tab-item">
            <FaEnvelope className="tab-icon" />{" "}
            <span className="tab-text" style={{ marginLeft: "10px" }}>
              {language === "en" ? "Contact" : "Contact"}
            </span>
          </Link>
        </div>
      </nav>

      {/* Hero Section (About Me) */}
      <div id="home" className="hero-section text-center section">
        <h2 className="text-3xl font-semibold mb-4">
          {language === "en" ? "I'm Ridha Yahyaoui" : "Je suis Ridha Yahyaoui"}
        </h2>
        <p className="about-text">
          {language === "en"
            ? "Mechanical engineering student at UQAC, passionate about technical design and innovation. Strong practical experience in diverse environments and advanced skills in CAD tools, programming, and robotics. Motivated to contribute to challenging, problem-solving-focused technical projects."
            : "Étudiant en génie mécanique à l’UQAC, passionné par la conception technique et l’innovation. Expérience pratique approfondie dans divers environnements et compétences avancées en outils de CAO, programmation et robotique. Motivé à contribuer à des projets techniques axés sur la résolution de problèmes."}
        </p>
        <ul className="about-list" style={{ textAlign: "left", marginLeft: "10%" }}>
          <li>Member of FSAE-UQAC</li>
          <li>Member of the Tunisian Astronomical Society (SAT)</li>
          <li>Recipient of the Quebec Scholarship Program for International Students</li>
          <li>Three-time finalist in the national robotics competition, TUNIROBOTS</li>
        </ul>
      </div>

      <hr className="section-separator" />

      {/* Projects Section */}
      <div id="projects" className="projects-section section">
        <h2>{language === "en" ? "Projects" : "Projets"}</h2>
        {/* CCD Camera Cooling System */}
        <div className="project-item">
          <h3>CCD Camera Cooling System</h3>
          <p>
            A thermal management system designed for CCD cameras to enhance performance by controlling temperature variations.
          </p>
          <img
            src="/images/ccd.png"
            alt="CCD Camera Cooling System"
            style={{ width: "100%", height: "auto", maxWidth: "800px" }}
          />
        </div>
        {/* FSAE Brake Pedal Design */}
        <div className="project-item">
          <h3>FSAE Brake Pedal Design</h3>
          <p>
            A high-performance brake pedal designed for Formula SAE race cars, optimized for strength and lightweight efficiency.
          </p>
          <img
            src="/images/fsaepedal.png"
            alt="FSAE Brake Pedal Design"
            style={{ width: "100%", height: "auto", maxWidth: "800px" }}
          />
        </div>
        {/* Ceramic Block Washing System */}
        <div className="project-item">
          <h3>Ceramic Block Washing System</h3>
          <p>
            A precision washing system for ceramic blocks, designed to ensure thorough and efficient cleaning.
          </p>
          <img
            src="/images/lavage.png"
            alt="Ceramic Block Washing System"
            className="project-image"
            style={{ width: "100%", maxWidth: "800px" }}
          />
        </div>
      </div>

      <hr className="section-separator" />

      {/* Skills Section */}
      <div id="skills" className="skills-section section">
        <h2>{language === "en" ? "Skills" : "Compétences"}</h2>
        <div className="skills-grid">
          <div className="category-container">
            <h3 className="category-title">
              <FaDraftingCompass /> CAD
            </h3>
            <div className="skill-row">
              <span className="skill-box">SolidWorks</span>
              <span className="skill-box">AutoCAD</span>
              <span className="skill-box">CATIA</span>
            </div>
          </div>
          <div className="category-container">
            <h3 className="category-title">
              <FaMicrochip /> PCB & Electronics
            </h3>
            <div className="skill-row">
              <span className="skill-box">Proteus ISIS</span>
              <span className="skill-box">MikroPascal</span>
              <span className="skill-box">Arduino</span>
            </div>
          </div>
          <div className="category-container">
            <h3 className="category-title">
              <FaWrench /> CAM
            </h3>
            <div className="skill-row">
              <span className="skill-box">CNC</span>
              <span className="skill-box">3D Printing</span>
            </div>
          </div>
          <div className="category-container">
            <h3 className="category-title">
              <FaCode /> Programming
            </h3>
            <div className="skill-row">
              <span className="skill-box">MATLAB</span>
              <span className="skill-box">Python</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-separator" />

      {/* Education Section */}
      <div id="education" className="education-section section">
        <h2 style={{ color: "white" }}>{language === "en" ? "Education" : "Éducation"}</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaUniversity />
            </div>
            <div className="timeline-content left">
              <h3 style={{ fontWeight: "bold", color: "#FFD700" }}>
                Université du Québec à Chicoutimi
              </h3>
              <h4 style={{ fontSize: "1rem" }}>Bachelor of Mechanical Engineering</h4>
            </div>
            <div className="timeline-date">2023 - Present</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2021 - 2023</div>
            <div className="timeline-content right">
              <h3 style={{ fontWeight: "bold", color: "#FFD700" }}>IPEIEM, Tunisia</h3>
              <h4 style={{ fontSize: "1rem" }}>Preparatory Cycle for Engineering Studies</h4>
              <p>Focus on Mechanical and Electrical Engineering</p>
            </div>
            <div className="timeline-icon">
              <FaUniversity />
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaUniversity />
            </div>
            <div className="timeline-content left">
              <h3 style={{ fontWeight: "bold", color: "#FFD700" }}>Lycée Hannibal Ariana, Tunisia</h3>
              <h4 style={{ fontSize: "1rem" }}>Baccalaureate in Technology</h4>
              <p>Mechanical Engineering and Electrical Engineering</p>
            </div>
            <div className="timeline-date">2019 - 2021</div>
          </div>
        </div>
      </div>

      <hr className="section-separator" />

      {/* Contact Section */}
      <div id="contact" className="contact-section section">
        <div
          className="linkedin-container"
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "50px" }}
        >
          <a
            href="https://www.linkedin.com/in/ridha-yahyaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              fontSize: "18px",
              backgroundColor: "#0077B5",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "0.3s",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
            }}
          >
            <FaLinkedin className="linkedin-icon" style={{ fontSize: "28px", marginRight: "10px" }} />
            <span className="linkedin-text">{language === "en" ? "Let's Connect!" : "Connectons-nous !"}</span>
          </a>
        </div>
      </div>

      <hr className="section-separator" />

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ridha Yahyaoui. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
