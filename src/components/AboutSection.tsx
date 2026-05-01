import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  /* ── Orbit rAF ── */
  useEffect(() => {
    const icons = document.querySelectorAll<HTMLElement>('.ac-orbit-icon');
    if (!icons.length) return;

    const RADIUS = 165;
    const DURATION = 25000;
    const startTime = performance.now();
    const offsets = Array.from(icons).map(el =>
      parseFloat(el.dataset.offset || '0') * (Math.PI / 180)
    );
    let rafId: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = (elapsed % DURATION) / DURATION;
      const baseAngle = progress * 2 * Math.PI;
      icons.forEach((icon, i) => {
        const angle = baseAngle + offsets[i];
        icon.style.left = `${Math.cos(angle) * RADIUS}px`;
        icon.style.top = `${Math.sin(angle) * RADIUS}px`;
      });
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ── GSAP ScrollTrigger — mobile only ── */
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const section = sectionRef.current;
    const hook = hookRef.current;
    const story = storyRef.current;
    const tech = techRef.current;
    if (!section || !hook || !story || !tech) return;

    // Track our own ScrollTrigger so we only kill it, not others
    let st: ScrollTrigger | undefined;
    let tl: gsap.core.Timeline | null = null;

    // Delay by 1 frame so Lenis initializes first and ScrollTrigger
    // can properly measure pinned heights
    const rafId = requestAnimationFrame(() => {
      // Story & tech start invisible — CSS also sets this as a fallback
      gsap.set([story, tech], { opacity: 0, y: 40, immediateRender: true });
      gsap.set(hook, { opacity: 1, y: 0, immediateRender: true });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=200%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Store our ScrollTrigger instance for targeted cleanup
      st = tl.scrollTrigger!;

      tl
        // Hook → Story
        .to(hook, { opacity: 0, y: -40, duration: 1 })
        .to(story, { opacity: 1, y: 0, duration: 1 }, '<0.3')
        // Story → Tech
        .to(story, { opacity: 0, y: -40, duration: 1 }, '+=0.8')
        .to(tech, { opacity: 1, y: 0, duration: 1 }, '<0.3');
    });

    return () => {
      cancelAnimationFrame(rafId);
      // Only kill OUR timeline and ScrollTrigger — leave others untouched
      if (tl) tl.kill();
      if (st) st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-cinematic" id="about">

      {/* ── Avatar background ── */}
      <div className="ac-avatar-bg">
        <img src="/about_avatar_bg3.png" alt="Background" className="ac-env-bg" />
        <img src="/about_page_avatar.png" alt="Avatar" className="ac-avatar-img" />
        <div className="ac-overlay" />
      </div>

      {/* ── Nebula ── */}
      <img src="/nebula_behind_reactlogo.png" alt="Nebula" className="ac-nebula" />

      {/* ── Orbit ── */}
      <div className="ac-orbit-wrapper" id="orbitWrapper">
        <div className="ac-orbit-center">
          <div className="ac-react-glow" />
          <img src="/react.png" alt="React" className="ac-center-icon" />
        </div>
        {ORBIT_ICONS.map(icon => (
          <div key={icon.alt} className="ac-orbit-icon" data-offset={icon.offset}>
            <img src={icon.src} alt={icon.alt} />
            <span>{icon.label}</span>
          </div>
        ))}
      </div>

      {/* ── Desktop text layout (hidden on mobile via CSS) ── */}
      <div className="ac-page-content ac-desktop-only">
        <div className="ac-middle-row">
          <div className="ac-left-col">
            <div className="ac-story">
              <h3>The Story</h3>
              <p>
                I am a full-stack developer based in Islamabad, specializing in building
                production-grade web applications. From architecting scalable APIs and databases
                to building high-performance frontends with clean code, I ship real products
                end-to-end. I have integrated AI APIs into full-stack platforms and worked
                directly with clients to manage requirements and delivery.
              </p>
              <div className="ac-stats">
                <div className="ac-stat"><span className="stat-num">10+</span><span className="stat-label">PROJECTS</span></div>
                <div className="ac-stat"><span className="stat-num">1+</span> <span className="stat-label">YEARS</span></div>
                <div className="ac-stat"><span className="stat-num">5+</span> <span className="stat-label">CLIENTS</span></div>
              </div>
            </div>
          </div>
          <div className="ac-right-col">
            <div className="ac-main-quote">
              I don't build websites. I craft<br />
              <em>experiences that leave lasting<br />impressions.</em>
            </div>
          </div>
        </div>
        <div className="ac-tech-bottom">
          <div className="ac-skill-cloud">
            {['REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'PYTHON', 'FASTAPI', 'MONGODB',
              'POSTGRESQL', 'AWS', 'LANGCHAIN', 'FAISS', 'THREE.JS', 'GSAP', 'TAILWIND CSS', 'STRIPE'
            ].map((skill, i) => (
              <span key={skill} className={`ac-skill-tag tag-${i}`}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile scroll panels (hidden on desktop) ── */}
      <div className="ac-mobile-panels">

        {/* Panel 1 — Hook */}
        <div ref={hookRef} className="ac-mobile-panel ac-mobile-hook">
          <div className="ac-main-quote">
            I don't build websites. I craft<br />
            <em>experiences that leave lasting<br />impressions.</em>
          </div>
        </div>

        {/* Panel 2 — Story */}
        <div ref={storyRef} className="ac-mobile-panel ac-mobile-story">
          <h3>The Story</h3>
          <p>
            I am a full-stack developer based in Islamabad, specializing in building
            production-grade web applications. From architecting scalable APIs and
            databases to building high-performance frontends with clean code, I ship
            real products end-to-end.
          </p>
          <div className="ac-stats">
            <div className="ac-stat"><span className="stat-num">10+</span><span className="stat-label">PROJECTS</span></div>
            <div className="ac-stat"><span className="stat-num">1+</span> <span className="stat-label">YEARS</span></div>
            <div className="ac-stat"><span className="stat-num">5+</span> <span className="stat-label">CLIENTS</span></div>
          </div>
        </div>

        {/* Panel 3 — Tech */}
        <div ref={techRef} className="ac-mobile-panel ac-mobile-tech">
          <div className="ac-skill-cloud">
            {['REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'PYTHON', 'FASTAPI', 'MONGODB',
              'POSTGRESQL', 'AWS', 'LANGCHAIN', 'FAISS', 'THREE.JS', 'GSAP', 'TAILWIND CSS', 'STRIPE'
            ].map((skill, i) => (
              <span key={skill} className={`ac-skill-tag tag-${i}`}>{skill}</span>
            ))}
          </div>
        </div>

      </div>

      <div className="section-number">02 — ABOUT</div>
    </section>
  );
}
