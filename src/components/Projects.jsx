import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React.js and Tailwind CSS to showcase my skills, experience, and projects. Fully responsive with smooth animations.",
    github: "https://github.com/Keerthi-2025/portfolio",
    live: "https://keerthi-portfolio.netlify.app/",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce application using Spring Boot, React, and MySQL. Includes product listings, shopping cart, order management, and payment integration.",
    github: "https://github.com/Keerthi-2025/ecommerce-app",
    live: "https://myshop-demo.netlify.app/",
  },
  {
    title: "Task Manager App",
    description:
      "A task management tool with authentication, CRUD operations, and real-time updates using WebSockets. Built with React, Node.js, and MongoDB.",
    github: "https://github.com/Keerthi-2025/task-manager",
    live: "https://taskmanager-demo.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-20 px-5 text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-lime-400 uppercase tracking-widest text-3xl font-semibold">
            Projects
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-violet rounded-xl p-6 shadow-lg hover:shadow-lime-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm text-justify mb-6">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-white hover:text-black text-sm font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-lime-400 hover:bg-white hover:text-black text-sm font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
