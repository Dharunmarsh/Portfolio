import React from 'react';
import './Skillbox.css'; // Include this CSS for the styling below

const Skills = () => {
  return (
    <div className="skillbox">
      <h2 className="text-center text-md font-bold font-poppins">Summary</h2>
      <div className="skill-box">
        <span className="title">Front-End</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Back-End</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="tooltip">30%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">sql&MySql</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">System Design</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
