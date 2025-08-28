import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react"; // three-dot menu icon

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

        <div className="hidden md:flex space-x-6">
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

        <div className="md:hidden flex items-center space-x-4">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-indigo-500 font-semibold"
            className="cursor-pointer hover:text-indigo-400 transition-colors duration-200"
          >
            Home
          </Link>
          <button onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-gray-800 p-4 rounded-lg flex flex-col items-center space-y-3">
          {navLinks
            .filter((link) => link.label !== "Home")
            .map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-indigo-500 font-semibold"
                className="cursor-pointer hover:text-indigo-400 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
