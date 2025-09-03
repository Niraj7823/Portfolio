import React, { useState } from "react";
import img1 from "../assets/real e-state.png";
import img2 from "../assets/chat-app.png";
import img3 from "../assets/e-commerce.png";

const projects = [
  {
    title: "Real Estate Website",
    description:
      "A modern real estate website with broker listings, property details, and a contact system.",
    image: img1,
    link: "https://real-estate-project-mm8z.vercel.app/",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app built with React and Firebase, featuring personal chats, replies, and unread message indicators.",
    image: img2,
    link: "https://chat-app-iota-cyan-54.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description:
      "An e-commerce product listing page with Redux state management and responsive design.",
    image: img3,
    link: "https://e-commerce-website-zeta-weld.vercel.app/",
  },
];

const Projects = () => {
  const [hoverColor, setHoverColor] = useState("bg-gray-50");
  const [textColor, setTextColor] = useState("text-gray-800");

  return (
    <section
      id="projects"
      className={`py-16 transition-colors duration-700 ${hoverColor}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-colors duration-700 ${textColor}`}
        >
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white block"
              onMouseEnter={() => {
                setHoverColor("bg-black");
                setTextColor("text-white");
              }}
              onMouseLeave={() => {
                setHoverColor("bg-indigo-100");
                setTextColor("text-gray-800");
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500 p-4">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
                <span className="mt-4 inline-block bg-white text-gray-900 px-5 py-2 rounded-lg font-medium">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
