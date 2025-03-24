"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

// Fade-in Animation
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

// Typing Animation Effect
const words = [
  " I turn coffee into code.",
  " I solve puzzles with code.",
  " I solve puzzles with code.",
  " I code dreams into reality.",
  " Futuristic Designs.",
];

const HeroContent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Change words every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Scroll to Next Section
  // const handleScroll = () => {
  //   const nextSection = document.getElementById("about");
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center h-screen px-8 text-center"
    >
      {/* Decorative Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/30 to-cyan-700/30 blur-3xl opacity-20" />

      {/* Sparkles + Title */}
      <motion.div
        variants={fadeIn(0.2)}
        className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-6 py-2 rounded-full border border-white/20 shadow-lg"
      >
        <SparklesIcon className="w-5 h-5 text-purple-400" />
        <h1 className="text-sm font-medium text-white">Software Developer</h1>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={fadeIn(0.4)}
        className="mt-6 text-4xl font-extrabold text-white sm:text-5xl"
      >
        As A Developer,
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          {words[index]}
        </span>
      </motion.h1>

      <motion.p
        variants={fadeIn(0.6)}
        className="mt-4 max-w-2xl text-lg text-gray-300"
      >
        Every line of code is an opportunity to make a difference
      </motion.p>

      {/* <motion.button
        variants={fadeIn(0.8)}
        onClick={handleScroll}
        className="mt-6 px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 hover:opacity-90 transition-all duration-300"
      >
        msg
      </motion.button> */}
    </motion.div>
  );
};

export default HeroContent;
