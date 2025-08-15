import React, { useRef, useEffect } from "react";
import Page from "./Page";
import clgme from "../assets/images/clgme.jpg";
import myself from "../assets/images/myself.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

// Education data
const educationData = [
  {
    title: "Bachelor of Engineering in Computer Science",
    college: "S.A Engineering College",
    year: "2022 - 2025",
    score: "CGPA: 7.6",
    summary:
      "Developed a strong grasp of full-stack development, blending frontend design with backend logic. Enhanced my problem-solving mindset through real-world hackathons, collaborative projects, and hands-on coding challenges.",
    tags: ["React", "Programming", "DSA"],
    imageUrl: myself,
  },
  {
    title: "Diploma in Computer Science",
    college: "Central Polytechnic College",
    year: "2019 - 2022",
    score: "Score: 69%",
    summary:
      "Studied during the pandemic, where I built a solid technical base in computer science, This period nurtured my curiosity and helped shape my career in computer science principles and mathematical reasoning.",
    tags: ["Computer", "Science", "Mathematics"],
    imageUrl: clgme,
  },
];

const tagStyles = [
  "border border-pink-400 text-pink-400 shadow-pink-500/30",
  "border border-fuchsia-400 text-fuchsia-400 shadow-fuchsia-500/30",
  "border border-yellow-400 text-yellow-400 shadow-yellow-500/30",
  "border border-emerald-400 text-emerald-400 shadow-emerald-500/30",
  "border border-orange-400 text-orange-400 shadow-orange-500/30",
  "border border-blue-400 text-blue-400 shadow-blue-500/30",
  "border border-sky-400 text-sky-400 shadow-sky-500/30",
];

const AnimatedCard = ({ edu, index }) => {
  const cardRef = useRef(null);

useEffect(() => {
  const element = cardRef.current;
  if (window.innerWidth < 768) return; // Skip on small screens

  // GPU hint
  gsap.set(element, { willChange: "transform, opacity" });

  gsap.fromTo(
    element,
    {
      y: 40,       // Smaller travel distance
      opacity: 0,
      scale: 0.99, // Slightly closer to 1 for less GPU work
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7, // Smooth but quick
      ease: "power1.out", // Lighter easing
      delay: index * 0.06, // Faster stagger for less wait
      overwrite: "auto",
      scrollTrigger: {
        trigger: element,
        start: "top 92%", // Fires earlier, avoids snapping in
        toggleActions: "play none none none",
        once: true,       // Play only once for perf
        scrub: false,     // No extra tracking = smoother
        fastScrollEnd: true,
      },
      onComplete: () => {
        // Remove GPU hint after animation to save memory
        gsap.set(element, { willChange: "auto" });
      },
    }
  );
}, [index]);

  return (
    <div
      ref={cardRef}
      className="max-h-[21.55rem] md:max-h-[22rem] sm:max-h-none aspect-[3/4] sm:aspect-auto flex flex-col md:flex-row w-full max-w-[90vw] sm:max-w-[28rem] md:max-w-[36rem] lg:max-w-[40rem]
        bg-gradient-to-bl from-[#0f172a] via-[#100d4c] to-[#0f172a] border border-white/30
        rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-200 
        hover:shadow-md"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Left: Image */}
      <div className="w-full min-h-[10rem] md:w-[35%] h-36 sm:h-40 md:h-auto">
        <img
          loading="lazy"
          src={edu.imageUrl}
          alt={edu.college}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-[65%] relative flex flex-col justify-between px-1 py-1 sm:px-1 md:py-2 md:px-2 gap-1">
        <div className="flex-1 space-y-1 md:space-y-1">
          <h3 className="text-[0.99rem] font-lexend sm:text-base md:text-[0.93rem] lg:text-[0.99rem] xl:text-base text-cyan-500 font-semibold line-clamp-1">
            {edu.title}
          </h3>
          <h2 className="text-[0.75rem] font-lexend md:text-xs lg:text-base font-lexend font-semibold text-gray-200 line-clamp-1">
            {edu.college}
          </h2>
          <p className="text-[0.68rem] font-lexend md:text-[10px] lg:text-sm italic text-gray-400">
            {edu.year} | {edu.score}
          </p>
          <p className="text-[0.75rem] min-h-[4.8rem] md:min-h-[5.5rem] lg:min-h-[6.99rem]  font-lexend lg:text-[0.85rem] xl:text-[0.90rem] font-lexend text-gray-300 leading-snug pt-1">
            {edu.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {edu.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-[0.65rem] font-lexend min-w-[50px] text-center px-1.5 py-0.5 md:px-2 md:py-1 rounded-2xl ${tagStyles[i % tagStyles.length]} shadow-sm backdrop-blur-sm`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="Education" className="w-full h-full min-h-[28.5rem] relative md:min-h-fit lg:min-h-[30rem] gap-10 xl:min-h-[40rem] bg-gradient-to-b from-gray-600 via-slate-950 to-black sm:px-12 md:px-8 lg:px-0 py-5 font-poppins -z-20 inset-0">
      <div  className="absolute inset-0 -z-10 pointer-events-none stripes" />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold p-2 -translate-y-2 font-poppins text-center lg:translate-y-2  text-gray-300">
        <span className="">Education</span> <span>Highlights</span>
      </h1>

      {/*Carosel for mobile view */}
      <div className="relative md:hidden w-full py-1 overflow-hidden">
  {/* Carousel wrapper */}
  <div
    id="carousel"
    className="flex transition-all duration-300 ease-in-out overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
  >
    {educationData.map((edu, index) => (
      <div key={index} className="snap-center flex justify-center shrink-0 w-full px-5">
        <AnimatedCard edu={edu} index={index} />
      </div>
    ))}
  </div>

  {/* Left Arrow */}
  <button
    onClick={() => {
      const carousel = document.getElementById("carousel");
      carousel.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
    }}
    className="absolute left-[-12px] top-1/2 transform -translate-y-1/2  text-slate-400 p-2 rounded-full z-20"
    aria-label="Previous"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right Arrow */}
  <button
    onClick={() => {
      const carousel = document.getElementById("carousel");
      carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
    }}
    className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 text-slate-400 p-2 rounded-full z-20"
    aria-label="Next"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

      {/* tab and pc */}
      <div className=" hidden md:flex flex-row w-full md:gap-8 lg:gap-0 ">
        
        <div className="flex flex-col flex-grow gap-6 md:gap-10 lg:w-[60%] lg:gap-8 w-full items-center p-3 lg:scale-90">
          {educationData.map((edu, index) => (
            <AnimatedCard key={index} edu={edu} index={index} />
          ))}
        </div>

        {/* Right: Note/Page Component */}
        <div className="hidden lg:flex justify-center items-center lg:w-[40%]">
          <div className="scale-85 xl:scale-100">
            <Page />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
