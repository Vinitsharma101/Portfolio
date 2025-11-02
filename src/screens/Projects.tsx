import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ExternalLink, Github, ChevronLeft } from "lucide-react";
import { projects } from "../components/ProjectData";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const speed = 50;

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const contentWidth = contentRect.width;
      const requiredWidth = containerWidth * 2;
      const duplications = Math.ceil(requiredWidth / contentWidth) + 1;
      const from = 0;
      const to = -contentWidth * (duplications - 1);
      const distance = Math.abs(to - from);
      const duration = distance / speed;

      if (!isHovering) {
        controls.start({
          x: to,
          transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        });
      } else {
        controls.stop();
      }
    }
  }, [isHovering, controls]);

  const duplicatedProjects = Array(4)
    .fill(projects)
    .flat()
    .map((project, index) => ({ ...project, id: index }));

  return (
   <section id="projects" className="py-24 bg-dark-surface min-h-screen relative">
  {/* 🔹 BIG BACKGROUND TEXT */}
  <div className="absolute top-8 left-4 text-[12rem] md:text-[18rem] font-extrabold text-white/5 select-none pointer-events-none leading-none">
    PROJECTS
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
      Projects
    </h2>
    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
      Showcasing my recent work and the technologies I've used to build
      innovative solutions.
    </p>
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden  cursor-target"
        >
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-r from-dark-surface to-transparent" />

          <motion.div
            ref={contentRef}
            className="flex py-8"
            animate={controls}
            style={{ x }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="w-80 mx-7 min-w-[18rem] h-[375px] bg-gradient-to-br from-dark-bg to-black/80 border border-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 relative group"
                onClick={() => handleProjectClick(project.id)}
              >
                <img
                  src={project.images[0]?.url || ""}
                  alt={project.title}
                  className="  w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
                />
                <div className="absolute inset-0 p-5 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800/80 text-xs text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none bg-gradient-to-l from-dark-surface to-transparent" />
        </div>

        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-dark-bg border border-gray-800 rounded-2xl p-6 max-w-2xl w-full relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>

              <h3 className="text-xl font-bold text-white mb-4">
                {projects[selectedProject].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {projects[selectedProject].description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                {projects[selectedProject].githubUrl && (
                  <a
                    href={projects[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                )}

                {projects[selectedProject].liveUrl && (
                  <a
                    href={projects[selectedProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
