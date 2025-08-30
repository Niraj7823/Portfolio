import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero"); // default active section = Home

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
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={() => setActive(link.id)}
              className={`cursor-pointer transition-colors duration-200 ${
                active === link.id
                  ? "text-indigo-500 font-semibold"
                  : "hover:text-indigo-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Header */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Show Current Active Page */}
          <span className="font-medium text-indigo-400">
            {navLinks.find((l) => l.id === active)?.label}
          </span>

          {/* Menu Toggle Button */}
          <button onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 bg-gray-800 p-4 rounded-lg flex flex-col items-center space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={() => setActive(link.id)}
              className={`cursor-pointer transition-colors duration-200 ${
                active === link.id
                  ? "text-indigo-500 font-semibold"
                  : "hover:text-indigo-400"
              }`}
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
