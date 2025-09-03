import React from "react";

const certifications = [
  {
    title: "Full Stack Developer Internship",
    description:
      "Successfully completed a Full Stack Developer internship at MBL Technologies, contributing to end-to-end feature development while demonstrating adaptability, problem-solving skills, and a strong learning mindset.",
    link: "https://drive.google.com/file/d/1eysmZMaQLtQcmoFjWrZL7xOLcFqvOHgN/view?usp=sharing",  //internship certificate
  },
  {
    title: "Event Head – Infognite (IT Quiz), Joshiana 13.0",
    description:
      "Organized and led a national-level IT quiz, overseeing question curation and team coordination. The event fostered collaboration and engaged participants from diverse backgrounds, strengthening my leadership, planning, and problem-solving skills.",
    link: "https://drive.google.com/file/d/17hCqYkwcZwedl9Wf5Jxc3gfm1NMj0Qgf/view?usp=sharing",
  },
  {
    title: "Postman API Fundamentals Student Expert certification",
    description: "Earned the Postman API Fundamentals Student Expert certification, demonstrating proficiency in designing, documenting, testing, and sharing APIs using Postman, along with a solid understanding of API workflows and best practices.",
    link: "https://drive.google.com/file/d/1DfovDl5tHBwqcPselJTJ1T-p4IyqQ5lx/view?usp=sharing",
  },

  {
    title:"AWS Unleashed: Hands-On Cloud Training ",
    description:"Gained practical experience with AWS services including S3, Lambda, EC2, IAM, RDS, and VPS, along with AWS CLI. Learned to deploy, automate, and scale cloud applications efficiently.",
    link:"https://drive.google.com/file/d/1RviFbL18oskiu7RcGQ__oA2UgzCvKCx9/view?usp=sharing"
  },
  {
    title:"Agile Project Management By HP ",
    description:"Gained hands-on knowledge in iterative & incremental development, and applying Agile frameworks like Scrum and Kanban to enhance project execution and teamwork.",
    link:"https://drive.google.com/file/d/1A9KTsbwEe-EsZfntZgRTyaSr2NsBsZlq/view?usp=drive_link"
  },
  {
    title:"Introduction to Cybersecurity – Cisco Networking Academy ",
    description:"Gained hands-on knowledge in iterative & incremental development, and applying Agile frameworks like Scrum and Kanban to enhance project execution and teamwork.",
    link:"https://drive.google.com/file/d/1VPhpDFlCWC7UpvHcG7xO7MoZQLFyeyPA/view?usp=drive_link"

  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-black py-20 px-5 text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-lime-400  tracking-widest text-3xl font-semibold">
            Certifications
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-violet rounded-xl p-6 shadow-lg hover:shadow-lime-400/40 transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm text-justify mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Centered Button */}
              <div className="flex justify-center">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime-400 hover:bg-lime-400 hover:text-black text-sm font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
