
// CompletedProjectsPage.js
import React from 'react';
import ProjectsPage from './ProjectsPage';
import { completedProjects } from '../data/projectsData';

const CompletedProjectsPage = () => (
  <ProjectsPage title="Our Completed Projects" projects={completedProjects} />
);

export default CompletedProjectsPage;