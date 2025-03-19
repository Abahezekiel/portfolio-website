import React from "react";
import image2 from '../Assets/eazy-picture2.jpeg'; 

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 sm:px-16 md:px-24 py-16">
      <div className="flex justify-center mb-8 md:mb-0"> {/* Center image on small screens with margin bottom */}
        <img
          src={image2}
          alt="Ezekiel"
          className="h-80 rounded-xl sm:w-64 sm:h-64 md:h-80 md:w-auto mx-auto" // Adjust image size responsively
        />
      </div>
      <div className="flex flex-col justify-center ml-4">
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 w-32 p-2 rounded-md font-bold  md:w-auto mx-auto">
          ABOUT ME
        </button>

        <h1 className="text-4xl pt-6">I'M AVAILABLE FOR</h1>
        <h1 className="text-4xl text-[#ff4f00]">FRONT-END & WEB-DESIGN</h1>
        <h4 className="text-lg">PROJECTS</h4>
        <p className="mt-4">
          I'm a Front-End developer, passionate about designing scalable web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
