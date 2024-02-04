import React from 'react';
import Project from '../components/Project';
import food from '../images/food.jpg';
import text from '../images/text_editor.jpg';
import tech from '../images/tech.jpeg'
import planner from '../images/planner.jpeg'
import quiz from '../images/quiz.jpg'
import password from '../images/password.jpg'

export default function Portfolio() {
  // Sample data for projects
  const projects = [
    {
      title: 'Flavor Town',
      demoLink: 'https://calm-journey-92388-8076cb9a9428.herokuapp.com/',
      repoLink: 'https://github.com/nfailor/flavor-town',
      imageSrc: food,
    },
    {
      title: 'Tech Blog',
      demoLink: 'https://safe-brook-46248-bca8daceffba.herokuapp.com/',
      repoLink: 'https://github.com/nfailor/tech-blog',
      imageSrc: tech, 
    },
    {
      title: 'PWA Text Editor',
      demoLink: 'https://pwa-text-editor-fb4x.onrender.com',
      repoLink: 'https://github.com/nfailor/PWA-text-editor',
      imageSrc: text, 
    },
    {
      title: 'Daily Planner',
      demoLink: 'https://nfailor.github.io/daily-planner/',
      repoLink: 'https://github.com/nfailor/daily-planner',
      imageSrc: planner, 
    },
    {
      title: 'Quiz Game',
      demoLink: 'https://nfailor.github.io/quiz-game/',
      repoLink: 'https://github.com/nfailor/quiz-game',
      imageSrc: quiz, 
    },
    {
      title: 'Password Generator',
      demoLink: 'https://nfailor.github.io/password-generator/',
      repoLink: 'https://github.com/nfailor/password-generator',
      imageSrc: password, 
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div className="projects">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
}