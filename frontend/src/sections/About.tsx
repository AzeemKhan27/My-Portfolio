import { resume } from "../constants/data";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-secondary text-lg leading-7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {resume.summary}
      </motion.p>
    </section>
  );
};
