import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import '../styles/global.css';
import '../styles/sections.css';

import Preloader from '../components/Preloader';
import Cursor from '../components/Cursor';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MarqueeSection from '../components/MarqueeSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useLenis } from '../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const heroAnimRef = useRef<(() => void) | null>(null);

  useLenis();

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
    // Fire hero animations after preloader completes
    if (heroAnimRef.current) heroAnimRef.current();

    // Progress bar
    gsap.to('.progress-bar', {
      width: '100%',
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 }
    });
  }, []);

  const registerHeroAnimation = useCallback((fn: () => void) => {
    heroAnimRef.current = fn;
  }, []);

  return (
    <>
      <div className="grain" />
      <div className="progress-bar" />
      <Cursor />
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <Navbar />
      <main>
        <HeroSection onAnimationReady={registerHeroAnimation} />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
