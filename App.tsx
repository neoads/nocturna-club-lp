
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import ExperienceSection from './components/ExperienceSection';
import BookCarousel from './components/BookCarousel';
import HowItWorks from './components/HowItWorks';
import AudienceSection from './components/AudienceSection';
import PricingSection from './components/PricingSection';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PlatformPreview from './components/PlatformPreview';
import InteractiveChat from './components/InteractiveChat';
import FAQSection from './components/FAQSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-red-800 selection:text-white relative">
      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="reveal">
          <BookCarousel />
        </div>

        <div id="experiencia" className="reveal">
          <PainSection />
        </div>

        <div className="reveal">
          <PlatformPreview />
        </div>

        <div className="reveal">
          <InteractiveChat />
        </div>

        <div className="reveal">
          <ExperienceSection />
        </div>

        <div id="como-funciona" className="reveal">
          <HowItWorks />
        </div>

        <div className="reveal">
          <SocialProof />
        </div>

        <div className="reveal">
          <AudienceSection />
        </div>

        <div id="planos" className="reveal">
          <PricingSection />
        </div>

        <div className="reveal">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
