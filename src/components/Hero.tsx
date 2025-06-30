'use client'

import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiAmazon, SiRedux, SiJest, SiTailwindcss } from 'react-icons/si';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fade-in-up">
          {/* <h1>Hi, I&apos;m Vijay Rajendra Chavre</h1> */}
          <h1>Web Application Developer</h1>
          <p>
            8+ years building scalable, high-performance web apps using <b>React.js</b>, <b>Next.js</b>, <b>Node.js</b>, and <b>AWS</b>.<br/>
            Passionate about modern JavaScript, TypeScript, cloud-native architectures, REST APIs, CI/CD, and automated testing.
          </p>
          <div className="hero-tech-stack" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', margin: '1.5rem 0' }}>
            <SiReact size={32} title="React.js" />
            <SiNextdotjs size={32} title="Next.js" />
            <SiNodedotjs size={32} title="Node.js" />
            <SiTypescript size={32} title="TypeScript" />
            <SiAmazon size={32} title="AWS" />
            <SiRedux size={32} title="Redux" />
            <SiTailwindcss size={32} title="Tailwind CSS" />
            <SiJest size={32} title="Jest" />
          </div>
          {/* <div className="hero-terminal" style={{
            background: 'rgba(30,34,60,0.92)',
            color: '#fff',
            fontFamily: 'monospace',
            borderRadius: '10px',
            padding: '1rem 1.5rem',
            margin: '0 auto 2rem',
            maxWidth: 420,
            fontSize: '1rem',
            boxShadow: '0 2px 16px rgba(30,64,175,0.10)'
          }}>
            <code>
              {`// TypeScript: Project type for scalable apps
interface Project {
  id: number;
  title: string;
  techStack: string[];
  deployedOn: 'AWS' | 'Vercel';
}

// Next.js API route example
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js API!' });
}`}
            </code>
          </div> */}
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 