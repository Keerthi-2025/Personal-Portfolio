import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Replace with your actual Web3Forms Access Key
    formData.append("access_key", "27a26890-8ed4-4385-b21c-10668772017d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl text-lime-400 text-center font-bold">Contact Me</h2>
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
              href="mailto:rhkirthi3@gmail.com"
              className="hover:text-lime-400 transition duration-300"
            >
              rhkirthi3@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaMapMarkerAlt className="text-lime-400 text-xl" />
            <span>Mangalore, India</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg mt-10">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-black border border-gray-600 text-white focus:outline-none focus:border-lime-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-black border border-gray-600 text-white focus:outline-none focus:border-lime-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-black border border-gray-600 text-white focus:outline-none focus:border-lime-400"
            ></textarea>
            <button
              type="submit"
              className="bg-lime-400 text-black font-bold py-2 px-6 rounded-full"
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
