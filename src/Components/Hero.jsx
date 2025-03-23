import React from "react";
import { staggerContainer, fadeInUp } from "../utils/animateUtils";
import { motion } from "framer-motion";
import SaiImage from "../assets/Sai.png";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="max-w-[1200px] mx-auto py-10 px-5 flex flex-col justify-around items-center gap-5 lg:flex-row bg-[rgba(33,36,40,0.5)] border-b-[1px] border-b-gray-600"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
      variants={staggerContainer}
    >
      {/* text content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-5"
        initial="hidden"
        animate={"visible"}
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeInUp}
          className="text-6xl font-bold capitalize"
        >
          Hello, I'm <span className="text-red-600">Sai Vara Prasad</span>
        </motion.h1>
        <motion.span
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl my-3 font-medium bg-gradient-to-r from-[#FA5560] via-[#B14BF4] to-[#4D91FF] bg-clip-text text-transparent"
        >
          A Frontend Developer.
        </motion.span>
        <motion.p variants={fadeInUp} className="text-base sm:text-xl">
          I’m a passionate Frontend Developer who loves building interactive,
          responsive, and user-friendly web applications. Skilled in React,
          TailwindCSS, and animations with Framer Motion. Let’s create something
          amazing!
        </motion.p>
        {/* Download button and Icons */}
        <motion.div className="flex flex-col gap-5 my-3">
          <motion.a
            className="w-[200px] flex items-center gap-2 p-3 bg-purple-600 rounded-xl shadow-lg shadow-gray-950 hover:bg-indigo-500 transition-bg duration-150 "
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/uc?export=download&id=1C-fDJa3xYOI3DlR562mALICnAvfURmd2"
            download
          >
            <Download />
            <span>Download Resume</span>
          </motion.a>

          <motion.div className="mt-4">
            <span className="font-light text-xl">FIND ME HERE</span>
            <motion.div
              className="flex my-3 gap-4"
              initial="hidden"
              animate={"visible"}
              variants={staggerContainer}
            >
              <motion.a
                href="https://github.com/saivaraprasad195"
                target="_blank"
                whileHover={{ y: -8, color: "#DC2626" }}
                transition={{ type: "spring", stiffness: 200 }}
                variants={fadeInUp}
                className="inline-block bg-[#141618] shadow-gray-950 shadow-md rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github w-[50px] h-[50px] p-3 rounded-lg"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sai-varaprasad-945472152?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfTd3nAYCSSmtMaoaHRfHbg%3D%3D"
                target="_blank"
                whileHover={{ y: -8, color: "#DC2626" }}
                transition={{ type: "spring", stiffness: 200 }}
                variants={fadeInUp}
                className="inline-block bg-[#141618] shadow-gray-950 shadow-md rounded-lg  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-[50px] h-[50px] p-3 rounded-lg "
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/saivaraprasad295/"
                target="_blank"
                whileHover={{ y: -8, color: "#DC2626" }}
                transition={{ type: "spring", stiffness: 200 }}
                variants={fadeInUp}
                className="inline-block bg-[#141618] shadow-gray-950 shadow-md rounded-lg  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram w-[50px] h-[50px] p-3 rounded-lg"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:saivaraprasad195@gmail.com"
                target="_blank"
                whileHover={{ y: -8, color: "#DC2626" }}
                transition={{ type: "spring", stiffness: 200 }}
                variants={fadeInUp}
                className="inline-block bg-[#141618] shadow-gray-950 shadow-md rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail w-[50px] h-[50px] p-3 rounded-lg "
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </motion.a>
              <motion.a
                href="https://x.com/Saivara1999"
                target="_blank"
                whileHover={{ y: -8, color: "#DC2626" }}
                transition={{ type: "spring", stiffness: 200 }}
                variants={fadeInUp}
                className="inline-block bg-[#141618] shadow-gray-950 shadow-md rounded-lg  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter w-[50px] h-[50px] p-3 rounded-lg "
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        className=" w-[300px] h-[412px] rounded-xl shadow-lg shadow-black border-[1px] border-purple-600 p-2 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={SaiImage}
          alt="Sai's Image"
          variants={fadeInUp}
          className="hover:-translate-x-2 hover:-translate-y-2 hover:scale-105 transition-all duration-500 rounded-2xl m-auto shadow-lg shadow-black absolute -top-3 -left-2"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
