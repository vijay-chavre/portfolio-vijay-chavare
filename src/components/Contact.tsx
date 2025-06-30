'use client'

import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

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
          
          <div className="contact-buttons" style={{ marginBottom: '2rem' }}>
            <a
              href="mailto:chavre.vijay@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Vijay%2C%0A%0AI'd%20like%20to%20connect%20with%20you%20regarding..."
              className="btn-icon"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope size={22} />
            </a>
            <a href="https://wa.me/917666821255" className="btn-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <FaWhatsapp size={22} />
            </a>
            <a href="https://www.linkedin.com/in/vijaychavre123456/" className="btn-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin size={22} />
            </a>
          </div>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label"><FaPhoneAlt style={{ marginRight: 8 }} />Phone:</span>
              <span className="contact-value">+91 7666821255</span>
            </div>
            <div className="contact-item">
              <span className="contact-label"><FaEnvelope style={{ marginRight: 8 }} />Email:</span>
              <span className="contact-value">chavre.vijay@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label"><FaMapMarkerAlt style={{ marginRight: 8 }} />Location:</span>
              <span className="contact-value">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 