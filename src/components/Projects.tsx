'use client'

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string[];
  shortDescription: string;
  techStack: string[];
  icon: React.ReactNode;
  animationDelay?: string;
  duration: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "vendor-contract-management",
    title: "Vendor Contract Management",
    description: [
      "Developed a comprehensive web-based application for vendors to manage their contracts efficiently with organizations",
      "Created and updated various types of contracts with vendors, streamlining the process across different organizational levels",
      "Enabled vendors to review, approve, or reject contracts, ensuring seamless collaboration and negotiation",
      "Managed end-to-end contract processes, significantly improving efficiency and transparency in vendor management"
    ],
    shortDescription: "Web-based contract management system for vendors and organizations.",
    techStack: ["Next.js", "React.js", "Redux", "HTML5", "CSS3", "Python-based REST APIs", "Material UI"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    animationDelay: '0.1s',
    duration: "12 Months"
  },
  {
    id: 2,
    slug: "genflix-ott-platform",
    title: "Genflix OTT Platform",
    description: [
      "Developed reusable components for the OTT platform as a UI developer",
      "Conducted unit testing and participated in code review processes to ensure high UI quality",
      "Enhanced the responsiveness of the UI to improve the user experience"
    ],
    shortDescription: "OTT platform with reusable components and enhanced UI responsiveness.",
    techStack: ["Next.js", "React.js", "HTML5", "CSS3", "JavaScript", "ES6", "Node.js"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    animationDelay: '0.1s',
    duration: "12 Months"
  },
  {
    id: 3,
    slug: "vendor-portal",
    title: "Vendor Portal",
    description: [
      "Comprehensive vendor management system with three core modules",
      "Vendor Management - manages relationships with suppliers and vendors, including features for adding new vendors, tracking vendor information, managing contracts, and communicating with vendors",
      "Invoice Management - handles invoices from vendor or customer transactions, with features for creating, sending, and tracking invoices, managing payment statuses, generating reports, and handling invoice disputes",
      "Product Management - manages the products offered by Petco Pvt. Ltd., including functionalities for adding new products, updating product information, managing inventory, categorizing products, and analyzing sales data"
    ],
    shortDescription: "Comprehensive vendor management system with invoice and product management.",
    techStack: ["React.js", "Redux", "HTML5", "CSS3", "JavaScript", "ES6", "Node.js", "API Gateways", "AWS Lambda", "S3", "MySQL Aurora", "DynamoDB"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    animationDelay: '0.2s',
    duration: "36 Months"
  },
  {
    id: 4,
    slug: "student-web-application",
    title: "Student Web Application",
    description: [
      "Interactive educational platform that provides students with mathematical worksheets for solving",
      "Offers access to dedicated tutors who directly assist students in solving math problems on the webpage",
      "Includes a digital scribble pad on the webpage to aid students in problem-solving",
      "Captures and records all actions performed by students on the webpage",
      "Transmits activity data to the assigned tutor for review upon worksheet completion",
      "Tutors review student solutions and provide necessary feedback and improvements",
      "Supports one-on-one sessions between teachers and students through an integrated Zoom app"
    ],
    shortDescription: "Interactive educational platform with math worksheets and tutor assistance.",
    techStack: ["React.js", "Redux", "HTML5", "CSS3", "SASS", "Node.js", "Express.js", "S3", "ES6", "JavaScript"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    animationDelay: '0.3s',
    duration: "24 Months"
  },
  {
    id: 5,
    slug: "teacher-web-app",
    title: "Teacher Web App",
    description: [
      "Developed a web application for teachers to assess and grade student worksheets from the student app",
      "Enabled teachers to remotely review, grade, and provide answers to student questions",
      "Improved efficiency and accessibility for remote teaching and assessment"
    ],
    shortDescription: "Web application for teachers to assess and grade student worksheets remotely.",
    techStack: ["React.js", "Redux", "HTML5", "CSS3", "JavaScript", "ES6", "Node.js", "MySQL", "CouchDB", "AWS S3"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    animationDelay: '0.4s',
    duration: "12 Months"
  },
  {
    id: 6,
    slug: "11-plus-exam-preparation-platform",
    title: "11 Plus Exam Preparation Platform",
    description: [
      "Developed an interactive web platform leveraging Next.js, React.js, Tailwind CSS, and TanStack Query to facilitate guided 11 Plus exam preparation for students",
      "Built responsive interfaces for topic-focused practice tests, providing instant feedback to enhance targeted learning",
      "Integrated online and in-person mock exam modules, simulating real exam conditions to improve student readiness and time management",
      "Implemented dynamic dashboards to generate performance reports including ranking, average scores, and detailed breakdowns by subject, topic, and subtopic",
      "Engineered features to aggregate and display cumulative performance data, enabling students to identify and address weak areas effectively",
      "Designed and implemented a user-friendly review log feature to track and analyze user mistakes, facilitating targeted improvement strategies"
    ],
    shortDescription: "Interactive web platform for 11 Plus exam preparation with practice tests and analytics.",
    techStack: ["Next.js", "React.js", "react-hook-form", "TanStack Query", "TanStack Table", "HTML5", "CSS3", "Tailwind CSS", "Jest", "RTL"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    animationDelay: '0.5s',
    duration: "12 Months"
  }
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const showAll = visibleCount >= projects.length;
  const gridRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (showAll && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setVisibleCount(showAll ? 4 : projects.length);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title animate-fade-in-up">
          <h2>Featured Projects</h2>
          <p>Showcasing my technical expertise and problem-solving approach</p>
        </div>
        
        <div className="projects-grid" ref={gridRef}>
          <AnimatePresence initial={false}>
            {projects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                className="project-card animate-fade-in-up"
                style={project.animationDelay ? { animationDelay: project.animationDelay } : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div className="project-title-info">
                    <h3>{project.title}</h3>
                  </div>
                </div>
                
                <p className="project-description">{project.shortDescription}</p>
                
                <div className="tech-stack-section">
                  <h4>Tech Stack</h4>
                  <div className="tech-stack-tags">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a href={
                    project.slug === "vendor-contract-management" ? "https://d3kpd4nlxuq3hc.cloudfront.net/" :
                    project.slug === "genflix-ott-platform" ? "https://genflix.co.id/" :
                    project.slug === "vendor-portal" ? "https://oneview.petco.com/" :
                    project.slug === "11-plus-exam-preparation-platform" ? "https://11plusatease.co.uk/" :
                    project.slug === "student-web-application" ? "https://grow.hellothinkster.com/#/login" :
                    project.slug === "teacher-web-app" ? "https://tutor-sandbox.hellothinkster.com/login" :
                    "#"
                  } className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href={`/projects/${project.slug}`} className="project-link">
                    <span>View Details</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {projects.length > 4 && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              className="btn btn-secondary"
              onClick={handleToggle}
            >
              {showAll ? 'Show Less' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 