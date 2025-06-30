import React from 'react';
import { useTheme } from './ThemeContext';
import { AiFillFilePdf, AiFillFileWord } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CV_FILES = [
  { label: 'Download PDF', href: '/Resume.pdf', type: 'pdf', icon: <AiFillFilePdf style={{ fontSize: '1.7em', marginRight: '0.5em', color: '#fff' }} aria-label="PDF file" /> },
  { label: 'Download DOCX', href: '/cv-vijay-chavare.docx', type: 'docx', icon: <AiFillFileWord style={{ fontSize: '1.7em', marginRight: '0.5em', color: '#fff' }} aria-label="Word file" /> },
];

export default function Modal({ isOpen, onClose }: ModalProps) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className={`modal-backdrop ${theme}`} onClick={onClose}>
      <div className={`modal-content ${theme}`} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Download CV</h2>
        <div className="modal-subtitle">Choose your preferred format to download my latest CV.</div>
        <div className="modal-actions">
          {CV_FILES.map(file => (
            <a
              key={file.type}
              href={file.href}
              download
              className="modal-download-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5em', fontSize: '1.08rem', fontWeight: 600, justifyContent: 'center' }}
            >
              {file.icon}
              {file.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
// Add styles for .modal-backdrop, .modal-content, .modal-close, .modal-download-btn for both themes in your CSS. 