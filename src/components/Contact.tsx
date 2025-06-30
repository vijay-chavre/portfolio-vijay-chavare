'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title animate-fade-in-up">
          <h2>Let&apos;s Work Together</h2>
          <p>I&apos;m always interested in new opportunities and exciting projects</p>
        </div>
        
        <div className="contact-content animate-fade-in-up">
          <p>
            Whether you have a specific project in mind or just want to connect, 
            I&apos;d love to hear from you. Let&apos;s discuss how we can bring your ideas to life 
            and create something amazing together.
          </p>
          
          <div className="contact-buttons">
            <a
              href="mailto:chavre.vijay@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Vijay%2C%0A%0AI'd%20like%20to%20connect%20with%20you%20regarding..."
              className="btn btn-primary"
            >
              Send Email
            </a>
            <a href="https://wa.me/917666821255" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ marginRight: 8, fontSize: 18 }} /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/vijaychavre123456/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+91 7666821255</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">chavre.vijay@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">Pune, Maharashtra, India</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/vijaychavre123456/" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://wa.me/917666821255" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 