import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { tagStyles } from "./details";

export default function ProjectPopup({ isOpen, project, onClose }) {
  // Lock background scroll when popup is open
  useEffect(() => {
  if (isOpen) {
    // Lock scroll on both body and html
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Prevent iOS "scroll bounce" on background
    const preventScroll = (e) => {
      if (!e.target.closest(".popup-content")) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
    };
  }
}, [isOpen]);


  if (!isOpen || !project) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center backdrop-blur-md transition-opacity duration-300 ease-in-out p-3 sm:p-5">
      {/* Popup Container */}
      <div className="bg-white w-full transform transition-transform duration-500 ease-in-out overflow-y-scroll xl:overflow-hidden md:max-h-[29rem] md:max-w-[35rem] max-h-[25rem] lg:max-h-[30rem] lg:max-w-[48rem] xl:max-w-[50rem] xl:max-h-[45rem] rounded-2xl shadow-xl relative p-5 sm:p-7 font-poppins">
        
        {/* Close Button */}
        <button
    className="absolute right-4 top-4 z-20 text-3xl md:text-4xl text-gray-500 hover:text-pink-500 transition-colors"
    onClick={onClose}
    aria-label="Close Popup"
  >
    <IoClose />
  </button>


        {/* Title */}
        <h2 className="font-lexend text-xl sm:text-2xl font-bold mb-3 text-gray-800">
          {project.title}
        </h2>

        {/* Description */}
        <p className="italic text-[#e12afb] max-w-[90%] xl:max-w-[90%] text-[0.81rem] sm:text-[1rem] font-lexend leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Purpose */}
        <h3 className="font-lexend tracking-wide text-lg font-semibold mb-1 text-gray-800">
          Purpose
        </h3>
        <p className="text-gray-600 text-xs max-w-[90%] sm:text-sm mb-5">
          {project.purpose}
        </p>

        {/* Tech Stack */}
        <h3 className="font-lexend text-lg font-semibold tracking-wide mb-1 text-gray-800">
          Tech Stack Used
        </h3>
        <div className="flex flex-wrap px-1 gap-2 mb-5">
          {project.techstack.map((tech, i) => (
            <span
              key={i}
              className={`text-[10px] code-style sm:text-[11px] tracking-tight px-[8px] py-[2.5px] text-center min-w-[40px] md:min-w-[50px] sm:px-[9px] sm:py-[4px] mt-1 mb-0.5 rounded-full transition-colors duration-300 ease-in-out ${
                tagStyles[i % tagStyles.length]
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <h3 className="font-lexend text-lg font-semibold mb-2 tracking-wide text-gray-800">
          Features
        </h3>
        <ul className="list-disc max-w-[95%] list-outside pl-3.5 space-y-1 mb-5 text-gray-600 text-xs sm:text-sm">
          {project.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>

        {/* My Contributions */}
        <h3 className="font-lexend text-lg font-semibold tracking-wide mb-2 text-gray-800">
          My Contributions
        </h3>
        <ul className="list-disc list-outside max-w-[95%] pl-3.5 space-y-1 text-gray-600 text-xs sm:text-sm">
          {project.contributions.map((contrib, i) => (
            <li key={i}>{contrib}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
}
