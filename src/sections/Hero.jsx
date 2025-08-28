import React, { useState } from "react";
import img from "../assets/profile.png";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-700 ${
        hovered ? "bg-gray-50" : "bg-indigo-100"
      }`}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <img
            src={img}
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white 
            transform transition duration-500 hover:scale-110"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I’m <span className="text-indigo-600">Niraj Prajapati</span>
        </h1>
        <h2 className="text-lg md:text-xl font-medium text-gray-600">
          Frontend Developer • React.js Enthusiast
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I build modern, responsive, and user-friendly web applications.
          Passionate about UI/UX and performance optimization using
          <b> React.js</b>, <b>Tailwind CSS</b>, and modern tools.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            onClick={scrollToProjects}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
          >
            My Projects
          </button>
          <button
            onClick={scrollToContact}
            className="border border-gray-700 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
