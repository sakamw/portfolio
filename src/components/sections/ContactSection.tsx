const ContactSection = () => {
  const handleChatClick = () => {
    alert(
      "Chat feature coming soon! For now, you can reach me at shanmwangi2020@gmail.com",
    );
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sakamw",
      emoji: "GitHub",
    },
    {
      name: "Email",
      url: "mailto:shanmwangi2020@gmail.com",
      emoji: "Email",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/isak-me",
      emoji: "LinkedIn",
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <div className="accent-line"></div>
        <h2>Get In Touch</h2>
      </div>
      <p className="section-subtitle">
        I'd love to hear from you! Whether you have a project in mind or just
        want to chat about tech.
      </p>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div
          className="card"
          style={{
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(20, 184, 166, 0.1))",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Let's Work Together
          </h3>
          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "2rem",
              lineHeight: "1.8",
            }}
          >
            Feel free to reach out for collaboration opportunities or just a
            friendly hello!
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="mailto:shanmwangi2020@gmail.com"
              className="btn btn-primary"
            >
              📧 Send Email
            </a>
            <button className="btn btn-outline" onClick={handleChatClick}>
              💬 Start Chat
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(148, 163, 184, 0.1)",
            }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0ea5e9",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#a855f7")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#0ea5e9")
                }
              >
                {link.name} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
