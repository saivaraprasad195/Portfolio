import React from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeFromLeft,
  listContainerStagger,
} from "../utils/animateUtils";

const Experience = () => {
  return (
    <motion.div
      id="work"
      className="py-10 px-7 selection:text-purple-600 max-w-[1200px] mx-auto border-b-[1px] border-b-gray-600"
    >
      <motion.h3
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="visible"
        className="text-5xl font-semibold text-center mb-10"
      >
        Work Experience
      </motion.h3>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="p-4 bg-[#17191c] rounded-lg"
      >
        <motion.h3 className="font-medium text-2xl">
          SAP ABAP Developer
        </motion.h3>
        <motion.p className="font-base text-gray-300">
          Wipro Limited - ( December 2021 - April 2023 )
        </motion.p>
        <motion.ul
          variants={listContainerStagger}
          initial="hidden"
          whileInView="visible"
          className=" font-base text-lg list-disc pl-5 pt-2 space-y-4"
        >
          <motion.li variants={fadeFromLeft}>
            Worked on Automating Staffing Request (SR) process like Shrink,
            Extension and Deletion.
          </motion.li>
          <motion.li variants={fadeFromLeft}>
            Debugged and optimized existing SAP MRS function modules for
            efficiency improvements.
          </motion.li>
          <motion.li variants={fadeFromLeft}>
            Collaborated with cross-functional teams for testing, resolving bugs
            in project allocation process.
          </motion.li>
          <motion.li variants={fadeFromLeft}>
            Received{" "}
            <span className="text-[#dc2626]">" Round of Applause Badge "</span>{" "}
            from Manager as recognition of my dedication and teamwork.
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
