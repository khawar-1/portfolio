import { useEffect, useRef, useState, FormEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  // Form State
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID (e.g., 'mvoeqbpl')
      const response = await fetch('https://formspree.io/f/mykozpyj', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset button after 5 seconds
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-aurora" />
      <div className="contact-content">
        <div className="label" style={{ marginBottom: '1rem' }}>Get In Touch</div>
        <h2 ref={headlineRef} className="font-display" id="contactHeadline">Let's Create Something Legendary</h2>
        <a href="mailto:khawarmohiuddin0@gmail.com" className="contact-email" data-hover>khawarmohiuddin0@gmail.com</a>
        <div className="contact-socials">
          <a href="https://github.com/khawar-1" target="_blank" rel="noopener noreferrer" className="social-link" data-magnetic data-hover>GitHub</a>
          <a href="https://linkedin.com/in/khawarmohiuddin00" target="_blank" rel="noopener noreferrer" className="social-link" data-magnetic data-hover>LinkedIn</a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder=" " required />
            <label htmlFor="name">Your Name</label>
            <div className="form-underline" />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder=" " required />
            <label htmlFor="email">Your Email</label>
            <div className="form-underline" />
          </div>
          <div className="form-group full">
            <textarea id="message" name="message" placeholder=" " required />
            <label htmlFor="message">Your Message</label>
            <div className="form-underline" />
          </div>
          <button 
            type="submit" 
            className="btn" 
            data-hover 
            disabled={status === 'submitting'}
          >
            {status === 'idle' && 'Send Message'}
            {status === 'submitting' && 'Sending...'}
            {status === 'success' && 'Message Sent! ✓'}
            {status === 'error' && 'Error. Try Again'}
          </button>
        </form>
      </div>
      <div className="section-number">06 — CONTACT</div>
    </section>
  );
}
