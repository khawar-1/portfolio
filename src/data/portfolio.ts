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
    category: 'AI Desktop Assistant',
    title: 'Project Furi',
    titleWords: ['Project', 'Furi'],
    description: 'A local-first AI desktop assistant built with Electron, React, and FastAPI. Features a multi-agent planner with 15+ tools (file, terminal, email, calendar, browser), vision-first browser automation via Playwright, full voice control (local Whisper STT + streaming TTS with push-to-talk), ambient screen sensing, a proactive initiative engine, semantic memory with 7-layer contact identity resolution, Google OAuth integration, teachable routines, and 2,100+ automated tests.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format',
    imageAlt: 'Project Furi AI Desktop Assistant',
    link: 'https://github.com/khawar-1/Project-Furi',
  },
  {
    id: 2,
    category: 'AI Voice & Mobile',
    title: 'Voxa AI',
    titleWords: ['Voxa', 'AI'],
    description: 'A mobile audio enhancement app that transcribes, cleans, and grammatically improves voice recordings. Powered by Faster-Whisper, Gemini 2.0, and IndexTTS2 — served via Dockerized FastAPI microservices on GPU infrastructure.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&q=80&auto=format',
    imageAlt: 'Voxa AI audio enhancement app',
    link: 'https://github.com/Usman-Khan49/Voxa-AI',
  },
  {
    id: 3,
    category: 'Full-stack Platform',
    title: 'Lex Connect',
    titleWords: ['Lex', 'Connect'],
    description: 'Full-stack legal marketplace where clients search, book, and consult lawyers — built end-to-end with REST APIs and React frontend. Integrated LiveKit (WebRTC) for live video, Stripe for secure payments, and Socket.io for real-time booking notifications.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format',
    imageAlt: 'Lex Connect legal marketplace',
    link: '#',
  },
  {
    id: 4,
    category: 'AI & LLM',
    title: 'RAG AI Chatbot',
    titleWords: ['RAG', 'AI', 'Chatbot'],
    description: 'Full-stack AI chatbot that queries a custom legal document database via FAISS vector store — grounding every response in real case data instead of hallucinated answers. Backend retrieves semantically relevant chunks fed into Groq with structured context for attorney-grade accuracy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format',
    imageAlt: 'RAG AI Chatbot interface',
    link: 'https://github.com/khawar-1/pak-legal-ragbot',
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
  {
    num: '06',
    title: 'Cloud Architecture & AWS',
    description: 'Deploying scalable, highly available systems on AWS. Designing secure cloud infrastructure with CI/CD pipelines, containerization (Docker), and serverless computing.',
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
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'Electron',
  'MongoDB', 'PostgreSQL', 'SQLite', 'Qdrant', 'AWS', 'LangChain', 'FAISS',
  'Groq', 'Playwright', 'GSAP', 'Tailwind CSS', 'Docker', 'Stripe', 'Git', 'REST APIs'
];

