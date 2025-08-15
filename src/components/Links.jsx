import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./Links.css";

const socialLinks = [
  { name: "WhatsApp", icon: <FaWhatsapp />, color: "#25D366", url: "https://wa.me/8682094369" },
  { name: "Instagram", icon: <FaInstagram />, gradient: "instagram-gradient", url: "https://www.instagram.com/vibecoderr_/" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717", url: "https://github.com/dharunmarsh" },
  { name: "LinkedIn", icon: <FaLinkedin />, color: "#0077B5", url: "https://linkedin.com/in/dharunmarshall" },
  { name: "YouTube", icon: <FaYoutube />, color: "#FF0000", url: "https://www.youtube.com/@DharunMarshall1003" },
  { name: "X Twitter", icon: <FaXTwitter />, color: "#000000", url: "https://twitter.com/dharunrogers" },
  { name: "Gmail", icon: <SiGmail />, color: "#EA4335", url: "mailto:dharunrogers003@gmail.com" },
];

export default function SocialLinks() {
  return (
    <div className="relative md:scale-[115%] flex font-lexend justify-center py-4 sm:py-6">
      {/* Thread line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l border-dashed border-slate-400"></div>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 z-10">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between 
              w-35 sm:w-40 md:w-48 
              px-2 sm:px-3 py-2 sm:py-2 
              rounded-md text-white font-medium shadow-md social-card`}
            style={{
              background: link.gradient ? undefined : link.color,
            }}
            id={link.gradient ? link.gradient : ""}
          >
            <span className="text-lg md:text-xl">{link.icon}</span>
            <span className="flex-1 text-center text-sm md:text-base">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
