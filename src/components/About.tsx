'use client'

import { useState } from 'react'
import {
  SiReact, SiNextdotjs, SiRedux, SiJavascript, SiHtml5, SiCss3, SiMui, SiAntdesign, SiBootstrap, SiTailwindcss, SiSass, SiNodedotjs, SiExpress, SiJsonwebtokens, SiPassport, SiPython, SiDjango, SiMongodb, SiMysql, SiAmazonapigateway, SiAmazoncognito, SiAwsamplify, SiJest, SiTestinglibrary, SiTypescript
} from 'react-icons/si'

const frontendSkills = [
  { icon: <SiReact />, label: 'React.js' },
  { icon: <SiNextdotjs />, label: 'Next.js' },
  { icon: <SiJavascript />, label: 'JavaScript (ES6)' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <SiRedux />, label: 'Redux' },
  { icon: <SiReact />, label: 'React Query' },
  { icon: <SiReact />, label: 'React Hook Form' },
]

const uiSkills = [
  { icon: <SiMui />, label: 'Material UI' },
  { icon: <SiAntdesign />, label: 'AntD' },
  { icon: <SiBootstrap />, label: 'Bootstrap' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
  { icon: <SiSass />, label: 'SASS' },
  { icon: <SiMui />, label: 'TanStack Table' },
]

const backendSkills = [
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express.js' },
  { icon: <SiJsonwebtokens />, label: 'JWT' },
  { icon: <SiPassport />, label: 'Passport.js' },
  { icon: <SiPython />, label: 'Python' },
  { icon: <SiDjango />, label: 'Django REST API' },
]

const databaseSkills = [
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiMongodb />, label: 'CouchDB' },
]

const awsSkills = [
  { icon: <SiAmazonapigateway />, label: 'AWS API Gateway' },
  { icon: <SiAmazoncognito />, label: 'AWS Cognito' },
  { icon: <SiAwsamplify />, label: 'AWS Amplify' },
  { icon: <SiAmazonapigateway />, label: 'AWS Lambda' },
  { icon: <SiAmazonapigateway />, label: 'AWS S3' },
]

const testingSkills = [
  { icon: <SiJest />, label: 'Jest' },
  { icon: <SiTestinglibrary />, label: 'React Testing Library' },
]

const skillCategories = [
  {
    id: 'all',
    label: 'All Skills',
    icon: <SiReact />,
    skills: [...frontendSkills, ...uiSkills, ...backendSkills, ...databaseSkills, ...awsSkills, ...testingSkills],
    isAllTab: true
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <SiReact />,
    skills: frontendSkills,
    isAllTab: false
  },
  {
    id: 'ui',
    label: 'UI & Styling',
    icon: <SiMui />,
    skills: uiSkills,
    isAllTab: false
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <SiNodedotjs />,
    skills: backendSkills,
    isAllTab: false
  },
  {
    id: 'database',
    label: 'Database',
    icon: <SiMongodb />,
    skills: databaseSkills,
    isAllTab: false
  },
  {
    id: 'aws',
    label: 'AWS Services',
    icon: <SiAmazonapigateway />,
    skills: awsSkills,
    isAllTab: false
  },
  {
    id: 'testing',
    label: 'Testing',
    icon: <SiJest />,
    skills: testingSkills,
    isAllTab: false
  }
]

function SkillGrid({ skills }: { skills: { icon: React.ReactNode, label: string }[] }) {
  return (
    <div className="skill-tile-grid">
      {skills.map((skill, idx) => (
        <div className="skill-tile" key={skill.label + idx}>
          <span className="skill-tile-icon">{skill.icon}</span>
          <span className="skill-tile-label">{skill.label}</span>
        </div>
      ))}
    </div>
  )
}

function AllSkillsSections() {
  const sections = [
    { title: 'Frontend Development', icon: <SiReact />, skills: frontendSkills },
    { title: 'UI Libraries & Styling', icon: <SiMui />, skills: uiSkills },
    { title: 'Backend Development', icon: <SiNodedotjs />, skills: backendSkills },
    { title: 'Database Technologies', icon: <SiMongodb />, skills: databaseSkills },
    { title: 'AWS Cloud Services', icon: <SiAmazonapigateway />, skills: awsSkills },
    { title: 'Testing & Quality', icon: <SiJest />, skills: testingSkills }
  ]

  return (
    <div className="all-skills-sections">
      {sections.map((section) => (
        <div key={section.title} className="skill-section">
          <div className="skill-section-header">
            <span className="skill-section-icon">{section.icon}</span>
            <h4>{section.title}</h4>
          </div>
          <SkillGrid skills={section.skills} />
        </div>
      ))}
    </div>
  )
}

export default function About() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title animate-fade-in-up">
          <h2>Skills</h2>
          <p>Technical expertise and technologies I work with</p>
        </div>
        
        <div className="skills-tabs-container animate-fade-in-up">
          <div className="skills-tabs">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`skill-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="skill-tab-icon">{category.icon}</span>
                <span className="skill-tab-label">{category.label}</span>
              </button>
            ))}
          </div>
          
          <div className="skills-content">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`skill-content ${activeTab === category.id ? 'active' : ''}`}
              >
                <div className="skill-card">
                  <div className="skill-card-header">
                    {category.icon}
                    <h3>{category.label}</h3>
                  </div>
                  {category.isAllTab ? (
                    <AllSkillsSections />
                  ) : (
                    <SkillGrid skills={category.skills} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 