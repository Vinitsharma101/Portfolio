import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft } from "lucide-react";
import  RotatingProjects  from "../components/RotatingProjects";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const projects: Project[] = [

  {
    title: "Project Management Web App",
    description:
      "A feature-rich platform for managing private projects, tracking tasks, handling issues, and team collaboration. Includes user authentication and dynamic dashboards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "Project Management Dashboard",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/project-manager",
    liveUrl: "https://project-manager-app.vercel.app",
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform featuring product listings, cart functionality, user authentication, and order management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1606312618775-897448ae79ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "E-Commerce Website",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/e-commerce-site",
    liveUrl: "https://shopwithvinit.vercel.app",
  },
  {
    title: "Music Web App",
    description:
      "A modern music streaming application with dynamic playlists, song discovery, and a smooth, responsive interface.",
    technologies: ["MERN", "React", "Node.js", "MongoDB", "Express"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1581276879432-c44c0b16d37f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "Music Streaming App",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/music-app",
    liveUrl: "https://vinitmusic.vercel.app",
  },
  {
    title: "Crypto Tracker API",
    description:
      "Backend service that tracks live cryptocurrency prices using the CoinGecko API and serves them through RESTful endpoints.",
    technologies: ["Node.js", "Express", "MongoDB", "CoinGecko API"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1622631614442-65b5e94745b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "Crypto Price Tracker",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/crypto-tracker-api",
    liveUrl: "https://crypto-api-vinit.onrender.com",
  },
  {
    title: "Authentication System",
    description:
      "Reusable backend authentication system with signup, login, password hashing, and JWT-based session management.",
    technologies: ["Node.js", "Express", "JWT", "bcrypt", "MongoDB"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1633356122031-0f245564f4b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "Secure Auth System",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/auth-system",
    liveUrl: "https://auth-vinit.onrender.com",
  },
  {
    title: "Language Translator App",
    description:
      "Real-time language translator that detects input text and returns translated output using third-party translation APIs.",
    technologies: ["React", "Node.js", "API Integration", "Express"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1614850523450-4d4e7bd9ef25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "Language Translator App",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/translator-app",
    liveUrl: "https://translator-vinit.vercel.app",
  },
  {
    title: "Chat Application",
    description:
      "A cross-platform real-time chat application built using MERN stack and React Native. Supports individual and group conversations.",
    technologies: ["MERN", "React Native", "Socket.io", "Firebase"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1616531770192-9a0f63c5e40c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        alt: "Chat App UI",
      },
    ],
    githubUrl: "https://github.com/vinitsharma/chat-app",
    liveUrl: "https://chat-vinit.vercel.app",
  }


    // ... rest of the projects array ...
  ];

  return (
    <div className="py-24 bg-dark-surface min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">
          Projects
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Showcasing my recent work and the technologies I've used to build
          innovative solutions.
        </p>

        <RotatingProjects projects={projects} onProjectClick={handleProjectClick} />

        {/* Project Details Modal */}
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
    </div>
  );
};

export default Projects;
