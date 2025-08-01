import React, { useEffect, useRef } from 'react';
import codebrawl from "../assets/images/codebrawl.jpg";
import profanityFilter from "../assets/images/ml.png";
import ecommerceDB from "../assets/images/sql.png";
import './Article.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "CodeBrawl",
    summary: "A real-time PvP coding battle platform where developers can challenge each other and level up. Built as a startup-style MVP using React and Socket.IO.",
    info: ["NextJS", "MERN"],
    imageUrl: codebrawl,
  },
  {
    title: "Profanity Filter",
    summary: "A machine learning model designed to detect and block offensive language in real time. It ensures respectful interactions by analyzing the user input.",
    info: ["RE", "ML"],
    imageUrl: profanityFilter,
  },
  {
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

const Article = ({ project }) => {
  return (
    <article className="group w-full 
      max-w-[22.5rem] md:max-w-[24rem] 
      lg:max-w-[20rem] xl:max-w-[26rem] 
      h-auto rounded-xl p-1.5 border-[1.5px] border-gray-400 
      cursor-pointer bg-white shadow-md transition-transform duration-300 
      ease-in-out hover:scale-[1.03] hover:shadow-xl">

      {/* Image */}
      <div className="w-full relative 
        h-[160px] md:h-[160px] 
        lg:h-[150px] xl:h-[190px]
        overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
        <img
          loading='lazy'
          src={project.imageUrl}
          alt={project.title}
          className="w-full absolute h-fit object-cover transition-transform duration-500 ease-in-out scale-122 translate-y-5 lg:scale-122 lg:translate-y-3 group-hover:translate-y-0 group-hover:scale-100"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-1 pt-1 flex-grow">
        <div className="flex justify-between px-1 bg-white items-center">
          <h1 className="text-[1.2rem] font-bold font-poppins text-[#1a1a1a]">{project.title}</h1>
          <div className="rounded-full mr-2 w-7 h-7 lg:w-10 lg:h-10 text-blue-400 sm:text-black lg:p-1 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:rotate-[-45deg] group-hover:bg-[#ffe6f9]">
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

        <p className="text-[0.759rem] md:text-[0.766rem] lg:text-[0.69rem] xl:text-[0.90rem] text-gray-600 px-1 font-lexend">
          {project.summary}
        </p>

        <div className="flex flex-wrap px-1 gap-2">
          {project.info.map((tag, i) => (
            <span
              key={i}
              className={`font-lexend text-[8.5px] sm:text-[12px] tracking-tight px-[7px] py-[2px] text-center min-w-[44px] md:min-w-[55px] sm:px-[10px] sm:py-[5px] rounded-full transition-colors duration-300 ease-in-out ${tagStyles[i % tagStyles.length]}`}
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

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 786) return;
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            toggleActions: "play none none none",
          },
          delay: index * 0.3,
        }
      );
    });
  }, []);

  return (
    <div className="w-full">
      {/* Carousel for mobile view */}
      <div className="relative md:hidden w-full overflow-hidden">
        <div
          id="carousell"
          className="flex transition-all duration-300 ease-in-out overflow-x-scroll py-1 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          {projectsData.map((project, i) => (
            <div key={i} ref={addToRefs} className="snap-center flex justify-center p-1 items-center shrink-0 w-full">
              <Article project={project} />
            </div>
          ))}
        </div>
        <button
    onClick={() => {
      const carousel = document.getElementById("carousell");
      carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
    }}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-rose-500 p-2 rounded-full z-20"
    aria-label="Previous"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => {
      const carousel = document.getElementById("carousell");
      carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
    }}
    className="absolute right-[1px] top-1/2 transform -translate-y-1/2 hover:bg-black/70 text-rose-500 p-2 rounded-full z-20"
    aria-label="Next"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
      </div>

      {/* Grid for desktop */}
      <div className="hidden md:grid grid-cols-1 bg-red-600 md:grid-cols-2 lg:grid-cols-3 gap-0 py-2">
        {projectsData.map((project, i) => (
          <div key={i} ref={addToRefs} className='w-full flex justify-center bg-amber-300 rounded-4xl '>
            <Article project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
