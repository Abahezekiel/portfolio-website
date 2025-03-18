import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import image2 from "../Assets/Screen Shot 2024-10-23 at 8.19.37 PM.png"; // Ensure correct path

const Navbar = ({ heroRef, aboutRef, projectsRef, contactRef }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effect to add or remove dark class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleScrollTo = (section) => {
    section.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex justify-between items-center mx-auto px-14 py-3">
      <img src={image2} alt="Logo" width="10%" />
      <div>
        <ul className="flex gap-6">
          {/* Dark mode toggle icon */}
          <li>
            <BsFillMoonStarsFill
              className="cursor-pointer text-xl hover:text-orange-600"
              onClick={toggleDarkMode}
            />
          </li>
          {/* Navbar Links */}
          <li
            className="nav-item"
            onClick={() => handleScrollTo(heroRef)} // Scroll to Hero section
          >
            <span className="group relative hover:cursor-pointer">
              Home
              <span className="absolute left-0 top-5 block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </li>
          <li
            className="nav-item"
            onClick={() => handleScrollTo(aboutRef)} // Scroll to About section
          >
            <span className="group relative hover:cursor-pointer">
              About
              <span className="absolute left-0 top-5 cursor-pointer block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </li>
          <li
            className="nav-item"
            onClick={() => handleScrollTo(projectsRef)} // Scroll to Projects section
          >
            <span className="group relative hover:cursor-pointer">
              Projects
              <span className="absolute left-0 top-5 cursor-pointer block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </li>
          <li
            className="nav-item"
            onClick={() => handleScrollTo(contactRef)} // Scroll to Contact section
          >
            <span className="group relative hover:cursor-pointer">
              Contact
              <span className="absolute left-0 top-5 block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300 "></span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
