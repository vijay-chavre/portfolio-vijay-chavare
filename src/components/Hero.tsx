'use client'

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fade-in-up">
          <h1>Hi, I&apos;m Vijay Rajendra Chavre</h1>
          <h2>Web Application Developer (React JS, Next JS, NodeJS REST, AWS services)</h2>
          <p>
            Over 8+ years of professional expertise in JavaScript Fullstack Development, 
            specializing in React JS, Next JS, and modern web technologies. Experienced in 
            building scalable applications with AWS services and comprehensive knowledge 
            of full-stack development.
          </p>
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