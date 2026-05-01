import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);
    (window as any).lenis = lenis;

    // Global hash link interception
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.hash && link.origin === window.location.origin) {
        const targetEl = document.querySelector(link.hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(link.hash, { duration: 1.5, offset: 0 });
        }
      }
    };
    document.addEventListener('click', handleHashClick);

    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener('click', handleHashClick);
      lenis.destroy();
    };
  }, []);
}
