"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
        setToastVisible(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Email sending error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => setToastVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  return (
    <>
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-2 py-3 rounded-lg shadow-lg z-50"
          >
            Thanks for reaching out!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
                id="contact"

        className="max-w-6xl mx-auto py-20 px-6 text-white"
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

        <div className="grid md:grid-cols-2 gap-10 bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
            <div className="flex items-center gap-4 text-gray-300">
              <FaPhoneAlt className="text-violet-500" />
              <span>+91 70027 94617</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <FaEnvelope className="text-violet-500" />
              <span>maheshrao17199@gmail.com</span>
            </div>
            <p className="text-sm text-gray-400">
              I’m always open to discussing freelance work, collaboration, or just tech talk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2 text-gray-400">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              type="submit"
              disabled={loading}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-white ${
                loading
                  ? "bg-violet-400 cursor-not-allowed"
                  : "bg-violet-600 hover:bg-violet-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"} <FiSend className="text-lg" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
