// src/pages/OngoingProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { ongoingProjects } from '../data/projectsData';
import './ProjectsPage.css'; // We'll create this CSS file for both project pages

const OngoingProjectsPage = () => {
  return (
    <div className="projects-page container">
      <h1 className="page-title">Our Ongoing Projects</h1>
      <div className="projects-grid">
        {ongoingProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default OngoingProjectsPage;