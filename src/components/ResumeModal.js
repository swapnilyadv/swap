import React from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay">
      <div className="resume-modal">
        <div className="resume-modal-header">
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
          <button className="download-button" onClick={onDownload}>
            <FaDownload /> Download PDF
          </button>
        </div>
        <div className="resume-content">
          <iframe
            src={`${process.env.PUBLIC_URL}/Swapnil_Yadav_Resume.pdf`}
            title="Resume"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;