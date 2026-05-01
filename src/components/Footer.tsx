import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
  useEffect(() => {
    gsap.set('.footer-content', { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: '.footer',
      start: 'top 90%',
      onEnter: () => gsap.to('.footer-content', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }),
      onLeaveBack: () => gsap.set('.footer-content', { opacity: 0, y: 30 }),
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-bg-name font-display">Khawar Mohi Ud Din</div>
      <div className="footer-content">
        <div className="footer-copy">&copy; 2024-2025 Khawar Mohi Ud Din. All Rights Reserved.</div>
        <ul className="footer-links">
          <li><a href="#hero" data-hover>Home</a></li>
          <li><a href="#work" data-hover>Work</a></li>
          <li><a href="#about" data-hover>About</a></li>
          <li><a href="#contact" data-hover>Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
