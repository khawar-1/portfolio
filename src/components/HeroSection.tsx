import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

interface HeroSectionProps {
  onAnimationReady: (fn: () => void) => void;
}

export default function HeroSection({ onAnimationReady }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll text circular letters
    const scrollWord = 'SCROLL ✦ ';
    const chars = scrollWord.split('');
    if (scrollTextRef.current) {
      scrollTextRef.current.innerHTML = '';
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transform = `rotate(${i * (360 / chars.length)}deg)`;
        scrollTextRef.current!.appendChild(span);
      });
    }

    // Three.js particles
    const canvas = canvasRef.current;
    if (!canvas) return;
    const isMobile = window.innerWidth <= 768;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = isMobile ? 800 : 3000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 15;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xC8A97E, size: 0.02, transparent: true, opacity: 0.6, sizeAttenuation: true });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!isMobile) window.addEventListener('mousemove', onMouseMove);

    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;
      particles.position.x += (mouseX * 0.3 - particles.position.x) * 0.02;
      particles.position.y += (-mouseY * 0.3 - particles.position.y) * 0.02;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Register hero animation trigger
    onAnimationReady(() => {
      gsap.registerPlugin(TextPlugin);
      const heroTl = gsap.timeline();
      heroTl
        .to('.hero-name .word-inner', { y: 0, duration: 1.4, ease: 'power4.out', stagger: 0.08 })
        .to('.hero-label', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=1.0')
        .to('.hero-lines', { width: '40%', duration: 1.2, ease: 'power3.out' }, '-=1.0')
        .to('.hero-ctas', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8')
        .to('.scroll-indicator', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6');

      const taglines = ['Creative Developer', 'UI/UX Designer', 'Visual Storyteller', 'Motion Artist'];
      let tagIdx = 0;
      const cycleTagline = () => {
        gsap.to('.hero-tagline', {
          duration: 1.2,
          text: { value: taglines[tagIdx], delimiter: '' },
          ease: 'none',
          onComplete: () => {
            tagIdx = (tagIdx + 1) % taglines.length;
            gsap.delayedCall(2, cycleTagline);
          }
        });
      };
      gsap.delayedCall(0.5, cycleTagline);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [onAnimationReady]);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} id="hero-canvas" />
      <div className="hero-content">
        <div className="hero-label label">Available for work — 2025</div>
        <h1 className="hero-name">
          <span className="word"><span className="word-inner">Alex</span></span>
          <span className="word"><span className="word-inner">Mercer</span></span>
        </h1>
        <div className="hero-tagline" />
        <div className="hero-ctas">
          <a href="#work" className="btn" data-hover>View Work</a>
          <a href="#contact" className="btn" data-hover>Get In Touch</a>
        </div>
      </div>
      <div className="hero-lines" />
      <div className="scroll-indicator">
        <div className="scroll-text" ref={scrollTextRef} id="scrollText" />
        <div className="scroll-chevron" />
      </div>
      <div className="section-number">01 — HERO</div>
    </section>
  );
}
