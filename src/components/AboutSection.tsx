import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolio';

export default function AboutSection() {
  useEffect(() => {
    // Stat counters
    document.querySelectorAll('.stat-number').forEach(el => {
      const htmlEl = el as HTMLElement;
      const target = parseInt(htmlEl.dataset.target || '0');
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power1.out',
            onUpdate: () => { htmlEl.textContent = Math.round(obj.val) + '+'; }
          });
        },
        onLeaveBack: () => { htmlEl.textContent = '0+'; }
      });
    });

    // Skill pills
    document.querySelectorAll('.skill-pill').forEach((pill, i) => {
      gsap.set(pill, { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: pill,
        start: 'top 90%',
        onEnter: () => gsap.to(pill, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.05, ease: 'back.out(1.7)' }),
        onLeaveBack: () => gsap.set(pill, { opacity: 0, y: 30 }),
      });
    });

    // About quote fade up
    ScrollTrigger.create({
      trigger: '.about-quote',
      start: 'top 80%',
      onEnter: () => gsap.to('.about-quote', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }),
      onLeaveBack: () => gsap.set('.about-quote', { opacity: 0, y: 40 }),
    });
    gsap.set('.about-quote', { opacity: 0, y: 40 });

    // Bio text fade up
    ScrollTrigger.create({
      trigger: '.about-bio-text',
      start: 'top 80%',
      onEnter: () => gsap.to('.about-bio-text', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }),
      onLeaveBack: () => gsap.set('.about-bio-text', { opacity: 0, y: 40 }),
    });
    gsap.set('.about-bio-text', { opacity: 0, y: 40 });
  }, []);

  return (
    <section className="about" id="about">

      {/* Top: Quote */}
      <div className="about-quote-wrap">
        <div className="about-quote" id="aboutQuote">
          I don't build websites. I craft experiences that leave lasting impressions.
        </div>
      </div>

      {/* 3-column row */}
      <div className="about-columns">

        {/* LEFT: Story + Stats */}
        <div className="about-col about-col-left">
          <div className="about-bio-text">
            <h3 className="font-display">The Story</h3>
            <p>Based in New York, I'm a creative developer and UI/UX designer with 7+ years of experience pushing the boundaries of what's possible on the web. I combine cinematic aesthetics with cutting-edge technology to create digital experiences that captivate and convert.</p>
            <p>My work has been recognized by Awwwards, FWA, and CSS Design Awards. I partner with forward-thinking brands to transform bold visions into unforgettable realities.</p>
            <div className="about-stats">
              <div className="stat-item"><div className="stat-number" data-target="50">0</div><div className="stat-label">Projects</div></div>
              <div className="stat-item"><div className="stat-number" data-target="7">0</div><div className="stat-label">Years</div></div>
              <div className="stat-item"><div className="stat-number" data-target="30">0</div><div className="stat-label">Clients</div></div>
            </div>
          </div>
        </div>

        {/* CENTER: Empty — avatar goes here */}
        <div className="about-col about-col-center" />

        {/* RIGHT: Skills */}
        <div className="about-col about-col-right">
          <div className="about-skills-wrap">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill">{skill}</div>
            ))}
          </div>
        </div>

      </div>

      <div className="section-number">02 — ABOUT</div>
    </section>
  );
}
