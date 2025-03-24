// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const fadeIn = (delay = 0) => ({
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
// });

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20"
//     >
//       {/* Title */}
//       <motion.h1
//         variants={fadeIn(0.2)}
//         initial="hidden"
//         animate="visible"
//         className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
//       >
//         About Me
//       </motion.h1>

//       {/* Bio Section */}
//       <motion.div
//         variants={fadeIn(0.4)}
//         initial="hidden"
//         animate="visible"
//         className="mt-6 max-w-3xl text-lg text-gray-300 text-center"
//       >
//         <p>
//           I’m a passionate{" "}
//           <span className="text-purple-400 font-semibold">
//             Fullstack Developer
//           </span>{" "}
//           with a love for building intuitive, high-performance applications. I
//           specialize in modern web technologies, delivering seamless user
//           experiences. My goal is to create solutions that are both innovative
//           and user-friendly, always aiming to exceed expectations.
//         </p>
//       </motion.div>

//       {/* Skills Section */}
//       <motion.div
//         variants={fadeIn(0.6)}
//         initial="hidden"
//         animate="visible"
//         className="mt-12 max-w-3xl text-lg text-gray-300 text-center"
//       >
//         <h2 className="text-2xl font-semibold text-white">
//           Technologies I Use
//         </h2>
//         <ul className="mt-4 list-disc pl-6 text-left">
//           <li>JavaScript (React, Node.js)</li>
//           <li>TypeScript</li>
//           <li>HTML, CSS, SCSS</li>
//           <li>Tailwind CSS</li>
//           <li>Git & GitHub</li>
//           <li>REST APIs</li>
//           <li>SQL and NoSQL Databases (PostgreSQL, MongoDB)</li>
//         </ul>
//       </motion.div>

//       {/* My Journey Section */}
//       <motion.div
//         variants={fadeIn(0.8)}
//         initial="hidden"
//         animate="visible"
//         className="mt-12 max-w-3xl text-lg text-gray-300 text-center"
//       >
//         <h2 className="text-2xl font-semibold text-white">My Journey</h2>
//         <p className="mt-4">
//           My journey as a developer started with a fascination for
//           problem-solving. Over the years, I’ve honed my skills through a mix of
//           personal projects, freelance work, and collaborating with talented
//           teams. I love the process of turning ideas into fully functional,
//           efficient applications.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default About;

"use client"; // Add this to ensure this file is treated as a client-side component

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const About = () => {
  const [isClient, setIsClient] = useState(false);

  // Check for window to ensure the code runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Return null until client-side rendering

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20"
    >
      {/* Title */}
      <motion.h1
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.div
        variants={fadeIn(0.4)}
        initial="hidden"
        animate="visible"
        className="mt-6 max-w-3xl text-lg text-gray-300 text-center"
      >
        <p>
          I’m a passionate{" "}
          <span className="text-purple-400 font-semibold">Developer</span> with
          a love for building intuitive, high-performance applications. I
          specialize in modern web technologies, delivering seamless user
          experiences. My goal is to create solutions that are both innovative
          and user-friendly, always aiming to exceed expectations.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        variants={fadeIn(0.6)}
        initial="hidden"
        animate="visible"
        className="mt-12 max-w-3xl text-lg text-gray-300 text-center"
      >
        <h2 className="text-2xl font-semibold text-white">
          Technologies I Use
        </h2>
        <ul className="mt-4 list-disc pl-6 text-left">
          <li>JavaScript (React, Node.js)</li>
          <li>TypeScript</li>
          <li>HTML, CSS, SCSS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
          <li>SQL and NoSQL Databases (PostgreSQL, MongoDB)</li>
        </ul>
      </motion.div>

      {/* My Journey Section */}
      <motion.div
        variants={fadeIn(0.8)}
        initial="hidden"
        animate="visible"
        className="mt-12 max-w-3xl text-lg text-gray-300 text-center"
      >
        <h2 className="text-2xl font-semibold text-white">My Journey</h2>
        <p className="mt-4">
          My journey as a developer started with a fascination for
          problem-solving. Over the years, I’ve honed my skills through a mix of
          personal projects, freelance work, and collaborating with talented
          teams. I love the process of turning ideas into fully functional,
          efficient applications.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
