import { notFound } from 'next/navigation';
import Link from 'next/link';
import FloatingButtons from '@/components/FloatingButtons';

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

interface KeyFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function getKeyFeatures(slug: string): KeyFeature[] {
  switch (slug) {
    case "vendor-contract-management":
      return [
        {
          title: "Contract Creation",
          description: "Create and update various types of contracts with vendors across different organizational levels.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Review Workflows",
          description: "Enable vendors to review, approve, or reject contracts with seamless collaboration.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        },
        {
          title: "End-to-End Process",
          description: "Manage complete contract lifecycle from creation to execution and monitoring.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        }
      ];
    case "genflix-ott-platform":
      return [
        {
          title: "Reusable Components",
          description: "Developed modular, reusable UI components for consistent user experience.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10" />
            </svg>
          )
        },
        {
          title: "Unit Testing",
          description: "Comprehensive unit testing and code review processes to ensure high UI quality.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        {
          title: "Responsive Design",
          description: "Enhanced UI responsiveness for optimal user experience across all devices.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          )
        }
      ];
    case "vendor-portal":
      return [
        {
          title: "Vendor Management",
          description: "Comprehensive vendor relationship management with contract tracking and communication.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: "Invoice Management",
          description: "Complete invoice handling with payment tracking, reporting, and dispute resolution.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Product Management",
          description: "Inventory management, product categorization, and sales analytics for Petco products.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          )
        }
      ];
    case "student-web-application":
      return [
        {
          title: "Math Worksheets",
          description: "Interactive mathematical worksheets for problem-solving with instant feedback.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          title: "Tutor Assistance",
          description: "Direct access to dedicated tutors for real-time problem-solving assistance.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )
        },
        {
          title: "Digital Scribble Pad",
          description: "Integrated digital workspace for problem-solving and note-taking.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          )
        },
        {
          title: "Zoom Integration",
          description: "One-on-one sessions between teachers and students through integrated Zoom app.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
            </svg>
          )
        }
      ];
    case "teacher-web-app":
      return [
        {
          title: "Remote Assessment",
          description: "Web application for teachers to assess and grade student worksheets remotely.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Student Feedback",
          description: "Provide answers and feedback to student questions, improving efficiency.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )
        },
        {
          title: "Accessibility",
          description: "Enhanced accessibility for remote teaching and student support.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        }
      ];
    case "11-plus-exam-preparation-platform":
      return [
        {
          title: "Practice Tests",
          description: "Topic-focused practice tests with instant feedback for targeted learning.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          )
        },
        {
          title: "Mock Exams",
          description: "Online and in-person mock exams simulating real exam conditions.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        {
          title: "Performance Analytics",
          description: "Dynamic dashboards with rankings, scores, and detailed breakdowns by subject.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
        {
          title: "Review Log",
          description: "Track and analyze user mistakes for targeted improvement strategies.",
          icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          )
        }
      ];
    default:
      return [];
  }
}

// Define projects data here since we need it for generateStaticParams
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
    animationDelay: '0.4s',
    duration: "12 Months"
  }
];

// Required for static export - generates all possible paths at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailsPageProps {
  params: { slug: string };
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="section">
      <div className="container">
        <div className="project-details-header">
          <Link href="/projects" className="back-button">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <div className="project-title-section">
            <div className="project-icon" style={{ fontSize: 48 }}>{project.icon}</div>
            <div className="project-title-info">
              <h1>{project.title}</h1>
              <div className="project-duration">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{project.duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="project-details-content">
          <div className="project-description-section">
            <h3>Project Overview</h3>
            <ul className="project-details-description">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="key-features-section">
            <h3>Key Features</h3>
            <div className="key-features-grid">
              {getKeyFeatures(project.slug).map((feature, index) => (
                <div key={index} className="key-feature-card">
                  <div className="key-feature-icon">
                    {feature.icon}
                  </div>
                  <div className="key-feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="tech-stack-section">
            <h3>Tech Stack</h3>
            <div className="tech-stack-tags">
              {project.techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-actions">
            <a href={
              project.slug === "vendor-contract-management" ? "https://d3kpd4nlxuq3hc.cloudfront.net/" :
              project.slug === "genflix-ott-platform" ? "https://genflix.co.id/" :
              project.slug === "vendor-portal" ? "https://oneview.petco.com/" :
              project.slug === "11-plus-exam-preparation-platform" ? "https://11plusatease.co.uk/" :
              project.slug === "student-web-application" ? "https://grow.hellothinkster.com/#/login" :
              project.slug === "teacher-web-app" ? "https://tutor-sandbox.hellothinkster.com/login" :
              "#"
            } className="project-link primary" target="_blank" rel="noopener noreferrer">
              <span>Live Demo</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#" className="project-link secondary">
              <span>View Code</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <FloatingButtons />
    </section>
  );
} 