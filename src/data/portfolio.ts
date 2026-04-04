export interface Project {
  id: number;
  category: string;
  title: string;
  titleWords: string[];
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export interface Service {
  num: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
}

export const projects: Project[] = [
  {
    id: 1,
    category: 'Web Experience',
    title: 'Nebula Studios',
    titleWords: ['Nebula', 'Studios'],
    description: 'An immersive 3D web experience for a creative agency. WebGL particle morphing, scroll-driven cinematics, and liquid transitions.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80&auto=format',
    imageAlt: 'Nebula project',
    link: '#',
  },
  {
    id: 2,
    category: 'Brand Identity',
    title: 'Aether Collective',
    titleWords: ['Aether', 'Collective'],
    description: 'Complete brand identity and editorial website for a luxury fashion collective. Typography-driven design with cinematic scroll sequences.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80&auto=format',
    imageAlt: 'Aether project',
    link: '#',
  },
  {
    id: 3,
    category: 'Interactive Experience',
    title: 'Synthwave Festival',
    titleWords: ['Synthwave', 'Festival'],
    description: 'A retro-futuristic event platform with WebGL backgrounds, GSAP-powered registration flow, and real-time attendee visualizations.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80&auto=format',
    imageAlt: 'Synthwave project',
    link: '#',
  },
  {
    id: 4,
    category: 'Product Design',
    title: 'Monolith Labs',
    titleWords: ['Monolith', 'Labs'],
    description: 'SaaS product design and development for an AI startup. Dark minimal UI, complex data visualizations, and buttery micro-interactions.',
    image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=900&q=80&auto=format',
    imageAlt: 'Monolith project',
    link: '#',
  },
];

export const services: Service[] = [
  {
    num: '01',
    title: 'Web Design & Development',
    description: 'Pixel-perfect responsive websites built with modern frameworks and technologies. From sleek landing pages to complex web applications, every project is crafted with obsessive attention to detail and performance.',
  },
  {
    num: '02',
    title: 'Motion & GSAP Animation',
    description: 'Cinematic scroll-driven animations and micro-interactions that bring interfaces to life. Leveraging GSAP, Framer Motion, and CSS animations to create experiences that feel inevitable, not forced.',
  },
  {
    num: '03',
    title: '3D Web Experiences',
    description: 'Immersive three-dimensional web experiences using Three.js, WebGL, and R3F. From interactive product configurators to ambient particle systems, pushing the boundaries of browser-based 3D.',
  },
  {
    num: '04',
    title: 'Brand Identity Systems',
    description: 'Comprehensive visual identity systems that communicate brand essence through typography, color, motion, and spatial design. Building cohesive brand experiences across every digital touchpoint.',
  },
  {
    num: '05',
    title: 'Creative Direction',
    description: 'Strategic creative leadership from concept to launch. I guide projects with a singular vision — aligning aesthetics, functionality, and storytelling into a unified, award-worthy experience.',
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 'Step 01',
    title: 'Discover',
    description: 'Deep research into your brand, audience, and goals. I immerse myself in your world to uncover insights that inform every design decision.',
  },
  {
    step: 'Step 02',
    title: 'Design',
    description: 'Wireframes evolve into high-fidelity concepts. Every pixel, every animation curve, every interaction is intentionally crafted in Figma before code begins.',
  },
  {
    step: 'Step 03',
    title: 'Build',
    description: 'Clean, performant code brings the design to life. GSAP animations, WebGL experiences, and responsive engineering — all optimized for 60fps.',
  },
  {
    step: 'Step 04',
    title: 'Launch',
    description: 'Rigorous testing, performance audits, and deployment. Post-launch support ensures your experience continues to perform flawlessly.',
  },
];

export const testimonials: Testimonial[] = [
  {
    text: '"Alex transformed our digital presence into something truly extraordinary. The attention to detail in every animation and interaction is unmatched. Our conversion rate doubled within the first month."',
    author: 'Sarah Chen — CEO, Nebula Studios',
  },
  {
    text: '"Working with Alex felt like collaborating with an artist who happens to code. Every scroll, every hover, every transition tells our brand\'s story. This is the future of web design."',
    author: 'Marcus Reid — Creative Director, Aether Collective',
  },
  {
    text: '"I\'ve worked with dozens of developers. Alex is the only one who made me say \'wow\' at every review. The 3D experiences and motion design elevated our product beyond anything we imagined."',
    author: 'Elena Vasquez — Founder, Monolith Labs',
  },
];

export const skills = [
  'GSAP', 'Three.js', 'React', 'Next.js', 'WebGL', 'TypeScript',
  'Figma', 'Framer Motion', 'Blender', 'Shader Art', 'Creative Coding',
  'UI/UX Design', 'Motion Design', 'Brand Identity',
];
