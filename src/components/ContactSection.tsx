import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.textContent?.trim() || '';
      const words = text.split(' ');
      headlineRef.current.innerHTML = words
        .map(w => `<span style="display:inline-block;overflow:hidden;vertical-align:top;margin-right:0.3em;"><span style="display:inline-block;transform:translateY(110%)">${w}</span></span>`)
        .join('');
      const spans = headlineRef.current.querySelectorAll('span span');
      ScrollTrigger.create({
        trigger: headlineRef.current,
        start: 'top 80%',
        onEnter: () => gsap.to(spans, { y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.06 }),
        onLeaveBack: () => gsap.set(spans, { y: '110%' }),
      });
    }

    // Magnetic hover effect on social links
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.addEventListener('mousemove', (e: Event) => {
          const mouseE = e as MouseEvent;
          const rect = (el as HTMLElement).getBoundingClientRect();
          const x = mouseE.clientX - rect.left - rect.width / 2;
          const y = mouseE.clientY - rect.top - rect.height / 2;
          gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
        });
      });
    }
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-aurora" />
      <div className="contact-content">
        <div className="label" style={{ marginBottom: '1rem' }}>Get In Touch</div>
        <h2 ref={headlineRef} className="font-display" id="contactHeadline">Let's Create Something Legendary</h2>
        <a href="mailto:hello@alexmercer.dev" className="contact-email" data-hover>hello@alexmercer.dev</a>
        <div className="contact-socials">
          <a href="#" className="social-link" data-magnetic data-hover>GitHub</a>
          <a href="#" className="social-link" data-magnetic data-hover>LinkedIn</a>
          <a href="#" className="social-link" data-magnetic data-hover>Dribbble</a>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <input type="text" id="name" placeholder=" " required />
            <label htmlFor="name">Your Name</label>
            <div className="form-underline" />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder=" " required />
            <label htmlFor="email">Your Email</label>
            <div className="form-underline" />
          </div>
          <div className="form-group full">
            <textarea id="message" placeholder=" " required />
            <label htmlFor="message">Your Message</label>
            <div className="form-underline" />
          </div>
          <button type="submit" className="btn" data-hover>Send Message</button>
        </form>
      </div>
      <div className="section-number">07 — CONTACT</div>
    </section>
  );
}
