import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="noise-overlay" />
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <div className="divider-line" />
        <AboutSection />
        <div className="divider-line" />
        <SkillsSection />
        <div className="divider-line" />
        <ProjectsSection />
        <div className="divider-line" />
        <ExperienceSection />
        <div className="divider-line" />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
