"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto py-20 px-6 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-violet-500 text-center mb-6">
        Contact Me
      </h2>
      <p className="text-center text-gray-300 mb-12 md:text-lg">
        Have a project in mind or just want to say hello? Fill the form below!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-sm mb-2 text-gray-400">Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-400">Your Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-2 text-gray-400">Your Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          Send Message <FiSend className="text-lg" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
