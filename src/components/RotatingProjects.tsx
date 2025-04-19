import React, { useState, useEffect } from "react";
import { Project } from "../screens/Projects";

interface RotatingProjectsProps {
  projects: Project[];
  onProjectClick: (index: number) => void;
}

const RotatingProjects: React.FC<RotatingProjectsProps> = ({ projects, onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an extended array with duplicated items for seamless loop
  // Simplify the extended array to just duplicate once
  const extendedProjects = [...projects, ...projects];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Reset to start when reaching the original projects length
        if (prevIndex >= projects.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-surface to-transparent z-10"></div>

      <div 
        className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (288 + 32)}px)`,
          width: `${extendedProjects.length * (288 + 32)}px`
        }}
      >
        {extendedProjects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer flex-shrink-0 w-72"
            onClick={() => onProjectClick(index % projects.length)}
          >
            <div className="w-full aspect-square relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-300">
              <img
                src={project.images[0].url}
                alt={project.title}
                className="w-full h-full object-cover transform rotate-0 group-hover:rotate-6 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-surface to-transparent z-10"></div>
    </div>
  );
};

export default RotatingProjects;