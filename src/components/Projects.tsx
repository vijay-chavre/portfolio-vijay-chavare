'use client'

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  animationDelay?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vendor Contract Management",
    description: "Comprehensive web application for vendors to manage contracts with organizations. Features contract creation, review workflows, and end-to-end process management.",
    techStack: ["Next.js", "React.js", "Redux", "Material UI", "Python REST APIs"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Genflix OTT Platform",
    description: "Developed reusable components for OTT platform with unit testing and code review processes. Enhanced UI responsiveness for better user experience.",
    techStack: ["Next.js", "React.js", "JavaScript", "ES6", "Node.js"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    animationDelay: '0.1s'
  },
  {
    id: 3,
    title: "Vendor Portal",
    description: "Vendor management system with invoice management, product management, contract tracking, payment processing, and sales analytics.",
    techStack: ["React.js", "Redux", "AWS Lambda", "API Gateway", "MySQL Aurora", "DynamoDB"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    animationDelay: '0.2s'
  },
  {
    id: 4,
    title: "Student Web Application",
    description: "Interactive educational platform with mathematical worksheets, tutor assistance, digital scribble pad, and integrated Zoom sessions.",
    techStack: ["React.js", "Redux", "SASS", "Express.js", "AWS S3", "Zoom Integration"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    animationDelay: '0.3s'
  },
  {
    id: 5,
    title: "11 Plus Exam Preparation Platform",
    description: "Interactive web platform for guided 11 Plus exam preparation with practice tests, mock exams, performance dashboards, and detailed analytics.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "TanStack Query", "React Hook Form", "Performance Analytics"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    animationDelay: '0.4s'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title animate-fade-in-up">
          <h2>Featured Projects</h2>
          <p>Showcasing my technical expertise and problem-solving approach</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-in-up"
              style={project.animationDelay ? { animationDelay: project.animationDelay } : undefined}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack-section">
                <h4>Tech Stack</h4>
                <div className="tech-stack-tags">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href="#" className="project-link">
                  <span>Live Demo</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#" className="project-link">
                  <span>View Details</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 