const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      emoji: "💻",
      skills: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        // "Next.js",
        "Vue.js",
        "SCSS",
      ],
    },
    {
      category: "Backend",
      emoji: "⚙️",
      skills: [
        "Django",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      category: "Tools & DevOps",
      emoji: "🛠️",
      skills: ["Git", "Docker", "GitHub Actions", "Vite", "Webpack"],
    },
    {
      category: "Design",
      emoji: "🎭",
      skills: [
        "Figma",
        "UI/UX",
        "Responsive Design",
        "Accessibility",
        "Animation",
        "Branding",
      ],
    },
    {
      category: "Soft Skills",
      emoji: "🤝",
      skills: [
        "Team Leadership",
        "Communication",
        "Problem Solving",
        "Mentoring",
        "Documentation",
      ],
    },
    {
      category: "Other",
      emoji: "📦",
      skills: ["Testing (Jest)", "WebSocket", "SEO", "Performance", "CI/CD"],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Skills & Expertise</h2>
      </div>
      <p className="section-subtitle">
        A comprehensive overview of my technical and professional capabilities.
      </p>
      <div className="grid-2">
        {skillCategories.map((category) => (
          <div key={category.category} className="skill-card">
            <div className="skill-icon">{category.emoji}</div>
            <h3>{category.category}</h3>
            <p>{category.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
