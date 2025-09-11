import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "English to Tulu Language Translator",
    description:"A machine learning-based English-to-Tulu translator built using KNN and TfidfVectorizer, trained on a custom-aligned dataset. Features a Streamlit-powered web app for easy translations of in-dataset vocabulary, hosted on Streamlit Cloud.",
    tech: ["Python", "TfidfVectorizer", "AI ML", "Streamlit","G Collab"],
    github: "https://github.com/Keerthi-2025/English_to_Tulu_Language_Translator",
    live: "https://eng2tulu.streamlit.app/",
  },
  {
    title: "To-Do List",
    description:"A simple To-Do List Web Application built using Spring Boot and HTML (Thymeleaf). This application allows users to create, update, and delete tasks in a clean and minimal interface.",
    tech: ["Spring Boot", "Java", "Thymleaf","HTML","Bootsrap"],
    github: "https://github.com/Keerthi-2025/todoapp",
    live: "https://github.com/Keerthi-2025/todoapp",
  },
  {
    title: "Emoji-Text Detection App",
    description:"This project focuses on detecting emotions from textual input and suggesting appropriate emojis to enhance communication. By leveraging machine learning techniques, it bridges the gap between emotional expression and textual communication.",
    tech: ["Python", "Scikit-learn", "Streamlit","Altair"],
    github: "https://github.com/Keerthi-2025/Emoji_Text_Detection_Application",
    live: "https://emojidetection.streamlit.app/",
  },
   {
    title: "TimeFrame – Responsive Watch Showcase Design",
    description:"This project is a UI/UX design prototype built in Figma, inspired by industry-standard design practices.It showcases a responsive streaming-style platform where users can explore three different types of watches, each available in three color combinations.",
    tech: ["Figma", "Curve Text", "Phosphor Icons","Prototyping","Smart Animate"],
    github: "https://github.com/Keerthi-2025/TimeFrame",
    live: "https://drive.google.com/file/d/15GETkviPm28gSYdhrigNf6M5b6DrleC0/view?usp=drive_link",
  },
  {
    title: "Full Stack Real Estate Web Application",
    description:"A full-stack real estate application built using MongoDB, Express, React, and Node.js (MERN Stack). This project replicates features including authentication, CRUD operations, and advanced search functionality.",
    tech: ["React js", "MongoDB", "Express js","VS Code","OAuth"],
    github: "https://github.com/Keerthi-2025/Hotel-Booking",
    live: "",
  },
  {
    title:"CravyKitchen",
    description:"A fully responsive food delivery landing page featuring smooth AOS animations, hero, restaurant showcase, categories, reviews, and mobile app preview.Includes an auto-sliding review carousel with navigation and a scroll-to-top button for seamless navigation.",
    tech:["Next.js", "Tailwind CSS v4", "AOS", "VS Code", "next-themes","Vercel"],
    github:"https://github.com/Keerthi-2025/CravyKitchen/",
    live:"https://cravy-kitchen.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-20 px-5 text-center text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-lime-400 tracking-widest text-3xl font-semibold">
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

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-lime-700/20 border border-lime-400 text-lime-300 px-3 py-1 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
