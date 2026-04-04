import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const cutoutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counterObj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (cutoutRef.current) cutoutRef.current.style.display = 'none';
        onComplete();
      }
    });

    tl.to(pathRef.current, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' })
      .to(lineRef.current, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.8')
      .to(counterObj, {
        val: 100,
        duration: 1.8,
        ease: 'power1.inOut',
        onUpdate: () => {
          if (counterRef.current) counterRef.current.textContent = String(Math.round(counterObj.val));
        }
      }, '-=1.4')
      .to(contentRef.current, { opacity: 0, scale: 0.95, duration: 0.4, ease: 'power2.in' }, '+=0.2')
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
        <div ref={contentRef} className="preloader-content">
          <svg className="logo-svg" viewBox="0 0 120 120">
            <path ref={pathRef} d="M20,100 L60,20 L100,100 M35,70 L85,70" />
          </svg>
          <div className="preloader-logo font-display">Alex Mercer</div>
          <div ref={counterRef} className="preloader-counter">0</div>
          <div ref={lineRef} className="preloader-line" />
        </div>
      </div>
    </>
  );
}
