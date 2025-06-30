'use client'

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaPython, FaDatabase, FaTable } from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiJavascript, SiMongodb, SiMysql, SiAntdesign, SiTailwindcss, SiExpress, SiJest, SiTestinglibrary, SiAmazonapigateway, SiAmazoncognito, SiAwsamplify, SiPassport, SiDjango, SiMui } from 'react-icons/si'
import { TbBrandCouchdb } from 'react-icons/tb'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title animate-fade-in-up">
          <h2>Skills</h2>
          <p>Technical expertise and technologies I work with</p>
        </div>
        
        <div className="skills-grid animate-fade-in-up">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span className="skill-tag"><FaReact /> React.js</span>
              <span className="skill-tag"><SiNextdotjs /> Next.js</span>
              <span className="skill-tag"><SiJavascript /> JavaScript (ES6)</span>
              <span className="skill-tag"><FaHtml5 /> HTML5</span>
              <span className="skill-tag"><FaCss3Alt /> CSS3</span>
              <span className="skill-tag"><SiRedux /> Redux</span>
              <span className="skill-tag"><FaReact /> React Query</span>
              <span className="skill-tag"><FaReact /> React Hook Form</span>
            </div>
          </div>
          
          <div className="skill-card">
            <h3>UI Libraries & Styling</h3>
            <div className="skill-tags">
              <span className="skill-tag"><SiMui /> Material UI</span>
              <span className="skill-tag"><SiAntdesign /> AntD</span>
              <span className="skill-tag"><FaBootstrap /> Bootstrap</span>
              <span className="skill-tag"><SiTailwindcss /> Tailwind CSS</span>
              <span className="skill-tag"><FaSass /> SASS</span>
              <span className="skill-tag"><FaTable /> TanStack Table</span>
            </div>
          </div>
          
          <div className="skill-card">
            <h3>Backend & Database</h3>
            <div className="skill-tags">
              <span className="skill-tag"><FaNodeJs /> Node.js</span>
              <span className="skill-tag"><SiExpress /> Express.js</span>
              <span className="skill-tag"><SiPassport /> JWT</span>
              <span className="skill-tag"><SiPassport /> Passport.js</span>
              <span className="skill-tag"><SiMongodb /> MongoDB</span>
              <span className="skill-tag"><SiMysql /> MySQL</span>
              <span className="skill-tag"><TbBrandCouchdb /> CouchDB</span>
              <span className="skill-tag"><FaPython /> Python</span>
              <span className="skill-tag"><SiDjango /> Django REST API</span>
            </div>
          </div>
          
          <div className="skill-card">
            <h3>AWS Services & Testing</h3>
            <div className="skill-tags">
              <span className="skill-tag"><SiAmazonapigateway /> AWS API Gateway</span>
              <span className="skill-tag"><SiAmazoncognito /> AWS Cognito</span>
              <span className="skill-tag"><SiAwsamplify /> AWS Amplify</span>
              <span className="skill-tag"><FaDatabase /> AWS Lambda</span>
              <span className="skill-tag"><FaDatabase /> AWS S3</span>
              <span className="skill-tag"><SiJest /> Jest</span>
              <span className="skill-tag"><SiTestinglibrary /> React Testing Library</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 