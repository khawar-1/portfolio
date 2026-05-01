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
    category: 'Full-stack Platform',
    title: 'Lex Connect',
    titleWords: ['Lex', 'Connect'],
    description: 'A legal marketplace with LiveKit video consultations, Stripe payments, and real-time Socket.io notifications.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format',
    imageAlt: 'Lex Connect legal marketplace',
    link: '#',
  },
  {
    id: 2,
    category: 'AI & LLM',
    title: 'RAG AI Chatbot',
    titleWords: ['RAG', 'AI', 'Chatbot'],
    description: 'Query legal documents using RAG with FAISS vector store, Gemini/Groq, and FastAPI backend.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format',
    imageAlt: 'RAG AI Chatbot interface',
    link: '#',
  },
  {
    id: 3,
    category: 'WebGL Experience',
    title: 'Cinematic Canvas',
    titleWords: ['Cinematic', 'Canvas'],
    description: 'High-performance portfolio with Three.js particle systems and GSAP scroll-driven animations at 60fps.',
    image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=900&q=80&auto=format',
    imageAlt: 'Cinematic Canvas portfolio project',
    link: '#',
  },
  {
    id: 4,
    category: 'Cybersecurity',
    title: 'Secure Chat',
    titleWords: ['Secure', 'Chat'],
    description: 'E2E encrypted chat using Web Crypto API (AES-256, ECDH) ensuring absolute privacy.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80&auto=format',
    imageAlt: 'End-to-End Encrypted Chat',
    link: '#',
  },
];

export const services: Service[] = [
  {
    num: '01',
    title: 'Full-stack Web Development',
    description: 'Building production-grade applications with React, Next.js, and Node.js. Architecting scalable APIs and databases to power high-performance user experiences.',
  },
  {
    num: '02',
    title: 'AI & LLM Integration',
    description: 'Implementing custom AI solutions using LangChain, RAG, and FAISS. Grounding LLMs in private data for accurate, halluncination-free responses.',
  },
  {
    num: '03',
    title: 'Creative Coding & 3D',
    description: 'Crafting immersive 3D web experiences with Three.js and WebGL. Merging physics and animations to create memorable digital narratives.',
  },
  {
    num: '04',
    title: 'Backend Architecture',
    description: 'Designing robust microservices and RESTful APIs with Express and FastAPI. Focusing on security, scalability, and real-time communication.',
  },
  {
    num: '05',
    title: 'UI/UX Engineering',
    description: 'Translating complex designs into pixel-perfect code. Using GSAP and Tailwind CSS to ensure smooth, responsive, and accessible interfaces.',
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    step: 'Step 01',
    title: 'Discover',
    description: 'Deep research into requirements and system architecture. Understanding the user journey and technical constraints from the start.',
  },
  {
    step: 'Step 02',
    title: 'Architect',
    description: 'Designing data models, API schemas, and frontend component structures to ensure long-term maintainability and scalability.',
  },
  {
    step: 'Step 03',
    title: 'Develop',
    description: 'Writing clean, typed code with TypeScript. Implementing real-time features, AI pipelines, and complex animations simultaneously.',
  },
  {
    step: 'Step 04',
    title: 'Deploy',
    description: 'Rigorous testing and performance optimization followed by deployment to AWS or Cloudflare with automated CI/CD pipelines.',
  },
];

export const testimonials: Testimonial[] = [
  {
    text: '"Khawar delivered a complex legal marketplace that exceeded our expectations. The real-time features and payment integration are seamless. A true full-stack professional."',
    author: 'Ather Khan — Client, Lex Connect',
  },
  {
    text: '"The AI chatbot Khawar built is a game-changer. It accurately queries our database without hallucinations. The technical depth he brings is impressive."',
    author: 'Usman Malik — Tech Lead, AI Solutions',
  },
  {
    text: '"Working with Khawar was a breeze. He took vague requirements and turned them into a high-performance web experience. Highly recommended for any serious project."',
    author: 'Zainab Qureshi — Founder, LegalTech Hub',
  },
];

export const skills = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 
  'MongoDB', 'PostgreSQL', 'AWS', 'LangChain', 'FAISS', 'Three.js', 
  'GSAP', 'Tailwind CSS', 'Docker', 'Stripe', 'Git', 'REST APIs'
];

