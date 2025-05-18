import { resume } from "../constants/data";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {resume.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-card p-4 rounded shadow text-center text-sm md:text-base"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
