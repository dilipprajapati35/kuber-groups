// src/pages/CompletedProjectsPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { completedProjects } from '../data/projectsData';
import './ProjectsPage.css'; // Using the same CSS as ongoing projects

const CompletedProjectsPage = () => {
  return (
    <div className="projects-page container">
      <h1 className="page-title">Our Completed Projects</h1>
      <div className="projects-grid">
        {completedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CompletedProjectsPage;