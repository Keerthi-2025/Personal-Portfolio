import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-(--section-bg)">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        
        {/* Logo/Name */}
        <a
          href="#"
          className="text-(--secondary-color) text-4xl font-semibold [&>span]:text-(--main-color)"
        >
          <span>K</span>eerthi
        </a>

        {/* Copyright */}
        <p className="text-sm text-(--text-color) sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Social Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
          {/* Email */}
          <a
            href="mailto:rhkirthi3@gmail.com"
            className="text-(--text-color) hover:text-(--main-color) transition duration-300"
            aria-label="Email"
          >
            <MdMarkEmailUnread className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Keerthi-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-color) hover:text-(--main-color) transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/keerthi-rh-9b19a5245/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-color) hover:text-(--main-color) transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
