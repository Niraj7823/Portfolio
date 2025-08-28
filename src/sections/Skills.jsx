import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiRedux } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
  },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-5xl" /> },

  { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 p-6 bg-gray-800 rounded-xl hover:scale-110 transition-transform duration-300"
            >
              {skill.icon}
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
