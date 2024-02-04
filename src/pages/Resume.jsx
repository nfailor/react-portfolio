import React from "react";
import resume from "../assets/techResume.pdf";

export default function Resume() {
  // Sample proficiency data
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "RESTful APIs",
    "MySQL",
    "MongoDB/Mongoose",
    "Express.js",
    "React.js",
    "Node.js",
    "jQuery",
    "Model-View-Controller (MVC)",
    "Progressive Web Applications (PWA)",
  ];

  return (
    <div>
      <div className="resume-block">
        <h2>My Resume</h2>
        <p>
          You can download my resume{" "}
          <a
            href={resume}
            className="resume-link"
            target="_blank"
            rel="noopener noreferrer"
            download="techResume.pdf"
          >
            here.
          </a>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, i) => (
            <li key={i}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
