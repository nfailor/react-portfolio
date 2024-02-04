import React from 'react';
import avatar from '../images/Nicklaus_Failor.jpg'; // Import your avatar image

export default function HomeAbout() {
  return (
    <div>
      <div className="bio">
        <img src={avatar} alt="Nicklaus Failor" className="avatar" />
        <p className="bio-text">
          Hello! I am a passionate web developer with experience in building fullstack web applications
          primarily using MERN. I enjoy solving puzzles and figuring out what works best when attempting to create something from nothing. I previously worked in the Anti-Money Laundering field for nine years and now I'm looking toward a new venture in software development. Feel free to explore
          my portfolio and get in touch with me!
        </p>
      </div>
    </div>
  );
}