import React, { useEffect } from "react";
//import heroImage from "../assets/images/dharun.jpg";
import Matrix from "./Matrix";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useEffect(() => {
  document.fonts.ready.then(() => {
    const name = new SplitText("#title", { type: "chars, words" });
    const role = new SplitText("#title2", { type: "chars, words" });
    const summary = new SplitText("#summary", { type: "words" });

    // Show text containers
    gsap.set(["#summary", "#title", "#title2"], { opacity: 1 });

    // Title + Role - random fade
    gsap.from([...name.chars, ...role.chars], {
      duration: 0.5, // much shorter
      opacity: 0,
      ease: "power1.out",
      stagger: {
        each: 0.02, // faster stagger
        from: "random",
      },
    });

    // Summary - random fade
    gsap.from(summary.words, {
      delay: 0.1,
      duration: 0.6,
      opacity: 0,
      ease: "power1.out",
      stagger: {
        each: 0.015,
        from: "random",
      },
    });
  });
}, []);


  return (
    <section className="relative overflow-x-hidden min-h-[25rem] md:min-h-[30rem] lg:min-h-[37rem] xl:min-h-[44.7rem] font-poppins text-white flex items-center sm:px-6 lg:px-12 p-5 bg-gradient-to-b from-black via-slate-950 to-gray-600">
      
      {/* Matrix Background */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none z-0">
  <Matrix />
</div>


      {/* Content Container */}
      <div className="containerr relative  md:flex-row flex-col-reverse max-h-fit md:min-h-[25rem] lg:min-h-[30rem] xl:min-h-[40rem] flex items-center justify-between gap-0 md:gap-6 lg:gap-8 rounded-3xl mx-auto shadow-2xl bg-opacity-30 p-2 md:px-6 lg:px-10 max-w-[80rem] md:min-w-[30rem] lg:min-w-[40rem] xl:min-w-[87rem]">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 flex flex-col gap-1 lg:gap-4 px-0 sm:px-1 py-0.5 sm:py-6 text-center md:text-left mx-auto md:mx-0">
          <h1
            id="title"
            className="text-[1.8rem] opacity-0 md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-snug md:leading-tight"
          >
            Dharun <span className="text-gray-400">Marshall</span>
          </h1>

          <h2
            id="title2"
            className="text-lg opacity-0 md:text-2xl lg:text-3xl md:translate-y-2 xl:text-4xl font-semibold"
          >
            <span className="bg-gray-500 text-black px-2 py-0 sm:py-1 rounded">
              Front-end
            </span>{" "}
            Developer
          </h2>

        <p
  id="summary"
  className="text-[0.70rem] opacity-0 md:text-[0.95rem] lg:text-lg xl:text-xl text-white bg-neutral-950 p-1 leading-relaxed font-lexend font-medium max-w-[95%] sm:max-w-[90%] md:translate-y-3 lg:translate-y-5 md:max-w-[37rem] mx-auto md:mx-0 rounded-md"
>
  I'm a fresher <span className="shiny-slate">front-end developer</span> with skills in 
  <span className="shiny-slate"> HTML</span>, <span className="shiny-slate"> CSS</span>, 
  <span className="shiny-slate"> JavaScript</span>, and <span className="shiny-slate"> ReactJS</span>.  
  I craft <span className="shiny-slate"> responsive</span>, <span className="shiny-slate"> scalable UIs</span> using 
  <span className="shiny-slate"> AI-powered tools</span> to accelerate development.  
  Now advancing toward <span className="shiny-slate"> full-stack</span> with a focus on 
  <span className="shiny-slate"> modern frameworks</span> and 
  <span className="shiny-slate"> performance optimization</span>.
</p>



        </div>

        {/* Image */}
        <div className="translate- sm:translate-0 lg:mr-2 xl:mr-7 flex justify-center items-center">
          <img
            loading="lazy"
            src="https://github.com/Dharunmarsh/portfolio/blob/main/src/assets/images/dharun.jpg?raw=true"
            alt="Dharun Marshall"
            className="w-41 sm:w-52 md:w-65 lg:w-77 xl:w-100 object-cover rounded-3xl transition duration-500 ease-in-out grayscale hover:grayscale-0 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
