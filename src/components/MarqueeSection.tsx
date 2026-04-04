import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'none',
    });

    const section = trackRef.current.parentElement;
    section?.addEventListener('mouseenter', () => gsap.to(tween, { timeScale: 0.3, duration: 0.5 }));
    section?.addEventListener('mouseleave', () => gsap.to(tween, { timeScale: 1, duration: 0.5 }));

    return () => { tween.kill(); };
  }, []);

  const text = 'CREATIVE DEVELOPER ✦ UI/UX DESIGN ✦ MOTION DESIGN ✦ 3D EXPERIENCE ✦ BRAND IDENTITY ✦ WEB ANIMATION ✦\u00A0';

  return (
    <section className="marquee-section">
      <div ref={trackRef} className="marquee-track" id="marqueeTrack">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="marquee-text">{text}</span>
        ))}
      </div>
    </section>
  );
}
