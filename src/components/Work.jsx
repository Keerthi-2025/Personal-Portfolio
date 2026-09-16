import React from "react";
import { FaChevronRight } from "react-icons/fa";

const experiences = [
{
companyLogo:
"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
title: "Associate, ML Data Operations",
company: "Amazon, Bangalore, India",
duration: "January 2026 – April 2026",
mode: "On-site",
responsibilities: [
"Performed data validation and quality checks on multimedia datasets used for machine learning systems.",
"Ensured accuracy and consistency of structured data used for ML systems.",
],
tags: [
"Machine Learning",
"ML Data Operations",
"Data Validation",
"Data Quality",
"Structured Data",
],
},
{
companyLogo:
"https://media.licdn.com/dms/image/v2/D4E0BAQE8qS1z1_6dDw/company-logo_200_200/company-logo_200_200/0/1724828783802/mbl_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=jVZV299j42lvyGMaYKcw4i6rJBosWvfXhA40fssehnc",
title: "Software Developer Intern",
company: "MBL Technologies Pvt Ltd, Hyderabad",
duration: "April 2025 – July 2025",
mode: "On-site",
responsibilities: [
"Developed and integrated RESTful APIs using Spring Boot and MySQL for scalable backend systems.",
"Built responsive front-end interfaces with Next.js and Tailwind CSS, enhancing user experience across devices.",
"Collaborated on real-time web application projects with full-stack architecture and cross-functional teamwork.",
"Performed API testing using Postman to ensure reliability and correctness of backend services.",
"Gained exposure to microservices architecture, emphasizing modular and scalable backend design.",
"Containerized applications using Docker to streamline deployment and maintain environment consistency.",
"Participated in Agile development processes, including code reviews and sprint planning.",
],
tags: [
"Spring Boot",
"Java",
"Microservices",
"React.js",
"MySQL",
"Tailwind CSS",
"JavaScript",
"REST API",
"Postman",
],
},
{
companyLogo:
"https://nexttechtoday.com/wp-content/uploads/2024/11/UnifyCX-Launches-Redefining-Customer-Experience-Management.jpg",
title: "Junior Support Engineer",
company: "GlowTouch Technologies Private Limited (Now UnifyCX)",
duration: "November 2022 – July 2023",
mode: "On-site",
responsibilities: [
"Provided technical support for web hosting services by troubleshooting DNS, TCP/IP, HTTP/HTTPS, SSL/TLS certificates, IP configuration, email services, and website connectivity issues.",
"Diagnosed website and hosting issues, including domain resolution, email configuration, SSL certificate installation, and HTTP errors such as 404 and 508.",
"Supported customers through chat and email while providing clear and effective technical solutions.",
"Troubleshot web hosting environments across both Windows and Linux systems.",
"Guided customers through technical solutions and escalated unresolved issues to the appropriate teams.",
"Collaborated with team members to resolve customer issues efficiently and maintain service quality.",
],
tags: [
"WordPress",
"DNS Management",
"TCP/IP",
"HTTP/HTTPS",
"SSL/TLS",
"Troubleshooting",
"Web Hosting",
"Linux",
"FTP",
],
},
];

const Work = () => {
return ( <section
   id="experience"
   className="bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6"
 > <div className="max-w-6xl mx-auto"> <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
Experience </h2>

```
    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
      Building modern solutions, learning every day, and pushing limits
      with code.
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

          {/* Company Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={exp.companyLogo}
              alt={exp.company}
              className="w-20 h-20 rounded-full object-contain bg-white p-2"
            />
          </div>

          {/* Role and Company */}
          <h3 className="text-2xl font-bold text-center mb-1">
            {exp.title}{" "}
            <span className="text-lime-400 font-semibold">
              @ {exp.company}
            </span>
          </h3>

          {/* Duration */}
          <p className="text-center text-gray-400 text-sm mb-4">
            {exp.duration} | {exp.mode}
          </p>

          {/* Responsibilities */}
          <ul className="text-gray-300 text-[15px] space-y-2 list-none">
            {exp.responsibilities.map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <FaChevronRight className="text-lime-400 mt-1 text-xs shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Skills / Tags */}
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
