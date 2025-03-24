"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div
        id="projects"
        className="pt-20 pb-20 px-6 flex flex-col items-center justify-center"
      >
        <motion.h1
          variants={fadeIn(0.2)}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          My Projects
        </motion.h1>

        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          animate="visible"
          className="mt-8 w-full max-w-4xl"
        >
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Project One: My Awesome App
            </h3>
            <p className="text-gray-300 mt-2">
              This project is a full-stack web application that allows users to
              track their goals. Built with React, Node.js, and MongoDB.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/your-username/project-one"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-cyan-400"
              >
                GitHub Repository
              </a>
              <a
                href="https://project-one-live.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-cyan-400"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Project Two: E-Commerce Platform
            </h3>
            <p className="text-gray-300 mt-2">
              A fully functional e-commerce website with product listings, a
              shopping cart, and user authentication. Built with React, Express,
              and MySQL.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/your-username/project-two"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-cyan-400"
              >
                GitHub Repository
              </a>
              <a
                href="https://project-two-live.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-cyan-400"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Project Three: Personal Blog
            </h3>
            <p className="text-gray-300 mt-2">
              A personal blog built with Next.js and Contentful. It features
              dynamic content and a sleek design with dark mode support.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/your-username/project-three"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-cyan-400"
              >
                GitHub Repository
              </a>
              <a
                href="https://project-three-live.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-cyan-400"
              >
                Live Demo
              </a>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
