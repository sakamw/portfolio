const AboutSection = () => {
  const handleDownloadResume = () => {
    const resumeURL =
      "https://docs.google.com/document/d/1u2YAkzcDBwp2rNty_Q_GCwcAhZSIC0cZ/edit?usp=sharing";
    window.open(resumeURL, "_blank");
  };

  return (
    <section className="section" id="about">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>About Me</h2>
      </div>
      <div className="grid-2" style={{ alignItems: "center" }}>
        <div>
          <p
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.0625rem",
              lineHeight: "1.8",
            }}
          >
            Hi! I'm Isaac, a passionate full-stack developer with a strong
            foundation in modern web technologies. I'm driven by the desire to
            create clean, maintainable code and beautiful user interfaces that
            solve real problems.
          </p>
          <p
            style={{
              marginBottom: "1.5rem",
              color: "var(--text-secondary, #cbd5e1)",
              lineHeight: "1.8",
            }}
          >
            With expertise in React, TypeScript, Python and full-stack
            development, I build scalable applications that deliver exceptional
            user experiences. I'm passionate about clean architecture,
            performance optimization, and staying at the forefront of web
            development trends.
          </p>
          <p
            style={{
              marginBottom: "1.5rem",
              color: "var(--text-secondary, #cbd5e1)",
              lineHeight: "1.8",
            }}
          >
            When I'm not coding, you'll find me contributing to open-source
            projects, writing technical blogs, or exploring the latest web
            technologies. I'm always eager to learn and collaborate with
            talented developers to build something amazing!
          </p>
          <button className="btn btn-primary" onClick={handleDownloadResume}>
            Download Resume →
          </button>
        </div>
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(20, 184, 166, 0.15))",
            borderRadius: "0.75rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                color: "#0ea5e9",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Experience Level
            </h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>Mid-Level</p>
          </div>
          <div>
            <h3
              style={{
                color: "#0ea5e9",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Projects Built
            </h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>25+</p>
          </div>
          <div>
            <h3
              style={{
                color: "#0ea5e9",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Technologies
            </h3>
            <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>15+</p>
          </div>
          <div>
            <h3
              style={{
                color: "#0ea5e9",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              Contact
            </h3>
            <p style={{ fontSize: "0.875rem", fontWeight: "500", margin: 0 }}>
              shanmwangi2020@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
