import { motion } from "framer-motion";
import springbootLogo from '<div styleName={} />skills/springboot.png';

const skills = [
  { name: "Spring Boot", logo: "/skills/springboot.png" },
  { name: "React.js", logo: "/skills/react.png" },
  { name: "MySQL", logo: "/skills/mysql.png" },
  { name: "Postman", logo: "/skills/postman.png" },
  { name: "HTML", logo: "/skills/html.png" },
  { name: "CSS", logo: "/skills/css.png" },
  { name: "Java", logo: "/skills/java.png" },
  { name: "Python", logo: "/skills/py.jpeg" },
  { name: "Streamlit", logo: "/skills/str.png" },
  { name: "Git & GitHub", logo: "/skills/git.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <h2 className="text-4xl text-center font-bold mb-10 text-lime-400">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="w-24 h-24 rounded-full border-4 border-lime-400 flex items-center justify-center p-2"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
            <p className="mt-4 text-lg font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
