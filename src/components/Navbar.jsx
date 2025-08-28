import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold cursor-pointer">My Portfolio</h1>

        <div className="space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-indigo-500 font-semibold"
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
