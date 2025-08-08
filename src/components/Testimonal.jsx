import React, { useState } from "react";

const certifications = [
  {
    title: "Full Stack Developer Internship",
    description: "Successfully completed a Full Stack Developer internship at MBL Technologies,contributing to end-to-end feature development while demonstrating adaptability, problem-solving skills, and a strong learning mindset.",
    image: "/certificates/cpt.png",
  },
  {
    title: "Event Head – Infognite (IT Quiz), Joshiana 13.0",
    description: "Organized and led a national-level IT quiz, overseeing question curation and team coordination. The event fostered collaboration and engaged participants from diverse backgrounds, strengthening my leadership, planning, and problem-solving skills.",
    image: "",
  },
  {
    title: "Postman API Fundamentals Student Expert certification",
    description: "Earned the Postman API Fundamentals Student Expert certification, demonstrating proficiency in designing, documenting, testing, and sharing APIs using Postman, along with a solid understanding of API workflows and best practices.",
    image: "/certificates/nutrition.png",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="bg-black py-20 px-5 text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-violet-400 uppercase tracking-widest text-3xl font-semibold">
            Certifications
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-violet rounded-xl p-6 shadow-lg hover:shadow-red-600/40 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4 text-red-400 text-2xl">
                
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              </div>
             
              
              <p className="text-gray-500 text-sm text-justify mb-4">{cert.description}</p>
              <button
                onClick={() => setSelectedCert(cert)}
                className="bg-red-500  hover:bg-white hover:text-black text-sm font-semibold py-2 px-4 rounded-full transition duration-300"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-black text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-black text-xl font-bold mb-4">{selectedCert.title}</h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
