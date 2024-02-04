import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons library

export default function Project({ project }) {
  const { title, demoLink, repoLink, imageSrc } = project;

  return (
    <div className="project">
      <div className="project-image" style={{ backgroundImage: `url(${imageSrc})` }}>
        <div className="project-overlay">
          <div className="project-links">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}