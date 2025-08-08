import React from "react";
import background from "../assets/background.jpg";
import userProfile from "../assets/prof.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="min-h-dvh top-0 left-0 bg-cover w-full -z-10 flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <div className="text-(--text-color) relative top-24">
          <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center md:px-24">
            <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center">
              <span className="text-(--main-color) uppercase md:text-4xl text-2xl">
                hello i'm
              </span>
              <h1 className="md:text-9xl text-5xl md:mb-4 mb-4 mt-2 md:mt-0 font-medium text-(--secondary-color)">
                Keerthi RH
              </h1>
              <p className="mb-4 leading-8">
                I'm Java Full Stack Developer | SpringBoot | Postman | Java | MVC | MySQL
              </p>

              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/Keerthi-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:animate-spin text-(--main-color)"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/keerthi-rh-9b19a5245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl hover:animate-spin text-(--main-color)"
                >
                  <FaLinkedin />
                </a>
              </div>




              {/* Centered Action Buttons */}
              <div className="flex justify-center flex-wrap gap-4 mt-5">
                <button className="inline-flex text-(--secondary-color) bg-(--main-color) border-0 py-2 px-6 cursor-pointer focus:outline-none hover:bg-(--secondary-color) hover:text-(--main-color) rounded text-lg transition-all duration-300 ease-in">
                  View Projects
                </button>
                <button className="inline-flex text-(--main-color) bg-gray-100 border-0 py-2 px-6 cursor-pointer focus:outline-none rounded text-lg hover:bg-(--main-color) hover:text-(--secondary-color) transition-all duration-300 ease-in">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="relative md:w- before:absolute before:content[''] md:before:w-(--508) md:before:h-(--508) before:w-(--250) before:h-(--250) before:bg-(--primary-color) before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 z-10 before:-z-10 before:animate-zoom">
              <img
                className="object-cover object-center"
                alt="hero"
                src={userProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
