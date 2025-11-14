const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "StartupHub",
      period: "2024 - present",
      description:
        "Developed and maintained full-stack web applications from concept to production.",
      highlights: ["MERN Stack", "Python", "PostgreSQL", "DevOps"],
    },
    {
      id: 2,
      title: "eMobilis Training Program",
      company: "eMobilis",
      period: "2023 - Present",
      description:
        "Developing custom web solutions for startups and established businesses.",
      highlights: [
        "Full Stack",
        "Client Management",
        "Problem Solving",
        "Innovation",
      ],
    },
    {
      id: 3,
      title: "Attaché Developer",
      company: "Teach2Give",
      period: "May 2025 - August 2025",
      description:
        "Built responsive websites and web applications during my attachment period.",
      highlights: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "CSS",
        "Material-UI",
        "Node.js",
        "Express",
        "REST APIs",
        "Docker",
      ],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Experience</h2>
      </div>
      <p className="section-subtitle">
        My professional journey building amazing products and growing as a
        developer.
      </p>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            style={{
              marginBottom: "2rem",
              paddingLeft: "2rem",
              position: "relative",
            }}
          >
            {index !== experiences.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "2rem",
                  width: "2px",
                  height: "calc(100% + 1rem)",
                  background:
                    "linear-gradient(180deg, rgba(14, 165, 233, 0.3), rgba(168, 85, 247, 0.3))",
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                left: "-8px",
                top: "4px",
                width: "16px",
                height: "16px",
                background: "linear-gradient(135deg, #0ea5e9, #a855f7)",
                borderRadius: "50%",
                border: "3px solid #0f172a",
              }}
            />
            <div className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "0.5rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.25rem 0",
                      fontSize: "1.125rem",
                      fontWeight: "700",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "0.875rem",
                      color: "#a855f7",
                      fontWeight: "600",
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "#cbd5e1",
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <p
                style={{
                  margin: "1rem 0",
                  color: "#cbd5e1",
                  fontSize: "0.9375rem",
                }}
              >
                {exp.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {exp.highlights.map((highlight) => (
                  <span key={highlight} className="tech-tag">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
