import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-(--section-bg)">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href=""
          className="text-(--secondary-color) text-4xl font-semibold [&>span]:text-(--main-color)"
        >
          <span>K</span>
          eerthi
        </a>
        <p className="text-sm text-(--text-color) sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} U-GINE MEDIA —
          <a
            href="https://uginemedia.com"
            className="text-(--text-gray) ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @uginemedia
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
          <a className="ml-3 text-(--text-color)">
            <MdMarkEmailUnread  className="w-5 h-5" />
          </a>
          <a className="ml-3 text-(--text-color)">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
