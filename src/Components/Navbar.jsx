

import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import image2 from "../Assets/Screen Shot 2024-10-23 at 8.19.37 PM.png"; // Ensure correct path
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ heroRef, aboutRef, projectsRef, contactRef }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

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
 
    <nav className="flex justify-between items-center mx-auto px-6 sm:px-14 py-3 w-full fixed top-0 left-0 z-50 bg-white dark:bg-black">
  {/* Logo */}
  <img src={image2} alt="Logo" className="h-12" />

  {/* Desktop Menu */}
  <div className="hidden lg:flex space-x-6 items-center">
    <BsFillMoonStarsFill
      className="cursor-pointer text-xl text-black dark:text-white hover:text-orange-600"
      onClick={toggleDarkMode}
    />
    <ul className="flex space-x-6">
      <li className="nav-item" onClick={() => handleScrollTo(heroRef)}>
        <span className="group relative hover:cursor-pointer hover:border-b-2 hover:border-orange-600">Home</span>
      </li>
      <li className="nav-item" onClick={() => handleScrollTo(aboutRef)}>
        <span className="group relative hover:cursor-pointer hover:border-b-2 hover:border-orange-600">About</span>
      </li>
      <li className="nav-item" onClick={() => handleScrollTo(projectsRef)}>
        <span className="group relative hover:cursor-pointer hover:border-b-2 hover:border-orange-600">Projects</span>
      </li>
      <li className="nav-item" onClick={() => handleScrollTo(contactRef)}>
        <span className="group relative hover:cursor-pointer hover:border-b-2 hover:border-orange-600">Contact</span>
      </li>
    </ul>
  </div>

  {/* Hamburger Icon for Mobile */}
  <div
    className="lg:hidden cursor-pointer"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <GiHamburgerMenu className="text-2xl text-black dark:text-white" />
  </div>

  {/* Modal for Mobile Menu */}
  <div
    className={`fixed inset-0 bg-gray-800 bg-opacity-50 lg:hidden ${
      isMenuOpen ? "block" : "hidden"
    }`}
    onClick={() => setIsMenuOpen(false)} // Close on background click
  >
    {/* Modal content (Mobile Menu) */}
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-black transition-transform transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul
        className={`flex flex-col gap-6 p-6 transition-all duration-700 ${
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100%]"
        }`}
      >
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-xl text-black dark:text-white hover:text-orange-600"
            onClick={toggleDarkMode}
          />
        </li>
        <li
          className="nav-item hover:border-b-2 hover:border-orange-600 transition-all duration-300"
          onClick={() => handleScrollTo(heroRef)} // Scroll to Hero section
        >
          <span className="group relative hover:cursor-pointer">
            Home
            <span className="absolute left-0 top-5 block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </span>
        </li>
        <li
          className="nav-item hover:border-b-2 hover:border-orange-600 transition-all duration-300"
          onClick={() => handleScrollTo(aboutRef)} // Scroll to About section
        >
          <span className="group relative hover:cursor-pointer">
            About
            <span className="absolute left-0 top-5 cursor-pointer block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </span>
        </li>
        <li
          className="nav-item hover:border-b-2 hover:border-orange-600 transition-all duration-300"
          onClick={() => handleScrollTo(projectsRef)} // Scroll to Projects section
        >
          <span className="group relative hover:cursor-pointer">
            Projects
            <span className="absolute left-0 top-5 cursor-pointer block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
          </span>
        </li>
        <li
          className="nav-item hover:border-b-2 hover:border-orange-600 transition-all duration-300"
          onClick={() => handleScrollTo(contactRef)} // Scroll to Contact section
        >
          <span className="group relative hover:cursor-pointer">
            Contact
            <span className="absolute left-0 top-5 block w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-300 "></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
