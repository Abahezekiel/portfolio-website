import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import image1 from '../Assets/eazy-picture.jpeg'; 
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 sm:px-16 md:px-24 py-16 mt-10 mb-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl">Hey! I’m Ezekiel,</h1>
        <h1 className="text-4xl text-[#ff4f00] font-bold sm:text-5xl md:text-6xl">
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Web-Designer",
              1000,
              "Software Dev",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl">Bringing your ideas into real world with my tech skills</h4>
        <div className="flex gap-6 mt-6 flex-col sm:flex-row">
          <button className="btn2 bg-[#ff4f00] text-white rounded-full py-3 px-10 w-full sm:w-auto">
            GET IN TOUCH
          </button>
          <div className="flex gap-4 mt-4 sm:mt-0 justify-center items-center sm:justify-start">
            {/* Social Media Icons */}
            <div className="social bg-white rounded-full h-12 w-12 flex justify-center items-center hover:cursor-pointer">
              <FaTwitter className="text-[#ff4f00] text-2xl" />
            </div>
            <div className="social bg-white rounded-full h-12 w-12 flex justify-center items-center hover:cursor-pointer">
              <FaGithub className="text-[#ff4f00] text-2xl" />
            </div>
            <div className="social bg-white rounded-full h-12 w-12 flex justify-center items-center hover:cursor-pointer">
              <FaLinkedin className="text-[#ff4f00] text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={image1} // Corrected the src path
          alt="Ezekiel"
          className=" rounded-full border-4 border-[#ff4f00] sm:h-80 sm:w-80 md:h-96 md:w-auto mx-auto lg:h-72 lg:w-72"
        />
      </div>
    </div>
  );
};

export default Hero;
