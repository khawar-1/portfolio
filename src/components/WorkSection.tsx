import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Create context immediately to ensure proper cleanup
    const ctx = gsap.context(() => {
      // Delay internal setup slightly to let Lenis settle
      const timeoutId = setTimeout(() => {
        document.querySelectorAll('.project').forEach(proj => {
          const img = proj.querySelector('.project-image') as HTMLElement;
          const imgEl = img?.querySelector('img') as HTMLElement;
          const titleWords = proj.querySelectorAll('.project-title .word-inner');

          gsap.set(img, { clipPath: 'inset(0 100% 0 0)' });
          gsap.set(imgEl, { scale: 1.1 });
          gsap.set(titleWords, { y: '110%' });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: proj,
              start: 'top 75%',
              toggleActions: 'play reverse play reverse',
              invalidateOnRefresh: true,
            }
          });

          tl.to(img, { clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut' }, 0)
            .to(imgEl, { scale: 1, duration: 1.2, ease: 'power2.out' }, 0.2)
            .to(titleWords, { y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }, 0.3);
        });

        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timeoutId);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="work" id="work">
      <div className="work-header">
        <div className="label" style={{ marginBottom: '1rem' }}>Portfolio</div>
        <h2>Selected Work</h2>
      </div>
      {projects.map((project, index) => (
        <div key={project.id} className="project">
          <div className="project-image" data-hover-view>
            <img src={project.image} alt={project.imageAlt} />
          </div>
          <div className="project-info">
            <div className="label project-category">{project.category}</div>
            <h3 className="project-title">
              {project.titleWords.map((word, w) => (
                <span key={w} className="word"><span className="word-inner">{word}</span></span>
              ))}
            </h3>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} className="project-link" data-hover>View Project →</a>
          </div>
        </div>
      ))}
      <div className="section-number">04 — WORK</div>
    </section>
  );
}
