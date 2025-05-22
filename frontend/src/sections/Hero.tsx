// import { motion } from "framer-motion";
// import { resume } from "../constants/data";

// export const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24">
//       <motion.h1
//         className="text-5xl md:text-6xl font-bold mb-4"
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hi, I'm <span className="text-accent">{resume.name}</span>
//       </motion.h1>
//       <motion.p
//         className="text-lg text-secondary max-w-xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         {resume.summary}
//       </motion.p>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import { resume } from "../constants/data";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-accent">{resume.name}</span>
      </motion.h1>

      {/* Image Added Here */}
      <motion.img
        src="/MyImage.jpg"  // apni image ka path yahan daal
        alt="Azeem Khan"
        className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      <motion.p
        className="text-lg text-secondary max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {resume.summary}
      </motion.p>
    </section>
  );
};
