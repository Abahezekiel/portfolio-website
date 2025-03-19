import React from "react";
import "./Slider.css"; // Import the custom CSS file for the animation

const Skills = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYWiT73Y9783RNS-aZt1_RZ8tIzeVAv350Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAhYunjJOYpbkNCzTLGIY0Ob2ZXMU44U9Vw&s",
    "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F9w1d71e00a6xdltour1s.png",
    "https://d2jdgazzki9vjm.cloudfront.net/images/javascript/javascript_logo.png",
    "https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYWiT73Y9783RNS-aZt1_RZ8tIzeVAv350Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAhYunjJOYpbkNCzTLGIY0Ob2ZXMU44U9Vw&s",
    "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F9w1d71e00a6xdltour1s.png",
    "https://d2jdgazzki9vjm.cloudfront.net/images/javascript/javascript_logo.png",
    "https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png",
  ];

  return (
    <>
      <div className="flex items-center justify-center text-4xl font-extrabold pb-10">
        <p>My Tech Stack</p>
      </div>
      <div className="overflow-hidden relative w-full px-8 sm:px-16 md:px-24 py-1">
        <div className="slider-wrapper">
          <div className="slider-content flex gap-10 sm:gap-16 md:gap-20">
            {/* Map through images and render each one */}
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="customer-logo"
                className="w-20 sm:w-24 md:w-28"
                style={{ animationDelay: `${index * 5}s` }} // Stagger animation by index
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
