import { motion } from "framer-motion";

const skills = [
  {
    name: "Spring Boot",
    description: "Robust backend framework for Java-based microservices.",
  },
  {
    name: "React.js",
    description: "Component-based UI library powered by a virtual DOM.",
  },
  {
    name:"C#",
    description:"A modern, object-oriented programming language for building applications on .NET."
  },
  {
    name: "MySQL",
    description: "Reliable relational database for structured data.",
  },
  {
    name: "Postman",
    description: "API testing and collaboration platform.",
  },
  {
    name: "HTML",
    description: "Markup standard for building web content.",
  },
  {
    name: "CSS",
    description: "Design styling language for the web.",
  },
  {
    name: "Java",
    description: "OOP language for scalable enterprise applications.",
  },
  {
    name: "Python",
    description: "Versatile language used in AI, scripting, and web dev.",
  },
  {
    name: "Streamlit",
    description: "Framework for building Python-based data apps fast.",
  },
  {
    name: "Git & GitHub",
    description: "Version control and team collaboration tools.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0f0f0f] text-white py-16 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-lime-400 mb-4">Skills</h2>
        <p className="text-lime-600 max-w-xl mx-auto text-md whitespace-nowrap">
          Technologies & tools I use regularly to build, design, and deliver robust applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map(({ logo, name, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1c1c1e] rounded-xl border border-lime-400 p-5 group hover:shadow-[0_0_15px_#a3e635] transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              
              <h3 className="text-xl font-semibold text-lime-400 group-hover:text-lime-400">
                {name}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
