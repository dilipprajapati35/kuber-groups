// OngoingProjectsPage.js
import React from 'react';
import ProjectsPage from './ProjectsPage';
import { ongoingProjects } from '../data/projectsData';

const OngoingProjectsPage = () => (
  <ProjectsPage title="Our Ongoing Projects" projects={ongoingProjects} />
);

export default OngoingProjectsPage;

