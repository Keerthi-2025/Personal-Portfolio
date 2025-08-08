import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 relative" id="contact">
      
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-(--primary-color) rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-(--main-color) text-lg mb-1 font-medium">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-(--text-color)">
            Let’s Start A New Project
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-(--text-color) inline-block mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-(--secondary-color) rounded border border-(--text-color) focus:border-(--main-color) focus:ring-2 focus:ring-(--main-color) text-base outline-none text-(--text-color) py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-(--text-color) inline-block mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-(--secondary-color) rounded border border-(--text-color) focus:border-(--main-color) focus:ring-2 focus:ring-(--main-color) h-32 text-base outline-none text-(--text-color) py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white cursor-pointer bg-(--main-color) border-0 py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg hover:border hover:border-(--main-color) hover:text-(--main-color) transition-all duration-300">
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Visit us at No 14 New Westmorland Road London, E17 8JA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
