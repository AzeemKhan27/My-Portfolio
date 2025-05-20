import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <motion.h1
          className="text-2xl font-bold text-accent"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Azeem Khan
        </motion.h1>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-accent transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/AzeemKhan27" target="_blank" rel="noreferrer">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/azeem-khan-5a9717171/" target="_blank" rel="noreferrer">
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-white hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
