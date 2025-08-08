import React from "react";
import { FaChevronRight } from "react-icons/fa";

const experiences = [
  {
    companyLogo: "/assets/mbl.png", // Updated path
    title: "Software Developer Intern",
    company: "MBL Technologies Pvt Lmt, Hyderabad",
    duration: "April 2025 – July 2025",
    mode: "On-site",
    responsibilities: [
      "Developed and integrated RESTful APIs using Spring Boot and MySQL for scalable backend systems.",
      "Built responsive front-end interfaces with Next.js and Tailwind CSS, enhancing user experience across devices.",
      "Collaborated on real-time web application projects with full-stack architecture and cross-functional teamwork.",
      "Performed API testing using Postman to ensure reliability and correctness of backend services.",
      "Gained exposure to microservices architecture, emphasizing modular, scalable backend design.",
      "Containerized applications using Docker to streamline deployment and environment consistency.",
      "Participated in Agile development processes, including code reviews and sprint planning.",
    ],
    tags: [
      "Spring Boot", "Java", "Microservices", "React.js", "MySQL",
      "Tailwind CSS", "JavaScript", "REST API", "Postman",
    ],
  },
  {
    companyLogo: "/assets/glow.png", // Updated path
    title: "Junior Support Engineer",
    company: "GlowTouch Technologies Private Limited (Now UnifyCX)",
    duration: "Nov 2022 – June 2023",
    mode: "On-site",
    responsibilities: [
      "Provided technical assistance to customers of leading hosting brands (HostGator, Website Builder, Site Builder, Gator Builder) via email and chat.",
      "Demonstrated expertise in troubleshooting server issues and ensuring smooth operations.",
      "Developed excellent communication skills through effective customer interactions.",
      "Guided clients through technical solutions and escalated unresolved issues to appropriate teams.",
      "Managed customer complaints, provided timely solutions, and ensured resolution with proper documentation.",
      "Collaborated with team members to meet service level targets and ensure customer satisfaction.",
    ],
    tags: [
      "WordPress", "DNS Management", "Troubleshooting", "Web Hosting", "cPanel",
      "Debugging", "Communication", "FTP", "Linux",
    ],
  }
];

const Work = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
          💼 Experience
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          Building modern solutions, learning every day, and pushing limits with
          code.
        </p>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group rounded-2xl border-l-4 border-lime-400 bg-white/5 backdrop-blur-md p-6 pl-10 transition-all hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Vertical Stripe Icon */}
              <div className="absolute left-2 top-6 text-lime-400">
                <FaChevronRight />
              </div>

              {/* Company logo inside circular frame */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-lime-400 bg-white flex items-center justify-center p-2">
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Role and Company */}
              <h3 className="text-2xl font-bold text-center mb-1">
                {exp.title}{" "}
                <span className="text-lime-400 font-semibold">
                  @ {exp.company}
                </span>
              </h3>
              <p className="text-center text-gray-400 text-sm mb-4">
                {exp.duration} | {exp.mode}
              </p>

              {/* Responsibilities */}
              <ul className="text-gray-300 text-[15px] space-y-2 list-none">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <FaChevronRight className="text-lime-400 mt-1 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-lime-700/20 border border-lime-400 text-lime-300 px-3 py-1 text-xs rounded-full font-medium hover:bg-lime-500 hover:text-black transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
