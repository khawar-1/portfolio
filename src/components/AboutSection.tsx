import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../data/portfolio';

export default function AboutSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    // About quote split
    if (quoteRef.current) {
      const text = quoteRef.current.textContent?.trim() || '';
      const words = text.split(' ');
      quoteRef.current.innerHTML = words
        .map(w => `<span style="display:inline-block;overflow:hidden;vertical-align:top;margin-right:0.3em;"><span style="display:inline-block;transform:translateY(110%)">${w}</span></span>`)
        .join('');
      const spans = quoteRef.current.querySelectorAll('span span');
      ScrollTrigger.create({
        trigger: quoteRef.current,
        start: 'top 80%',
        onEnter: () => gsap.to(spans, { y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.04 }),
        onLeaveBack: () => gsap.set(spans, { y: '110%' }),
      });
    }

    // Horizontal scroll (desktop only)
    if (!isMobile && trackRef.current) {
      const track = trackRef.current;
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '.about',
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    }

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
      gsap.set(pill, { opacity: 0, x: (Math.random() - 0.5) * 60, y: 40 });
      ScrollTrigger.create({
        trigger: pill,
        start: 'top 90%',
        onEnter: () => gsap.to(pill, { opacity: 1, x: 0, y: 0, duration: 0.6, delay: i * 0.05, ease: 'back.out(1.7)' }),
        onLeaveBack: () => gsap.set(pill, { opacity: 0, x: (Math.random() - 0.5) * 60, y: 40 }),
      });
    });
  }, []);

  return (
    <section className="about" id="about">
      <div ref={trackRef} className="about-track" id="aboutTrack">
        <div className="about-slide">
          <div ref={quoteRef} className="about-quote" id="aboutQuote">
            I don't build websites. I craft experiences that leave lasting impressions.
          </div>
        </div>
        <div className="about-slide">
          <div className="about-bio-wrap">
            <div className="about-portrait">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format" alt="Alex Mercer portrait" />
            </div>
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
        </div>
        <div className="about-slide skills-slide">
          {skills.map((skill) => (
            <div key={skill} className="skill-pill">{skill}</div>
          ))}
        </div>
      </div>
      <div className="section-number">02 — ABOUT</div>
    </section>
  );
}
