import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const lists = [
  { key: "Home", value: "#" },
  { key: "About", value: "#about" },
  { key: "Experience", value: "#experience" },
  { key: "Skills", value: "#skills" },
  { key: "Testimonials", value: "#certifications" },
  { key: "Contact", value: "#contact" },
];

const Header = () => {
  //Sticky Menu
  const [stickyMenu, setStickMenu] = useState(false);

  window.addEventListener("scroll", (e) => {
    setStickMenu(true);
    if (Math.floor(scrollY) <= 0) {
      setStickMenu(false);
    }
  });

  //Mobile Menu Navigation
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <header>
      <div
        id="header-sticky"
        className={`transparent-header ${stickyMenu ? "sticky-menu" : ""}`}
      >
        <div className="header">
          <div className="container mx-auto ">
            <div className="flex justify-between items-center">
              <div>
                <a
                  href=""
                  className="text-(--secondary-color) text-4xl font-semibold [&>span]:text-(--main-color)"
                >
                  <span>K</span>
                  eerthi
                </a>
              </div>
              <div className="flex items-center gap-10">
                <ul className="list-none lg:inline-flex hidden gap-10 font-semibold text-lg text-(--secondary-color)">
                  {lists.map((v) => (
                    <li key={v.key}>
                      <a
                        className="transition-colors duration-300 ease-in hover:text-(--main-color)"
                        href={`${v.value}`}
                      >
                        {v.key}
                      </a>
                    </li>
                  ))}
                </ul>
                <a href="https://drive.google.com/file/d/1AFS0uyi362eHlyGnWYfHmOgLUrM-yViE/view?usp=sharing" download="KeerthiCV.pdf" className="outline-btn hidden md:block">
                  Download cv
                </a>
                <button
                  className="md:hidden text-2xl cursor-pointer text-(--main-color)"
                  onClick={handleMobileMenu}
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          mobileMenu ? "left-0" : "-left-999"
        } fixed top-0  min-w-full min-h-full z-50 transition-all md:hidden`}
      >
        <div
          className="mobile-overlay w-full h-dvh bg-(--transparent-bg)"
          onClick={handleMobileMenu}
        ></div>
        <div className="absolute top-0 left-0 h-full min-w-72 bg-(--main-color) z-50">
          <div>
            <button
              className="float-right mt-8 mr-10 text-3xl cursor-pointer"
              onClick={handleMobileMenu}
            >
              <IoCloseOutline />
            </button>
          </div>
          <div className="mt-28 ml-10">
            <ul className="text-lg">
              {lists.map((v) => (
                <li
                  key={v.key}
                  className="mb-5 last:mb-0 hover:text-(--secondary-color) transition-colors duration-300 ease-in text-(--primary-color)"
                  onClick={handleMobileMenu}
                >
                  <a className="" href={`${v.value}`}>
                    {v.key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 ml-10">
            <button href="https://drive.google.com/file/d/1AFS0uyi362eHlyGnWYfHmOgLUrM-yViE/view?usp=sharing"className="white-filled-btn">Download cv</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
