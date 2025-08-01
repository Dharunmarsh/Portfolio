import React from "react";
import heroImage from "../assets/images/dharun.jpg";

import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useEffect(() => {
  document.fonts.ready.then(() => {
    const name = new SplitText("#title", { type: "chars, words" });
    const role = new SplitText("#title2", { type: "chars, words" });
    const summary = new SplitText("#summary", { type: "words" });

    // Reveal text containers first
    gsap.set(["#summary", "#title", "#title2"], { opacity: 1 });

    // Animate Name & Role — chars with dramatic stagger
    gsap.from([...name.chars, ...role.chars], {
      duration: 1.2,
      opacity: 0,
      ease: "slow(0.7, 0.7, false)", // silky glide-in
      stagger: {
        each: 0.06, // 🔥 slow this down
        from: "random",
      },
    });

    // Animate Summary — words with smoother roll-in
    gsap.from(summary.words, {
      delay: 0.8,
      duration: 1.5,
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  });
}, []);

  return (
    <section className="min-h-[30rem] md:min-h-[33rem] lg:min-h-[37rem] xl:min-h-[44.7rem] font-poppins text-white flex items-center sm:px-6 lg:px-12 p-5 bg-gradient-to-b from-black via-slate-950 to-gray-600">
      <div className="container md:flex-row flex-col-reverse max-h-fit md:min-h-[28rem] lg:min-h-[33rem] xl:min-h-[40rem] flex items-center justify-between gap-0 md:gap-6 lg:gap-8 rounded-3xl mx-auto shadoww bg-opacity-30 p-2 md:px-6 lg:px-10 min-w-[80vh">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 flex flex-col gap-1 lg:gap-4 px-0 sm:px-1 py-0.5 sm:py-6 text-center md:text-left mx-auto md:mx-0">
          <h1 id="title" className="text-3xl opacity-0 md:text-4xl lg:text-5xl xl:text-7xl  font-bold leading-snug md:leading-tight">
            Dharun <span className="text-gray-400">Marshall</span>
          </h1>

          <h2 id="title2" className="text-xl opacity-0 md:text-2xl lg:text-3xl md:translate-y-2 xl:text-4xl font-semibold">
            <span className="bg-gray-500 text-black px-2 py-0 sm:py-1 rounded">
              Front-end
            </span>{" "}
            Developer
          </h2>

          <p id="summary" className="text-[0.76rem] opacity-0 md:text-[0.95rem] lg:text-lg xl:text-xl text-white bg-neutral-950 p-1 leading-relaxed font-lexend font-medium max-w-[95%] sm:max-w-[90%] md:translate-y-3 lg:translate-y-5 md:max-w-[37rem] mx-auto md:mx-0 rounded-md">
            I'm a front-end developer fresher with a solid foundation in HTML, CSS, JavaScript, and ReactJS. I build clean, scalable, responsive UIs and have real-world project and hackathon experience. Currently growing into a full-stack role with strong problem-solving skills.
          </p>
        </div>

        {/* Image */}
        <div className="translate- sm:translate-0 lg:mr-2 xl:mr-7 flex justify-center items-center">
          <img
          loading="lazy"
            src={heroImage}
            alt="Dharun Marshall"
            className="w-44 sm:w-52 md:w-65 lg:w-77 xl:w-100 object-cover rounded-3xl transition duration-500 ease-in-out grayscale hover:grayscale-0 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
