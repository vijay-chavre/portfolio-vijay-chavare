'use client'

import { useState } from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaPython, FaDatabase, FaTable, FaPalette, FaAws, FaCheckCircle } from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiJavascript, SiMongodb, SiMysql, SiAntdesign, SiTailwindcss, SiExpress, SiAmazonapigateway, SiAmazoncognito, SiAwsamplify, SiPassport, SiDjango, SiMui, SiJest, SiTestinglibrary } from 'react-icons/si'
import { TbBrandCouchdb } from 'react-icons/tb'

const frontendSkills = [
  { icon: <FaReact />, label: 'React.js' },
  { icon: <SiNextdotjs />, label: 'Next.js' },
  { icon: <SiJavascript />, label: 'JavaScript (ES6)' },
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <SiRedux />, label: 'Redux' },
  { icon: <FaReact />, label: 'React Query' },
  { icon: <FaReact />, label: 'React Hook Form' },
]

const uiSkills = [
  { icon: <SiMui />, label: 'Material UI' },
  { icon: <SiAntdesign />, label: 'AntD' },
  { icon: <FaBootstrap />, label: 'Bootstrap' },
  { icon: <SiTailwindcss />, label: 'Tailwind CSS' },
  { icon: <FaSass />, label: 'SASS' },
  { icon: <FaTable />, label: 'TanStack Table' },
]

const backendSkills = [
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express.js' },
  { icon: <SiPassport />, label: 'JWT' },
  { icon: <SiPassport />, label: 'Passport.js' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <SiDjango />, label: 'Django REST API' },
]

const databaseSkills = [
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <TbBrandCouchdb />, label: 'CouchDB' },
]

const awsSkills = [
  { icon: <SiAmazonapigateway />, label: 'AWS API Gateway' },
  { icon: <SiAmazoncognito />, label: 'AWS Cognito' },
  { icon: <SiAwsamplify />, label: 'AWS Amplify' },
  { icon: <FaDatabase />, label: 'AWS Lambda' },
  { icon: <FaDatabase />, label: 'AWS S3' },
]

const testingSkills = [
  { icon: <SiJest />, label: 'Jest' },
  { icon: <SiTestinglibrary />, label: 'React Testing Library' },
]

const skillCategories = [
  {
    id: 'all',
    label: 'All Skills',
    icon: <FaCheckCircle />,
    skills: [...frontendSkills, ...uiSkills, ...backendSkills, ...databaseSkills, ...awsSkills, ...testingSkills],
    isAllTab: true
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <FaReact />,
    skills: frontendSkills,
    isAllTab: false
  },
  {
    id: 'ui',
    label: 'UI & Styling',
    icon: <FaPalette />,
    skills: uiSkills,
    isAllTab: false
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <FaNodeJs />,
    skills: backendSkills,
    isAllTab: false
  },
  {
    id: 'database',
    label: 'Database',
    icon: <FaDatabase />,
    skills: databaseSkills,
    isAllTab: false
  },
  {
    id: 'aws',
    label: 'AWS Services',
    icon: <FaAws />,
    skills: awsSkills,
    isAllTab: false
  },
  {
    id: 'testing',
    label: 'Testing',
    icon: <FaCheckCircle />,
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
    { title: 'Frontend Development', icon: <FaReact />, skills: frontendSkills },
    { title: 'UI Libraries & Styling', icon: <FaPalette />, skills: uiSkills },
    { title: 'Backend Development', icon: <FaNodeJs />, skills: backendSkills },
    { title: 'Database Technologies', icon: <FaDatabase />, skills: databaseSkills },
    { title: 'AWS Cloud Services', icon: <FaAws />, skills: awsSkills },
    { title: 'Testing & Quality', icon: <FaCheckCircle />, skills: testingSkills }
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