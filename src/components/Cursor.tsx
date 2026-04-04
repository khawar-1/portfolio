import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorLabel = labelRef.current;
    if (!cursor || !cursorLabel) return;

    const xTo = gsap.quickTo(cursor, 'left', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'top', { duration: 0.4, ease: 'power3' });
    const xLabel = gsap.quickTo(cursorLabel, 'left', { duration: 0.35, ease: 'power3' });
    const yLabel = gsap.quickTo(cursorLabel, 'top', { duration: 0.35, ease: 'power3' });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX); yTo(e.clientY);
      xLabel(e.clientX); yLabel(e.clientY);
    };
    window.addEventListener('mousemove', onMove);

    const addHoverListeners = () => {
      document.querySelectorAll('[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
      });
      document.querySelectorAll('[data-hover-view]').forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('expand');
          cursorLabel.textContent = 'VIEW';
          cursorLabel.style.opacity = '1';
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('expand');
          cursorLabel.style.opacity = '0';
        });
      });
    };

    // Run after DOM is fully painted
    setTimeout(addHoverListeners, 200);

    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={labelRef} className="cursor-label" />
    </>
  );
}
