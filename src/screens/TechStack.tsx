import FlowingMenu from "../components/FlowingMenu";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const techStackItems = [
  {
    text: "Frontend",
    icons: [
      "/assets/HTML5.png",
      "/assets/CSS3.png",
      "/assets/JavaScript.png",
      "/assets/TypeScript.png",
      "/assets/React.png",
      "/assets/Next.js.png",
    ],
  },
  {
    text: "Backend",
    icons: [
      "/assets/Node.js.png",
      "/assets/Python.png",
      "/assets/Firebase.png",
      "/assets/Express.png",
      "/assets/Linux.png",
      "/assets/FastAPI.png",
    ],
  },
  {
    text: "Databases",
    icons: [
      "/assets/Firebase.png",
      "/assets/MongoDB.png",
      "/assets/MySQL.png",
      "/assets/Google Cloud.png",
    ],
  },
  {
    text: "Developer Tools",
    icons: [
      "/assets/VS Code.png",
      "/assets/Git.png",
      "/assets/Postman.png",
      "/assets/Figma.png",

      "/assets/Nodemon.png",
    ],
  },
];

const TechStack = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="tech"
      className="min-h-screen bg-[rgb(12,12,12)] flex items-center justify-center p-8 relative overflow-hidden select-none"
    >
      <div className="w-full max-w-6xl">
        {/* Heading with line */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text relative inline-block after:content-[''] after:block after:w-20 after:h-[4px] after:bg-gradient-to-r after:from-purple-500 after:to-blue-500 after:mx-auto after:mt-3">
            Tech Stack
          </h2>
        </div>

        {/* Subheading */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
          My toolkit for creating modern, scalable, and user-friendly
          applications across web and mobile platforms.
        </p>

        {/* Flowing menu */}
        <div className="h-[300px]">
          <FlowingMenu items={techStackItems} />
        </div>
      </div>

      {/* Animated Electric Icon */}
      <motion.div
        className="absolute right-20 -bottom-20 w-60 h-80 opacity-30 select-none"
        animate={{
          y: -scrollY * 0.37 + 100, // pushes it 100px lower
        }}
        transition={{
          y: { type: "spring", stiffness: 70 },
        }}
      >
        <motion.img
          src="/assets/eletric.b42bee08058115fa9ebb.png"
          alt="Electric icon"
          className="w-full h-full object-contain "
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{
            scale: {
              duration: 0.5,
            },
          }}
        />
      </motion.div>
    </div>
  );
};

export default TechStack;
