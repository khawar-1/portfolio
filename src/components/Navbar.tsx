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

  return (
    <nav ref={navRef} className="nav">
      <a href="#" className="nav-logo" data-hover>KM.</a>
      <ul className="nav-links">
        <li><a href="#about" data-hover>About</a></li>
        <li><a href="#work" data-hover>Work</a></li>
        <li><a href="#services" data-hover>Services</a></li>
        <li><a href="#contact" data-hover>Contact</a></li>
      </ul>
    </nav>
  );
}
