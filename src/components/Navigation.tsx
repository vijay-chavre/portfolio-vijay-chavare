'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import useModal from './useModal'
import Modal from './Modal'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { isOpen, open, close } = useModal()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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

  const isHomePage = pathname === '/'

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <Link href="/">Vijay Chavare</Link>
            </div>
            
            <ul className="nav-links">
              {isHomePage ? (
                <>
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>Skills</a></li>
                  <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
                </>
              ) : (
                <>
                  <li><Link href="/about">Skills</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </>
              )}
              <li>
                <button 
                  type="button"
                  className="nav-download-btn"
                  onClick={open}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </button>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  )
} 