import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineSteps } from '../data/portfolio';

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    // Delay by 1 frame so Lenis initializes first
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.to('#timelineProgress', {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline',
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 0.5,
            invalidateOnRefresh: true,
          }
        });

        document.querySelectorAll('.timeline-step').forEach((step, i) => {
          const node = step.querySelector('.timeline-node') as HTMLElement;
          const content = step.querySelector('.timeline-content') as HTMLElement;
          const xOffset = i % 2 === 0 ? -40 : 40;

          gsap.set(content, { opacity: 0, x: xOffset });
          gsap.set(node, { scale: 0, boxShadow: '0 0 0px rgba(200,169,126,0)' });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: step,
              start: 'top 70%',
              toggleActions: 'play reverse play reverse',
              invalidateOnRefresh: true,
            }
          });

          tl.to(node, { scale: 1, boxShadow: '0 0 20px rgba(200,169,126,0.4)', duration: 0.5, ease: 'back.out(2)' }, 0)
            .to(content, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, 0.2);
        });
      }, sectionRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="process" id="process">
      <div className="process-header">
        <div className="label" style={{ marginBottom: '1rem' }}>How I Work</div>
        <h2>The Process</h2>
      </div>
      <div className="timeline">
        <div className="timeline-line">
          <div className="timeline-line-bg" />
          <div className="timeline-line-progress" id="timelineProgress" />
        </div>
        {timelineSteps.map((step, i) => (
          <div key={i} className="timeline-step">
            <div className="timeline-node" />
            <div className="timeline-content">
              <div className="label" style={{ marginBottom: '0.5rem' }}>{step.step}</div>
              <h3 className="font-display">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="section-number">05 — PROCESS</div>
    </section>
  );
}
