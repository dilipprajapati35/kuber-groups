import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img 
        src={project.imageUrl} 
        alt={project.name || "Project image"} 
        className="project-image" 
      />
      <div className="project-info">
        <h3>{project.name}</h3>
        {project.location && <p><strong>Location:</strong> {project.location}</p>}
        {project.type && <p><strong>Type:</strong> {project.type}</p>}
        {project.area && <p><strong>Area:</strong> {project.area}</p>}
        {project.details && <p><strong>Details:</strong> {project.details}</p>}
        {project.year && <p><strong>Year of Completion:</strong> {project.year}</p>}

        <button className="btn-secondary">View Details</button>
      </div>
    </div>
  );
};

export default ProjectCard;
