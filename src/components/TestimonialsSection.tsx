import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { testimonials } from '../data/portfolio';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dot');

    const show = (idx: number) => {
      items.forEach((t, i) => {
        if (i === idx) {
          gsap.to(t, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
          t.classList.add('active');
        } else {
          gsap.to(t, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' });
          t.classList.remove('active');
        }
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      setCurrent(idx);
    };

    const interval = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % testimonials.length;
        show(next);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-bg-quote">&ldquo;</div>
      <div className="testimonials-header">
        <div className="label" style={{ marginBottom: '1rem' }}>Kind Words</div>
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-wrap">
        {testimonials.map((t, i) => (
          <div key={i} className={`testimonial-item${i === 0 ? ' active' : ''}`} data-testimonial={i}>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">{t.author}</div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot${i === 0 ? ' active' : ''}`}
            data-dot={i}
            onClick={() => {
              const items = document.querySelectorAll('.testimonial-item');
              const dots = document.querySelectorAll('.testimonial-dot');
              items.forEach((t, j) => {
                if (j === i) { gsap.to(t, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }); t.classList.add('active'); }
                else { gsap.to(t, { opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' }); t.classList.remove('active'); }
              });
              dots.forEach((d, j) => d.classList.toggle('active', j === i));
              setCurrent(i);
            }}
          />
        ))}
      </div>
      <div className="section-number">06 — TESTIMONIALS</div>
    </section>
  );
}
