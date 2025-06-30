'use client'

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

export default function About() {
  return (
    <section id="about" className="section section--fullwidth">
      <div className="container">
        <div className="section-title animate-fade-in-up">
          <h2>Skills</h2>
          <p>Technical expertise and technologies I work with</p>
        </div>
        <div className="skills-grid animate-fade-in-up">
          <div className="skill-card">
            <div className="skill-card-header"><FaReact className="skill-card-header-icon" /><h3>Frontend Development</h3></div>
            <SkillGrid skills={frontendSkills} />
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><FaPalette className="skill-card-header-icon" /><h3>UI Libraries & Styling</h3></div>
            <SkillGrid skills={uiSkills} />
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><FaCheckCircle className="skill-card-header-icon" /><h3>Testing</h3></div>
            <SkillGrid skills={testingSkills} />
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><FaNodeJs className="skill-card-header-icon" /><h3>Backend</h3></div>
            <SkillGrid skills={backendSkills} />
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><FaDatabase className="skill-card-header-icon" /><h3>Database</h3></div>
            <SkillGrid skills={databaseSkills} />
          </div>
          <div className="skill-card">
            <div className="skill-card-header"><FaAws className="skill-card-header-icon" /><h3>AWS Services</h3></div>
            <SkillGrid skills={awsSkills} />
          </div>
         
        </div>
      </div>
    </section>
  )
} 