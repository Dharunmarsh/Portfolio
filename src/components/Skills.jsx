import React from "react";
import { Rating } from "@mui/material";
import { handleDownload } from './Utils';

import {
  FaHtml5, FaJsSquare, FaReact, FaNodeJs, FaGitAlt,
  FaJava, FaDatabase, FaBrain, FaCodeBranch, FaSitemap
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiNextdotjs, SiTypescript
} from "react-icons/si";
import { PiSquaresFourFill } from "react-icons/pi"; // UI/UX
import { RiRobot2Line } from "react-icons/ri"; // AI Tools
import Resume from "./Resume";
import SkillBox from "./SkillBox";
import bgImage from "../assets/images/bg.png";
import useMediaQuery from "@mui/material/useMediaQuery";

// Skills data
const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500 text-[1.2rem] sm:text-2xl lg:text-xl xl:text-2xl" />, rating: 4 },
  { id: 2, name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 4 },
  { id: 3, name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 4 },
  { id: 4, name: "ReactJS", icon: <FaReact className="text-cyan-300 text-[1.2rem] sm:text-2xl lg:text-xl xl:text-2xl" />, rating: 4 },
  { id: 5, name: "UI/UX", icon: <PiSquaresFourFill className="text-pink-400 text-[1.2rem] sm:text-2xl lg:text-xl xl:text-2xl" />, rating: 3.5 },
  { id: 6, name: "Express JS", icon: <FaNodeJs className="text-green-600 text-[1.2rem] sm:text-2xl lg:text-xl xl:text-2xl" />, rating: 3 },
  { id: 7, name: "MongoDB", icon: <SiMongodb className="text-green-400 text-[1.2rem] sm:text-2xl lg:text-xl xl:text-2xl" />, rating: 3 },
  { id: 8, name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 3.5 },
  { id: 9, name: "Java", icon: <FaJava className="text-red-600 text-[1.2rem] sm:text-2xl lg:text-xl xl:text-2xl" />, rating: 3.5 },
  { id: 10, name: "SQL / MySQL", icon: <FaDatabase className="text-blue-400 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 4 },
  { id: 11, name: "Problem Solving", icon: <FaBrain className="text-purple-800 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 3.5 },
  { id: 12, name: "Data Structures", icon: <FaCodeBranch className="text-gray-800 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 3 },
  { id: 13, name: "System Design", icon: <FaSitemap className="text-violet-800 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 3.5 },
  { id: 14, name: "REST API", icon: <FaNodeJs className="text-green-400 text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 2.5 },
  { id: 15, name: "NextJS / TS", icon: <SiNextdotjs className="text-white text-[1.2rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 3.5 },
  { id: 16, name: "AI Tools", icon: <RiRobot2Line className="text-emerald-400 text-[1.4rem] lg:text-xl xl:text-2xl sm:text-2xl" />, rating: 5 },
];

const SkillList = () => {
  const isTablet = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="xl:min-h-[45rem] relative min-h-fit flex flex-col lg:flex-row items-center justify-between  dark-insta -z-10">
      {/* Left Column */}
      <div className="w-full lg:w-[65%] xl:w-1/2 h-auto max-w-3xl md:px-6 md:pt-5 lg:px-4 lg:py-1 text-white pb-10 lg:pb-0">
        <div className="w-full flex items-center font-poppins p-2  pt-5 md:pt-1 lg:pb-0 lg:pt-0 lg:px-4">
          <h1 className="text-3xl lg:text-4xl font-bold neon-text text-center mx-auto lg:-translate-y-3 ">Skills-Set</h1>
          <button
            className="lg:hidden absolute right-2.5 text-[0.6rem] md:text-lg md:right-6 font-semibold px-2 py-1.5 md:p-2 border-2 text-pink-500 ml-auto"
            style={{
              borderTopColor: '#4f46e5',
              borderBottomColor: '#db2777',
              borderLeftColor: '#0BA1FF',
              borderRightColor: '#FF80ED',
            }}
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 sm:gap-4 md:gap-y-5 md:gap-x-7 pb-5 p-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between px-1.5 py-4 sm:px-3 sm:py-2.5 md:px-4 md:py-3 bg-white/30 rounded-xl transition duration-300"
            >
              <div className="flex items-center gap-1 sm:gap-1.5 md:gap-1">
                <div>{skill.icon}</div>
                <span id="skills" className="text-lg lg:text-[0.95rem] xl:text-[1rem] font-semibold font-poppins tracking-wide whitespace-nowrap">
                  <span className="block  text-[0.8rem] sm:hidden">
                    {
                      skill.id === 2 ? "Tailwind" :
                      skill.id === 6? "Express" :
                      skill.id === 8 ? "GitHub" :
                      skill.id === 10 ? "MySQL" :
                      skill.id === 11 ? "PS" :
                      skill.id === 12 ? "DSA" :
                      skill.id === 13 ? "SD" :
                      skill.id === 15 ? "NextJS" :
                      skill.id === 16 ? "AI tools" :
                      skill.id === 14 ? "API" :
                      skill.name
                    }
                  </span>
                  <span className="hidden xl:mt-0.5 sm:block">{skill.name}</span>
                </span>
              </div>
              <Rating
                name={`rating-${skill.id}`}
                value={skill.rating}
                precision={0.5}
                readOnly
                size="small"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "19px",
                    md: "19px",
                    lg: "10px",
                    xl: "20px",
                  },
                }}
              />
            </div>
          ))}
        </div>

        {/* Disclaimer for laptop */}
        <p className="text-center hidden lg:block text-gray-200 italic lg:mb-3 xl:mb-0 lg:text-[0.9rem] xl:text-[1rem]">
          The listed skills and ratings are based on work to a real projects with fresher level experience.
        </p>
      </div>

      {/* Right Column */}
      <div
        className="hidden w-full font-poppins lg:w-[35%] xl:w-1/2 relative lg:min-h-[40rem] xl:min-h-[41.8rem] pb-8 pt-3 lg:mt-0 lg:py-10 overflow-hidden lg:flex flex-col items-center justify-between"
        style={
          !isTablet
            ? {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }
            : {}
        }
      >
        <div className="lg:absolute lg:inset-0 lg:backdrop-blur-sm lg:z-0" />

        <div className="w-auto lg:mt-18 xl:mt-17 z-10 lg:scale-[90%] xl:scale-[110%] md:px-4">
          <Resume Title="DHARUN" />
        </div>

        <div className="w-sm lg:mb-5 xl:mb-5 z-10 rounded-xl lg:scale-[77%] xl:scale-[100%] md:px-4">
          <SkillBox />
        </div>
      </div>

      {/* Mobile Disclaimer for mobile to tablet */}
      <p className="text-center absolute bottom-2.5 font-semibold md:bottom-5 block lg:hidden text-gray-300 italic text-sm md:text-[1rem]">
        The listed skills and ratings are based on work to real projects <br className="sm:hidden" /> with fresher level experience.
      </p>
    </div>
  );
};

export default SkillList;
