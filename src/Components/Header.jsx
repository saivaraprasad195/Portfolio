import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 text-white relative h-max">
      {/* Left Side - Logo */}
      <div className="text-3xl font-bold">Sai</div>

      {/* Desktop Nav */}
      <nav className="hidden text-gray-200  md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 rounded-3xl px-4 py-2 bg-[rgba(255,255,255,0.09)] backdrop-blur-1">
        <a
          href="#"
          className="hover:text-gray-50 hover:scale-125 transition-all duration-200 text-nowrap rounded-2xl bg-[rgba(255,255,255,0.11)] px-2 py-1 backdrop-blur-1"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-gray-50 hover:scale-125 transition-all duration-200 text-nowrap rounded-2xl bg-[rgba(255,255,255,0.11)] px-2 py-1 backdrop-blur-1"
        >
          About Me
        </a>
        <a
          href="#"
          className="hover:text-gray-50 hover:scale-125 transition-all duration-200 text-nowrap rounded-2xl bg-[rgba(255,255,255,0.11)] px-2 py-1 backdrop-blur-1"
        >
          Skills
        </a>
        <a
          href="#"
          className="hover:text-gray-50 hover:scale-125 transition-all duration-200 text-nowrap rounded-2xl bg-[rgba(255,255,255,0.11)] px-2 py-1 backdrop-blur-1"
        >
          Projects
        </a>
        <a
          href="#"
          className="hover:text-gray-50 hover:scale-125 transition-all duration-200 text-nowrap rounded-2xl bg-[rgba(255,255,255,0.11)] px-2 py-1 backdrop-blur-1"
        >
          Contact Me
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#" className="text-lg hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-lg hover:text-gray-300">
            About Me
          </a>
          <a href="#" className="text-lg hover:text-gray-300">
            Skills
          </a>
          <a href="#" className="text-lg hover:text-gray-300">
            Projects
          </a>
          <a href="#" className="text-lg hover:text-gray-300">
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
