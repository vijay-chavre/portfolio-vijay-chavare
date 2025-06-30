'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-sm border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-text-primary font-bold text-xl gradient-text">
            Vijay Chavare
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="nav-link"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="nav-link"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="nav-link"
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/projects" className="nav-link">
                  Projects
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <button className="text-text-primary p-2 rounded-lg hover:bg-secondary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 