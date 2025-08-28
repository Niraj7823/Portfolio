import React from "react";
import aboutData from "../data/aboutData";

function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            {aboutData.description}
          </p>

          <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700 mb-8">
            <p className="text-2xl font-semibold">{aboutData.name}</p>
            <p className="text-blue-400">{aboutData.role}</p>
          </div>

          <a
            href={aboutData.resumeLink}
            download
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition"
          >
            Download Resume
          </a>
        </div>

        <div className="bg-blue-500 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6">My Skills</h3>

          <div className="space-y-4">
            {aboutData.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill}</span>
                </div>
                <div className="w-full bg-blue-300 h-2 rounded-full">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 21) + 70}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
