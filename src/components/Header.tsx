'use client'

import Navigation from './Navigation'

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
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
    <header>
      <Navigation />
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
    </header>
  )
} 