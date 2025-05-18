import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-card text-white"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-card text-white"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 rounded bg-card text-white"
          onChange={handleChange}
          value={formData.message}
          required
        />
        <button
          type="submit"
          className="bg-accent px-6 py-2 rounded text-white hover:bg-blue-600"
        >
          Send
        </button>
        {status && <p className="text-sm mt-2 text-secondary">{status}</p>}
      </form>
    </section>
  );
};
