import React from "react";
import { Link } from "react-scroll";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Niraj7823",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/niraj-prajapati-327246319",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "mailto:nirajprajapati0708@email.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Niraj Prajapati
          </h2>
          <p className="text-sm">
            Passionate Frontend Developer crafting modern, responsive web
            experiences.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Niraj Prajapati. Built with{" "}
          <span className="text-white font-medium">React</span>,{" "}
          <span className="text-white font-medium">TailwindCSS</span>, and{" "}
          <span className="text-white font-medium">JavaScript</span>.
        </p>

        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-indigo-400 hover:underline mt-2 inline-block"
        >
          Back to Top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
