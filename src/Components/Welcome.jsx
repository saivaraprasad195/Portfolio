import { motion } from "framer-motion";
import { useEffect } from "react";

const Welcome = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#030711] text-white m-auto"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold my-3"
      >
        Hi, I'm Sai Varaprasad
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-2xl md:text-5xl lg:text-6xl my-3 font-medium"
      >
        A{" "}
        <span className="bg-gradient-to-r from-[#FA5560] via-[#B14BF4] to-[#4D91FF] bg-clip-text text-transparent">
          Frontend
        </span>{" "}
        Developer
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-xl md:text-3xl lg:text-4xl mt-2"
      >
        Welcome to my Portfolio
      </motion.h3>
    </motion.div>
  );
};

export default Welcome;
