import React from 'react';
import './resume.css';
import { handleDownload } from './Utils';
import Profile from "../assets/images/profilee.png";


const Resume = ({Title}) => {
  return (
    <div className="resume-card group">
      <div className="resume-text">
        <span className="resume-title">{Title}</span>
        <p className="resume-role">Frontend Developer</p>
      </div>

      <button onClick={handleDownload} className="resume-button">
        Download CV
        <svg
          className="download-icon"
          height="100"
          width="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" />
        </svg>
      </button>

      {/* Shadow SVG Layers */}
      <svg
  className="resume-shadow shadow-front"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
>
  <defs>
    <clipPath id="profileClip">
      <path
        d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
      />
    </clipPath>
  </defs>

  {/* Image clipped inside */}
  <g transform="scale(1) translate(-2, 2)" clipPath="url(#profileClip)">
    <image
      href={Profile}
      width="68"
      height="68"
      
    />
  </g>

  {/* Now draw the border */}
  
</svg>


    </div>
  );
};

export default Resume;

