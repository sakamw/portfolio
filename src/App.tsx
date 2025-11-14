import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
