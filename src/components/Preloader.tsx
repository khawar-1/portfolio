import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const cutoutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (cutoutRef.current) cutoutRef.current.style.display = 'none';
        onComplete();
      }
    });

    // Wait 3.5 seconds to let the CSS animation play, then fade out and do cutout
    tl.to({}, { duration: 3.5 })
      .to(contentRef.current, { opacity: 0, scale: 0.95, duration: 0.4, ease: 'power2.in' })
      .add(() => {
        if (bgRef.current) bgRef.current.style.display = 'none';
      })
      .to(cutoutRef.current, { width: '120px', height: '120px', duration: 0.4, ease: 'power3.inOut' })
      .to({}, { duration: 0.3 })
      .to(cutoutRef.current, { width: '100vw', duration: 1.0, ease: 'power4.inOut' })
      .to(cutoutRef.current, { height: '100vh', duration: 0.8, ease: 'power4.inOut' });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <>
      <div ref={bgRef} className="preloader-bg" />
      <div ref={cutoutRef} className="preloader-cutout" />
      <div className="preloader">
        <div ref={contentRef} className="loader-wrapper">
          <span className="loader-letter">L</span>
          <span className="loader-letter">o</span>
          <span className="loader-letter">a</span>
          <span className="loader-letter">d</span>
          <span className="loader-letter">i</span>
          <span className="loader-letter">n</span>
          <span className="loader-letter">g</span>
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}
