import React from "react";
import background from "../assets/background.jpg";
import userProfile from "../assets/cv-bg.png"; // Your original image
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center md:px-24">
        
        {/* Left Section */}
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-lime-400 uppercase md:text-4xl text-2xl">
            HELLO I'M
          </span>
          <h1 className="md:text-8xl text-5xl mb-4 mt-2 font-medium whitespace-nowrap text-white">
            Keerthi RH
          </h1>
          <p className="mb-4 leading-8 text-gray-300">
            I'm Java Full Stack Developer | SpringBoot | Postman | Java | MVC | MySQL
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Keerthi-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:scale-110 transition-transform text-lime-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/keerthi-rh-9b19a5245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:scale-110 transition-transform text-lime-400"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mt-5">
            <button className="inline-flex text-black bg-lime-400 py-2 px-6 rounded text-lg font-medium hover:bg-lime-500 transition-all duration-300">
              View Projects
            </button>
            <button className="inline-flex text-lime-400 bg-white py-2 px-6 rounded text-lg font-medium hover:bg-lime-500 hover:text-black transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section - Full Image */}
        <div className="relative flex justify-center mt-10 lg:mt-0 lg:w-1/2">
          <img
            className="max-w-sm w-full h-auto object-contain shadow-lg"
            alt="Keerthi RH"
            src={userProfile}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
