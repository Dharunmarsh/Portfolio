import React from "react";
import Form from "./Form";
import Links from "./Links";

export default function Contact() {
  return (
    <div id="contact" className="white-black pt-5 md:pt-7 lg:pt-5">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl pl-8 sm:pl-0 md:text-center lg:text-5xl font-bold text-slate-700 font-poppins">
        <span>Contacts</span>
      </h1>

      {/* Content wrapper */}
      <div className="w-full pb-5 md:px-3 md:py-5">
        <div className="flex flex-col-reverse md:flex-row items-stretch">
          {/* Form */}
          <div className="flex-1 px-5 pt-2 flex items-center justify-center">
            <Form />
          </div>

          {/* Links */}
          <div className="flex-1 flex justify-center items-center">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
