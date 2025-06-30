'use client'

export default function About() {
  return (
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
  )
} 