

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  return (
    <>
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="project-image-wrapper">
          <img
            src={project.imageUrl}
            alt={project.name || 'Project image'}
            className="project-image"
          />
          <div className="project-image-overlay" />
        </div>
        <div className="project-info">
          <h3>{project.name}</h3>
          {project.location && <p><strong>Location:</strong> {project.location}</p>}
          {project.type && <p><strong>Type:</strong> {project.type}</p>}
          {project.area && <p><strong>Area:</strong> {project.area}</p>}
          {project.details && <p><strong>Details:</strong> {project.details}</p>}
          {project.year && <p><strong>Year of Completion:</strong> {project.year}</p>}

          <button className="btn-secondary project-view-btn" onClick={() => setShowModal(true)}>
            View Details
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="project-modal-overlay"
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="project-modal"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button className="modal-close" onClick={() => setShowModal(false)}>
                &times;
              </button>
              <img
                src={project.imageUrl}
                alt={project.name || 'Project image'}
                className="project-modal-image"
              />
              <div className="project-modal-info">
                <h2>{project.name}</h2>
                {project.location && <p><strong>Location:</strong> {project.location}</p>}
                {project.type && <p><strong>Type:</strong> {project.type}</p>}
                {project.area && <p><strong>Area:</strong> {project.area}</p>}
                {project.details && <p><strong>Details:</strong> {project.details}</p>}
                {project.year && <p><strong>Year of Completion:</strong> {project.year}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
