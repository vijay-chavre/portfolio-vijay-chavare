'use client'

import { useTheme } from './ThemeContext'
import useModal from './useModal'
import Modal from './Modal'

export default function FloatingButtons() {
  const { theme, toggleTheme } = useTheme()
  const { isOpen, open, close } = useModal()

  return (
    <>
      <div className="floating-buttons">
        <button
          type="button"
          className="floating-btn download-btn"
          title="Download CV"
          onClick={open}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>CV</span>
        </button>
        <button 
          onClick={toggleTheme} 
          className="floating-btn theme-btn"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  )
} 