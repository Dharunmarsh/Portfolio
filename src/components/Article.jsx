import React, { useEffect, useRef, useState } from 'react';
import codebrawl from "../assets/images/codebrawl.jpg";
import profanityFilter from "../assets/images/ml.png";
import ecommerceDB from "../assets/images/sql.png";
import './Article.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectDetails } from './details'; // must be named import
import ProjectPopup from './ProjectPopup';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "CodeBrawl",
    summary: "A real-time PvP coding battle platform where developers can challenge each other and level up. Built as a startup-style MVP using React and Socket.IO.",
    info: ["NextJS", "MERN"],
    imageUrl: codebrawl,
  },
  {
    id: 2,
    title: "Profanity Filter",
    summary: "A machine learning model designed to detect and block offensive language in real time. It ensures respectful interactions by analyzing the user input.",
    info: ["RE", "ML"],
    imageUrl: profanityFilter,
  },
  {
    id: 3,
    title: "Ecommerce Database",
    summary: "A fully structured MySQL database tailored for small to mid-scale ecommerce businesses. It handles users, products, orders, and inventory efficiently.",
    info: ["MySQL", "DBMS"],
    imageUrl: ecommerceDB,
  },
];

const tagStyles = [
  "bg-purple-200 text-purple-700 hover:bg-purple-700 hover:text-purple-200",
  "bg-pink-200 text-pink-700 hover:bg-pink-700 hover:text-pink-200",
  "bg-green-200 text-green-700 hover:bg-green-700 hover:text-green-200",
  "bg-yellow-200 text-yellow-800 hover:bg-yellow-700 hover:text-yellow-200",
];

// 🧩 Card Component
const Article = ({ project, onOpenPopup }) => {
  return (
    <article
      onClick={() => onOpenPopup(project.id)}
      className="group w-full max-w-[21rem] md:max-w-[21rem] lg:max-w-[18rem] xl:min-w-[22rem] h-auto rounded-xl p-1 border-[1.2px] border-gray-400 cursor-pointer bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl"
    >
      <div className="w-full relative h-[135px] md:h-[145px] lg:h-[135px] xl:h-[160px] overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
        <img
          loading="lazy"
          src={project.imageUrl}
          alt={project.title}
          className="w-full absolute h-fit object-cover transition-transform duration-500 ease-in-out scale-100 translate-y-5 lg:scale-122 lg:translate-y-3 group-hover:translate-y-0 group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col gap-1 pt-1 flex-grow">
        <div className="flex justify-between px-1 bg-white items-center">
          <h1 className="text-[1.05rem] font-bold font-poppins text-[#1a1a1a]">
            {project.title}
          </h1>
          <div className="rounded-full xl:mr-2 w-7 h-7 text-blue-400 sm:text-black lg:p-1 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:rotate-[-45deg] group-hover:bg-[#ffe6f9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>

        <p className="text-[0.72rem] md:text-[0.74rem] lg:text-[0.63rem] xl:text-[0.77rem] text-gray-600 px-1 font-lexend">
          {project.summary}
        </p>

        <div className="flex flex-wrap px-1 gap-2">
          {project.info.map((tag, i) => (
            <span
              key={i}
              className={`font-lexend text-[10px] sm:text-[11px] tracking-tight px-[6px] py-[1.5px] text-center min-w-[45px] md:min-w-[50px] sm:px-[9px] sm:py-[4px] mt-1 mb-0.5 rounded-full transition-colors duration-300 ease-in-out ${tagStyles[i % tagStyles.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function ArticleCards() {
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const [activeId, setActiveId] = useState(null);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
  if (window.innerWidth < 1024) return;

  const cards = gsap.utils.toArray(cardsRef.current);

  // Hide them initially & hint GPU
  gsap.set(cards, {
    opacity: 0,
    y: 30,
    scale: 0.99,
    willChange: "transform, opacity",
  });

  ScrollTrigger.batch(cards, {
    start: "top 90%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power1.out",
        stagger: { each: 0.08, from: "start" },
        onComplete: () => {
          gsap.set(batch, { willChange: "auto" }); // cleanup
        },
      });
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  const handleOpenPopup = (id) => setActiveId(id);
  const handleClosePopup = () => setActiveId(null);

  const selectedProjectDetails = projectDetails.find((proj) => proj.id === activeId);

  return (
    <div className="w-full">
      {/* Project Popup */}
      {selectedProjectDetails && (
        <ProjectPopup
          isOpen={Boolean(activeId)}
          onClose={handleClosePopup}
          project={selectedProjectDetails}
        />
      )}

      {/* Carousel for mobile view */}
      <div className="relative md:hidden w-full overflow-hidden">
        <div
          id="carousell"
          className="flex transition-all duration-300 ease-in-out overflow-x-scroll py-1 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {projectsData.map((project, i) => (
            <div key={i} ref={addToRefs} className="snap-center flex justify-center p-1 items-center shrink-0 w-full">
              <Article project={project} onOpenPopup={handleOpenPopup} />
            </div>
          ))}
        </div>

        {/* Left & Right Buttons */}
        <button
          onClick={() => {
            const carousel = document.getElementById("carousell");
            carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
          }}
          className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 text-rose-500 p-2 rounded-full z-20"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            const carousel = document.getElementById("carousell");
            carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
          }}
          className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 text-rose-500 p-2 rounded-full z-20"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden max-w-fit md:grid grid-cols-2 rounded pl-9 lg:px-3 py-1 lg:py-0 xl:p-5 lg:grid-cols-3 xl:px-2 gap-8 lg:gap-8 xl:gap-10">
        {projectsData.map((project, i) => (
          <div key={i} ref={addToRefs}>
            <Article project={project} onOpenPopup={handleOpenPopup} />
          </div>
        ))}
      </div>
    </div>
  );
}
