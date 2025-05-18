import { resume } from "../constants/data";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {resume.projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-card p-6 rounded shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline text-sm"
            >
              Visit Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
