import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className=" mx-auto py-3">
        <div className="">
          {/* Left: Name / Logo */}
          <div className="text-[0.65rem] md:text-base lg:text-lg text-center font-poppins tracking-wide">
            <span>Thanks for visiting my portfolio and checking out my work it means a lot!</span>
          </div>
        </div>

        {/* Divider */}
        <div className=" border-slate-700 pt-2 italic text-center text-xs sm:text-sm text-slate-400">
          all rights not reserved © {year}
        </div>
      </div>
    </footer>
  );
}
