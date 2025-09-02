// src/pages/ProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectsPage.css';

const ProjectsPage = ({ title, projects }) => {
  return (
    <div className="projects-page container">
      <h1 className="page-title">{title}</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
