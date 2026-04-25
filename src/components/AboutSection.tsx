import { useEffect, useRef } from 'react';

const ORBIT_ICONS = [
  { src: '/html.png', alt: 'HTML', label: 'HTML', offset: 0 },
  { src: '/css.png', alt: 'CSS', label: 'CSS', offset: 45 },
  { src: '/typescript.png', alt: 'TypeScript', label: 'TS', offset: 90 },
  { src: '/nodejs.png', alt: 'Node.js', label: 'Node', offset: 135 },
  { src: '/nextjs.png', alt: 'Next.js', label: 'Next.js', offset: 180 },
  { src: '/mongodb.png', alt: 'MongoDB', label: 'MongoDB', offset: 225 },
  { src: '/postgre.png', alt: 'PostgreSQL', label: 'Postgres', offset: 270 },
  { src: '/expressjs.png', alt: 'Express', label: 'Express', offset: 315 },
];

const SKILL_TAGS = ['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'MongoDB'];

export default function AboutSection() {
  useEffect(() => {
    const icons = document.querySelectorAll<HTMLElement>('.ac-orbit-icon');
    if (!icons.length) return;

    const RADIUS = 165;
    const DURATION = 25000;
    const startTime = performance.now();

    const offsets = Array.from(icons).map(el =>
      (parseFloat(el.dataset.offset || '0')) * (Math.PI / 180)
    );

    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = (elapsed % DURATION) / DURATION;
      const baseAngle = progress * 2 * Math.PI;

      icons.forEach((icon, i) => {
        const angle = baseAngle + offsets[i];
        const x = Math.cos(angle) * RADIUS;
        const y = Math.sin(angle) * RADIUS;

        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
      });

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="about-cinematic" id="about">

      {/* ── Full-bleed avatar background ── */}
      <div className="ac-avatar-bg">
        <img
          src="/about_avatar_bg3.png"
          alt="Avatar Background Environment"
          className="ac-env-bg"
        />
        <img
          src="/about_page_avatar.png"
          alt="Avatar"
          className="ac-avatar-img"
        />
        <div className="ac-overlay" />
      </div>

      {/*
        ── Cosmic Nebula ──
        Must be a direct child of .about-cinematic (same stacking context
        as the avatar layers) for mix-blend-mode: screen to work.
        No z-index wrapper that would create an isolated stacking context.
      */}
      <img
        src="/nebula_behind_reactlogo.png"
        alt="Nebula"
        className="ac-nebula"
      />

      {/* ── Orbit system ── */}
      <div className="ac-orbit-wrapper" id="orbitWrapper">

        {/* Center: React logo */}
        <div className="ac-orbit-center">
          <div className="ac-react-glow" />
          <img src="/react.png" alt="React" className="ac-center-icon" />
        </div>

        {/* Orbiting icons — JS sets left/top each frame */}
        {ORBIT_ICONS.map((icon) => (
          <div
            key={icon.alt}
            className="ac-orbit-icon"
            data-offset={icon.offset}
          >
            <img src={icon.src} alt={icon.alt} />
            <span>{icon.label}</span>
          </div>
        ))}
      </div>

      {/* ── Page text ── */}
      <div className="ac-page-content">
        <div className="ac-middle-row">
          <div className="ac-left-col">
            <div className="ac-story">
              <h3>The Story</h3>
              <p>
                Based in New York, I'm a creative developer and UI/UX designer with 7+ years of
                experience pushing the boundaries of what's possible on the web. I combine
                cinematic aesthetics with cutting-edge technology to create digital experiences
                that captivate and convert.
              </p>
              <div className="ac-stats">
                <div className="ac-stat">
                  <span className="stat-num">50+</span>
                  <span className="stat-label">PROJECTS</span>
                </div>
                <div className="ac-stat">
                  <span className="stat-num">7+</span>
                  <span className="stat-label">YEARS</span>
                </div>
                <div className="ac-stat">
                  <span className="stat-num">30+</span>
                  <span className="stat-label">CLIENTS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ac-right-col">
            <div className="ac-main-quote">
              I don't build websites. I craft<br />
              <em>experiences that leave lasting<br />
                impressions.</em>
            </div>
          </div>
        </div>

        <div className="ac-tech-bottom">
          <div className="ac-skill-cloud">
            {['GSAP', 'THREE.JS', 'REACT', 'NEXT.JS', 'WEBGL', 'TYPESCRIPT', 'FIGMA', 'FRAMER MOTION', 'BLENDER', 'SHADER ART', 'CREATIVE CODING', 'UI/UX DESIGN', 'MOTION DESIGN', 'BRAND IDENTITY'].map((skill, i) => (
              <span key={skill} className={`ac-skill-tag tag-${i}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-number">02 — ABOUT</div>
    </section>
  );
}
