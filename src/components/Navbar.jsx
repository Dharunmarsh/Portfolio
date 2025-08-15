import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const backdropRef = useRef(null);
  const navItemsRef = useRef([]);

  const navLinks = [
    { label: "Edu", targetId: "Education" },
    { label: "Skills", targetId: "Skills" },
    { label: "Exp", targetId: "Experience" },
    { label: "Contact", targetId: "contact" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Only close the sidebar if we're on mobile
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  };

  // Lock scroll when menu is open
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
    }
    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Animate entry
  useLayoutEffect(() => {
    if (isOpen) {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(sidebarRef.current, { x: "100%" }, { x: "0%", duration: 0.6, ease: "power3.out" });
      gsap.fromTo(navItemsRef.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.3,
      });
    }
  }, [isOpen]);

  // Animate exit then close
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      const tl = gsap.timeline({ onComplete: () => setIsOpen(false) });
      tl.to([...navItemsRef.current].reverse(), { x: -40, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power2.inOut" })
        .to(sidebarRef.current, { x: "100%", duration: 0.5, ease: "power3.inOut" }, "<")
        .to(backdropRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, "<");
    }
  };

  return (
    <header className="relative top-0 left-0 w-full z-50 animated-border bg-black font-poppins">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 md:px-6 text-white font-semibold tracking-wide">
        <div className="text-2xl font-bold md:hidden select-none">Dharun Marshall</div>
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-xl font-bold select-none">
          Dharun Marshall
        </div>

        {/* Left Nav Links */}
        <ul className="hidden tracking-wide md:flex md:text-base lg:text-xl gap-12 text-xl items-center">
          {navLinks.slice(0, 3).map(({ label, targetId }) => (
            <li key={label}>
              <a
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
                className="hover:text-gray-400 select-none transition duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Nav Links */}
        <ul className="hidden tracking-wide md:text-base lg:text-xl md:flex gap-12 items-center">
          {navLinks.slice(3).map(({ label, targetId }) => (
            <li key={label}>
              <a
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
                className="hover:text-gray-400 select-none transition duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </nav>

      {/* Sidebar + Backdrop */}
      {isOpen && (
        <>
          <div
            ref={backdropRef}
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-md"
            onClick={toggleMenu}
          />
          <aside
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-full sm:w-64 z-50 p-5 overflow-y-auto backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <X onClick={toggleMenu} className="w-6 h-6 text-white cursor-pointer" />
            </div>
            <ul className="flex flex-col space-y-6 mt-10 px-3 text-left">
              {navLinks.map(({ label, targetId }, i) => (
                <li
                  key={label}
                  ref={(el) => (navItemsRef.current[i] = el)}
                  className="opacity-0"
                >
                  <a
                    href={`#${targetId}`}
                    onClick={(e) => handleNavClick(e, targetId)}
                    className="text-2xl font-semibold text-white hover:text-yellow-400 transition duration-300 block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </header>
  );
};

export default Navbar;
