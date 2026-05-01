import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ScrollTrigger.create({
      start: 100,
      onUpdate: (self) => {
        if (navRef.current) {
          navRef.current.classList.toggle('scrolled', self.scroll() > 100);
        }
      }
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className="nav">
      <a href="#" className="nav-logo" data-hover>KM.</a>
      <ul className="nav-links">
        <li><a href="#about" data-hover onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>About</a></li>
        <li><a href="#work" data-hover onClick={(e) => { e.preventDefault(); scrollTo('#work'); }}>Work</a></li>
        <li><a href="#services" data-hover onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>Services</a></li>
        <li><a href="#contact" data-hover onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Contact</a></li>
      </ul>
    </nav>
  );
}
