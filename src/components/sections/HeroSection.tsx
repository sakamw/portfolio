const HeroSection = () => {
  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Isaac</h1>
        <p>
          A passionate full-stack developer crafting beautiful, performant web
          experiences. I specialize in React, TypeScript, Python Django, and
          modern web technologies. Let's build something amazing together.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button className="btn btn-primary" onClick={handleViewWork}>
            View My Work →
          </button>
          <button className="btn btn-outline" onClick={handleContact}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
