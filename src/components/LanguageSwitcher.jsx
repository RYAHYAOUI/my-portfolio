const LanguageSwitcher = ({ currentLang, onChange }) => {
  return (
    <div className="language-switcher">
      <button
        className={currentLang === "en" ? "active" : ""}
        onClick={() => onChange("en")}
      >
        EN
      </button>
      <button
        className={currentLang === "fr" ? "active" : ""}
        onClick={() => onChange("fr")}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
