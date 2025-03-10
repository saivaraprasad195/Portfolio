export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const listContainerStagger = {
  hidden: { opacity: 0, y:10 },
  visible: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

export const mobileNavStagger = {
  hidden: { opacity: 0, height:0, },
  visible: {
    opacity: 1,
    height:200,
    transition: {
      staggerChildren: 0.3,
    },
  },
};