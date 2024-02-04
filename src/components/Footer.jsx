import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  // Replace the LinkedIn and GitHub profile links with your actual profiles
  const linkedInLink = 'https://www.linkedin.com/in/nicklaus-failor-a42036141/';
  const githubLink = 'https://github.com/nfailor';

  return (
    <footer>
      <div className="social-icons">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p>&copy; 2024 Nicklaus Failor. All rights reserved.</p>
    </footer>
  );
}