import React from "react";
import { motion } from "framer-motion";
import { projects } from "../utils/ProjectUtils";
import { fadeInUp, staggerContainer } from "../utils/animateUtils";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-[1200px] mx-auto bg-[rgba(33,36,40,0.5)] px-9 py-10"
      variants={staggerContainer}
    >
      <motion.h3 className="text-5xl font-semibold text-center mb-10">
        My Projects
      </motion.h3>
      <motion.div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => {
          return (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount:0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="p-3 mx-auto group max-w-[360px] bg-[#2a2e33] border-[1px] border-gray-600 rounded-xl"
            >
              <motion.div className="relative overflow-hidden h-[200px] rounded-xl">
                <motion.img
                  src={project.imageSrc}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
                <div className="hidden absolute top-0 left-0 h-full w-full flex-col p-5 gap-5 mx-auto bg-[rgba(0,0,0,0.2)] backdrop-blur-sm group-hover:flex hover:transition-all duration-1000">
                  <h3 className="text-center font-bold text-xl text-[#DC2626]">
                    TechStack
                  </h3>
                  <p className="font-semibold">{project.teckStack}</p>
                </div>
              </motion.div>
              <motion.div>
                <motion.div className="flex items-center justify-between my-3">
                  <span className="text-xl text-[#DC2626]">
                    {project.name.toUpperCase()}
                  </span>
                  <motion.div className="flex items-center gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="bg-gray-900 rounded-full hover:text-[#DC2626]"
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
                        className="lucide lucide-github w-[45px] h-[45px] p-3 rounded-"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a
                      href={project.liveWebLink}
                      target="_blank"
                      className="bg-gray-900 rounded-full hover:text-[#DC2626]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        className="w-[45px] h-[45px] p-2.5 rounded-lg"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
                <p>{project.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
