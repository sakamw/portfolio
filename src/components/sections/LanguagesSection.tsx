const LanguagesSection = () => {
  const programmingLanguages = [
    { id: 1, name: "Python", emoji: "🐍" },
    { id: 2, name: "JavaScript", emoji: "📜" },
    { id: 3, name: "TypeScript", emoji: "🔷" },
    { id: 4, name: "React", emoji: "⚛️" },
    { id: 5, name: "HTML", emoji: "🌐" },
    { id: 6, name: "CSS", emoji: "🎨" },
    { id: 7, name: "Sass/SCSS", emoji: "💅" },
    { id: 8, name: "Material-UI", emoji: "🎭" },
    { id: 9, name: "Django", emoji: "🌿" },
    { id: 10, name: "Node.js", emoji: "🟢" },
    { id: 11, name: "Express", emoji: "⚡" },
    // { id: 12, name: "MongoDB", emoji: "🍃" },
    { id: 13, name: "PostgreSQL", emoji: "🐘" },
    { id: 14, name: "Git", emoji: "🐙" },
    { id: 15, name: "Docker", emoji: "🐳" },
  ];

  return (
    <section className="section" id="languages">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Programming Languages & Tools</h2>
      </div>
      <p className="section-subtitle">
        Technologies and tools I work with regularly.
      </p>
      <div className="languages-carousel">
        <div className="carousel-track">
          {[...programmingLanguages, ...programmingLanguages].map(
            (lang, index) => (
              <div key={index} className="language-badge">
                <span className="badge-emoji">{lang.emoji}</span>
                <span className="badge-name">{lang.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
