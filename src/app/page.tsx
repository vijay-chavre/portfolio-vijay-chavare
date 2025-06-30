'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = '/Resume.pdf' // You'll need to add this file to the public folder
    link.download = 'Vijay_Chavare_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div>
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">Vijay Chavare</div>
            <ul className="nav-links">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
              <li>
                <button 
                  onClick={downloadCV}
                  className="nav-download-btn"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-title animate-fade-in-up">
            <h2>About Me</h2>
            <p>Experienced Full-Stack Developer with 8+ years of expertise in modern web technologies</p>
          </div>
          
          <div className="about-grid">
            <div className="about-text animate-fade-in-left">
              <p>
                I&apos;m a seasoned Web Application Developer with over 8 years of experience 
                in JavaScript Fullstack Development. My expertise spans the entire development 
                stack, from creating responsive user interfaces with React.js and Next.js to 
                building robust backend solutions with Node.js and AWS services.
              </p>
              <p>
                I specialize in React.js ecosystem including Redux, React Query, and modern 
                JavaScript (ES6+). My backend experience includes Node.js, Express.js, and 
                database design with both SQL and NoSQL solutions including MongoDB and MySQL.
              </p>
              <p>
                I have deep understanding of AWS Serverless Architecture and extensive experience 
                with AWS services such as S3, Lambda, API Gateway, Cognito, and Amplify. I&apos;m 
                also experienced in React Native cross-platform development with authentication 
                via Facebook and Google.
              </p>
              <p>
                Throughout my career, I&apos;ve successfully delivered scalable and efficient 
                full-stack applications, prioritizing user experience while ensuring robust 
                security measures and following Software Development Lifecycle best practices.
              </p>
            </div>
            
            <div className="skills-grid animate-fade-in-right">
              <div className="skill-card">
                <h3>Frontend Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">JavaScript (ES6)</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Redux</span>
                  <span className="skill-tag">React Query</span>
                  <span className="skill-tag">React Hook Form</span>
                </div>
              </div>
              
              <div className="skill-card">
                <h3>UI Libraries & Styling</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Material UI</span>
                  <span className="skill-tag">AntD</span>
                  <span className="skill-tag">Bootstrap</span>
                  <span className="skill-tag">Tailwind CSS</span>
                  <span className="skill-tag">SASS</span>
                  <span className="skill-tag">TanStack Table</span>
                </div>
              </div>
              
              <div className="skill-card">
                <h3>Backend & Database</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">JWT</span>
                  <span className="skill-tag">Passport.js</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">CouchDB</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Django REST API</span>
                </div>
              </div>
              
              <div className="skill-card">
                <h3>AWS Services & Testing</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS Lambda</span>
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">AWS Cognito</span>
                  <span className="skill-tag">AWS API Gateway</span>
                  <span className="skill-tag">AWS Amplify</span>
                  <span className="skill-tag">Jest</span>
                  <span className="skill-tag">React Testing Library</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <div className="section-title animate-fade-in-up">
            <h2>Professional Experience</h2>
            <p>My journey in software development and key achievements</p>
          </div>
          
          <div className="experience-grid">
            <div className="experience-card animate-fade-in-up">
              <div className="experience-header">
                <h3>Web Application Developer</h3>
                <span className="company">Systems Plus</span>
                <span className="duration">May 2019 - Present</span>
              </div>
              <ul className="experience-list">
                <li>Expertise in React.js, Redux, Next.js, React-routing, Node.js, Express.js, and MongoDB</li>
                <li>Develops reusable interactive React components for web applications</li>
                <li>Utilizes Redux-Thunk for managing asynchronous API calls</li>
                <li>Implements authentication using AWS Serverless Amplify</li>
                <li>Proficient with AWS Lambda functions, API Gateways, and S3 buckets for hosting static React.js applications</li>
              </ul>
            </div>

            <div className="experience-card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="experience-header">
                <h3>Software Engineer</h3>
                <span className="company">Sigma Infosolutions</span>
                <span className="duration">Jan 2019 - May 2019</span>
              </div>
              <ul className="experience-list">
                <li>Explored React Js, Redux, React-routing, Node js, Express js, Mongo DB</li>
                <li>Primary focus on developing reusable interactive react components</li>
                <li>Explored redux-saga library to handle asynchronous API calls from React js Web app</li>
                <li>Developed REST API to connect react js web app to the backend and Mongo DB as a database</li>
              </ul>
            </div>

            <div className="experience-card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="experience-header">
                <h3>Software Developer</h3>
                <span className="company">Prazas India Pvt.Ltd (Tabtor Math)</span>
                <span className="duration">Mar 2017 - Dec 2018</span>
              </div>
              <ul className="experience-list">
                <li>Full-Stack Developer: Web (React/Redux/Sails.js)</li>
                <li>Built and maintained a dynamic and interactive web app for Tabtor Math using React.js library</li>
                <li>Utilized Redux for efficient state management within the React application</li>
                <li>Implemented features leveraging React&apos;s component-based architecture for maintainability and scalability</li>
                <li>Optimized web app performance with techniques like code-splitting and lazy loading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-title animate-fade-in-up">
            <h2>Featured Projects</h2>
            <p>Showcasing my technical expertise and problem-solving approach</p>
          </div>
          
          <div className="projects-grid">
            <div className="project-card animate-fade-in-up">
              <div className="project-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3>Vendor Contract Management</h3>
              <p>
                A comprehensive web-based application for vendors to manage their contracts efficiently 
                with organizations. Features include contract creation, review, approval/rejection 
                workflows, and end-to-end contract process management.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Material UI</span>
                <span className="skill-tag">Python REST APIs</span>
              </div>
              <div className="project-links">
                <a href="#">
                  <span>Live Demo</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#">
                  <span>Source Code</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="project-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>Genflix OTT Platform</h3>
              <p>
                Developed reusable components for the OTT platform as a UI developer. Conducted 
                unit testing and participated in code review processes to ensure high UI quality. 
                Enhanced the responsiveness of the UI to improve user experience.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">ES6</span>
                <span className="skill-tag">Node.js</span>
              </div>
              <div className="project-links">
                <a href="#">
                  <span>Live Demo</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#">
                  <span>Source Code</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="project-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>Vendor Portal</h3>
              <p>
                Comprehensive vendor management system with features for vendor relationships, 
                invoice management, and product management. Includes contract tracking, payment 
                processing, inventory management, and sales analytics.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">API Gateway</span>
                <span className="skill-tag">MySQL Aurora</span>
                <span className="skill-tag">DynamoDB</span>
              </div>
              <div className="project-links">
                <a href="#">
                  <span>Live Demo</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#">
                  <span>Source Code</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="project-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>Student Web Application</h3>
              <p>
                Interactive educational platform providing mathematical worksheets with dedicated 
                tutor assistance. Features digital scribble pad, activity recording, and integrated 
                Zoom sessions for one-on-one teacher-student interactions.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">SASS</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">AWS S3</span>
                <span className="skill-tag">Zoom Integration</span>
              </div>
              <div className="project-links">
                <a href="#">
                  <span>Live Demo</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#">
                  <span>Source Code</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="project-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3>11 Plus Exam Preparation Platform</h3>
              <p>
                Interactive web platform leveraging Next.js, React.js, Tailwind CSS, and TanStack 
                Query for guided 11 Plus exam preparation. Features topic-focused practice tests, 
                mock exams, performance dashboards, and detailed analytics with review logs.
              </p>
              <div className="skill-tags">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">TanStack Query</span>
                <span className="skill-tag">React Hook Form</span>
                <span className="skill-tag">Performance Analytics</span>
              </div>
              <div className="project-links">
                <a href="#">
                  <span>Live Demo</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#">
                  <span>Source Code</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-title animate-fade-in-up">
            <h2>Let&apos;s Work Together</h2>
            <p>I&apos;m always interested in new opportunities and exciting projects</p>
          </div>
          
          <div className="contact-content animate-fade-in-up">
            <p>
              Whether you have a specific project in mind or just want to connect, 
              I&apos;d love to hear from you. Let&apos;s discuss how we can bring your ideas to life 
              and create something amazing together.
            </p>
            
            <div className="contact-buttons">
              <a href="mailto:chavre.vijay@gmail.com" className="btn btn-primary">
                Send Email
              </a>
              <a href="https://www.linkedin.com/in/vijaychavre123456/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">+91 7666821255</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">chavre.vijay@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">Pune, Maharashtra, India</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/vijaychavre123456/" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
