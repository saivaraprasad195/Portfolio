import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  mobileNavStagger,
  staggerContainer,
} from "../utils/animateUtils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header className="sticky top-0 left-0 max-w-[1300px] mx-auto  h-max z-10 flex justify-between items-center py-4 px-10 rounded-b-3xl text-white bg-[rgba(0,0,0,0.3)] backdrop-blur-md">
      {/* Left Side - Logo */}
      <motion.div className="text-3xl font-bold ">Sai</motion.div>

      {/* Desktop motion.nav */}
      <motion.nav
        initial="hidden"
        animate={"visible"}
        variants={staggerContainer}
        className="hidden text-white md:flex gap-6"
      >
        <motion.a
          href="#home"
          whileHover={{ color: "#DC2626", scale: 1.2 }}
          variants={fadeInUp}
          className=" text-nowrap rounded-2xl bg-[rgba(166,166,166,0.3)] px-3 py-1 backdrop-blur-1"
        >
          Home
        </motion.a>
        <motion.a
          href="#skills"
          whileHover={{ color: "#DC2626", scale: 1.2 }}
          variants={fadeInUp}
          className=" text-nowrap rounded-2xl bg-[rgba(166,166,166,0.3)] px-3 py-1 backdrop-blur-1"
        >
          Skills
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ color: "#DC2626", scale: 1.2 }}
          variants={fadeInUp}
          className=" text-nowrap rounded-2xl bg-[rgba(166,166,166,0.3)] px-3 py-1 backdrop-blur-1"
        >
          Projects
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ color: "#DC2626", scale: 1.2 }}
          variants={fadeInUp}
          className=" text-nowrap rounded-2xl bg-[rgba(166,166,166,0.3)] px-3 py-1 backdrop-blur-1"
        >
          Contact Me
        </motion.a>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0 }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          key={isOpen}
          initial="hidden"
          animate={"visible"}
          variants={mobileNavStagger}
          className="absolute w-full top-full right-0 h-[200px] flex flex-col items-center py-4 space-y-4 bg-[rgba(0,0,0)] backdrop-blur-md md:hidden"
        >
          <motion.a
            href="#"
            variants={fadeInUp}
            whileHover={{ color: "#DC2626", scale: 1.2 }}
            className="text-lg "
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            variants={fadeInUp}
            whileHover={{ color: "#DC2626", scale: 1.2 }}
            className="text-lg "
          >
            Skills
          </motion.a>
          <motion.a
            href="#"
            variants={fadeInUp}
            whileHover={{ color: "#DC2626", scale: 1.2 }}
            className="text-lg "
          >
            Projects
          </motion.a>
          <motion.a
            href="#"
            variants={fadeInUp}
            whileHover={{ color: "#DC2626", scale: 1.2 }}
            className="text-lg "
          >
            Contact Me
          </motion.a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
