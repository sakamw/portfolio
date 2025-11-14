const Header = () => {
  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div
        className="brand"
        onClick={handleBrandClick}
        style={{ cursor: "pointer" }}
      >
        Isaac's ✦ Portfolio
      </div>
      <nav>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
