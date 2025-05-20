import { resume } from "../constants/data";
import { motion } from "framer-motion";

export const Resume = () => {
  // fallback to resume icon if preview image is missing
  const previewImage = "/resume-preview.png"; // place image here
  const resumePDF = "/Azeem_Khan_Resume.pdf";

  return (
    <section
      id="resume"
      className="py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start"
    >
      {/* Left: Resume Content */}
      <div className="w-full md:w-2/3">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        {/* Experience */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-accent">Experience</h3>
          <ul className="space-y-4">
            {resume.experience.map((item, idx) => (
              <motion.li
                key={idx}
                className="bg-card p-4 rounded shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="font-bold">{item.role} @ {item.company}</div>
                <div className="text-secondary text-sm">{item.period}</div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-accent">Education</h3>
          <ul className="space-y-4">
            {resume.education.map((item, idx) => (
              <motion.li
                key={idx}
                className="bg-card p-4 rounded shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="font-bold">{item.degree}</div>
                <div className="text-secondary text-sm">
                  {item.university} – {item.duration} ({item.grade})
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Resume Preview + Download */}
      <div className="w-full md:w-1/3 flex flex-col items-center">
        <motion.img
          src={previewImage}
          alt="Resume"
          onError={(e) => {
            // e.currentTarget.src = "/assets/resume-icon.png";
            e.currentTarget.src = "/resume-preview.png";
          }}
          className="w-full max-w-xs mb-4 rounded border bg-white p-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <a
          href={resumePDF}
          download
          className="bg-accent text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};
