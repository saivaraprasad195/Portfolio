import React from "react";
import { motion } from "framer-motion";
import { skills, skillIcons } from "../utils/skillsUtils";
import { listItemVariants, listContainerStagger } from "../utils/animateUtils";

const Skills = () => {
  const animateSkillHeader = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      id="skills"
      className="max-w-[1200px] mx-auto bg-[rgba(33,36,40,0.5)] flex flex-col items-center justify-center gap-10 px-5 py-10 border-b-[1px] border-b-gray-600"
    >
      <motion.h3 className="text-5xl font-semibold">My Skills</motion.h3>
      {Object.entries(skills).map(([category, skillsList]) => {
        return (
          <motion.div
            key={category}
            className="flex flex-col justify-center items-center gap-3"
          >
            <motion.h3
              variants={animateSkillHeader}
              initial="hidden"
              whileInView={"visible"}
              className="bg-purple-700 text-center w-[300px] text-3xl font-medium px-4 py-2 rounded-lg"
            >
              {category}
            </motion.h3>
            <motion.ul
              variants={listContainerStagger}
              initial="hidden"
              whileInView={"visible"}
              className="flex gap-5 bg-slate-900 flex-wrap w-[92%] px-10 py-8 rounded-2xl md:rounded-full"
            >
              {skillsList.map((skill) => {
                return (
                  <motion.li
                    variants={listItemVariants}
                    whileHover={{ scale: 1.1 }}
                    key={skill}
                    className="cursor-pointer px-3 py-2 bg-green-700 rounded-full"
                  >
                    {skillIcons.skill ? <span>skillIcons.skill</span> : ""}
                    {skill}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default Skills;
