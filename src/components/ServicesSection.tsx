import { useEffect } from 'react';
import gsap from 'gsap';
import { services } from '../data/portfolio';

export default function ServicesSection() {
  useEffect(() => {
    const serviceCards = document.querySelectorAll('[data-service]');
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        serviceCards.forEach(c => {
          c.classList.remove('active');
          gsap.to(c.querySelector('.service-body'), { height: 0, duration: 0.5, ease: 'power3.inOut' });
        });
        if (!isActive) {
          card.classList.add('active');
          gsap.to(card.querySelector('.service-body'), { height: 'auto', duration: 0.5, ease: 'power3.inOut' });
        }
      });
    });
  }, []);

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="label" style={{ marginBottom: '1rem' }}>What I Do</div>
        <h2>Services &amp; Expertise</h2>
      </div>
      {services.map((service) => (
        <div key={service.num} className="service-card" data-service>
          <div className="service-card-bg" />
          <div className="service-header">
            <span className="service-num">{service.num}</span>
            <span className="service-title font-display">{service.title}</span>
            <span className="service-toggle" />
          </div>
          <div className="service-body">
            <div className="service-body-inner">
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="section-number">03 — SERVICES</div>
    </section>
  );
}
