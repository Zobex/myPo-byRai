"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 text-white pt-20 pb-20"
    >
      {/* Navbar */}

      {/* Title */}
      <motion.h1
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
      >
        Contact Me
      </motion.h1>

      {/* Contact Information */}
      <motion.div
        variants={fadeIn(0.4)}
        initial="hidden"
        animate="visible"
        className="mt-6 max-w-3xl text-lg text-gray-300 text-center mx-auto"
      >
        <p>
          Im always open to new opportunities and collaborations. Feel free to
          reach out to me via the following methods:
        </p>
      </motion.div>

      {/* Contact Links */}
      <motion.div
        variants={fadeIn(0.6)}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col items-center space-y-4"
      >
        <div className="flex items-center space-x-4">
          <a
            href="https://t.me/rai_muneez"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-400 hover:text-cyan-400"
          >
            <i className="fab fa-telegram fa-2x mr-2"></i> Telegram
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="mailto:rayyamuneez0@gmail.com"
            className="text-purple-400 hover:text-cyan-400"
          >
            <i className="fas fa-envelope fa-2x mr-2"></i> Email
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
