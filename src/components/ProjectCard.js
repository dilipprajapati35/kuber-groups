// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // We'll create this CSS file

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.name} className="project-image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p><strong>Location:</strong> {project.location}</p>
        <p><strong>Type:</strong> {project.type}</p>
        <p><strong>Area:</strong> {project.area}</p>
        <p><strong>Details:</strong> {project.details}</p>
        {project.year && <p><strong>Year of Completion:</strong> {project.year}</p>}
        {/* You can add a "View Details" button here if you want individual project pages */}
        <button className="btn-secondary">View Details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
