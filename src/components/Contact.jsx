import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-lime-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6">
            I’d love to hear from you! Whether you have a question, a project 
            idea, or just want to say hello, feel free to reach out.  
          </p>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-lime-400 text-xl" />
            <a 
              href="mailto:keerthi@example.com"
              className="hover:text-lime-400 transition duration-300"
            >
              keerthi@example.com
            </a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaMapMarkerAlt className="text-lime-400 text-xl" />
            <span>Mangalore, India</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-black border border-gray-600 text-white focus:outline-none focus:border-lime-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-black border border-gray-600 text-white focus:outline-none focus:border-lime-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded bg-black border border-gray-600 text-white focus:outline-none focus:border-lime-400"
            ></textarea>
            <button
              type="submit"
              className="bg-lime-400 text-black font-bold py-2 px-6 rounded-full hover:bg-white transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
