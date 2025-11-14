const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Forge-Tee",
      description:
        "A modern TypeScript project showcasing advanced frontend development with contemporary tooling and best practices.",
      emoji: "🔧",
      tech: ["React", "TypeScript", "Shadcn-UI", "Express", "PostgreSQL"],
      link: "https://github.com/sakamw/Forge-Tee",
    },
    {
      id: 2,
      title: "pharmaceutical_MIS",
      description:
        "A comprehensive Medical Information System built with TypeScript for managing pharmaceutical operations efficiently.",
      emoji: "💊",
      tech: ["React", "TypeScript", "Django", "PostgreSQL"],
      link: "https://github.com/sakamw/pharmaceutical_MIS",
    },
    {
      id: 3,
      title: "Notley",
      description:
        "A TypeScript-based note-taking application with elegant UI and powerful features for organizing thoughts and ideas.",
      emoji: "📝",
      tech: ["TypeScript", "React", "Material-UI", "Express", "PostgreSQL"],
      link: "https://github.com/sakamw/Notley",
    },
    {
      id: 4,
      title: "BlogIt",
      description:
        "A dynamic blogging platform built with TypeScript for creating and sharing content with a modern interface.",
      emoji: "✍️",
      tech: ["TypeScript", "React", "Material-UI", "Express", "PostgreSQL"],
      link: "https://github.com/sakamw/BlogIt",
    },
    {
      id: 5,
      title: "zaph-tours--mui",
      description:
        "A tourism booking platform built with TypeScript and Material-UI for seamless travel experience.",
      emoji: "✈️",
      tech: ["TypeScript", "React", "Material-UI"],
      link: "https://github.com/sakamw/zaph-tours--mui",
    },
    {
      id: 6,
      title: "Meal-Finder",
      description:
        "An interactive recipe and meal discovery application built with TypeScript, featuring search and filtering.",
      emoji: "🍽️",
      tech: ["TypeScript", "React", "API"],
      link: "https://github.com/sakamw/Meal-Finder",
    },
    {
      id: 7,
      title: "Advice-API-React",
      description:
        "A React application that fetches and displays random advice using an external API with beautiful UI.",
      emoji: "💡",
      tech: ["React", "JavaScript", "API"],
      link: "https://github.com/sakamw/Advice-API-React",
    },
    {
      id: 8,
      title: "catsApp",
      description:
        "An interactive web application for fetching and displaying facts and images about cats using HTTP requests.",
      emoji: "🐱",
      tech: ["JavaScript", "CSS", "API"],
      link: "https://github.com/sakamw/catsApp",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Featured Projects</h2>
      </div>
      <p className="section-subtitle">
        Here are some of my recent projects that showcase my skills and
        expertise. Check out more on GitHub!
      </p>
      <div className="grid-2">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.emoji}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{ marginTop: "1rem" }}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
