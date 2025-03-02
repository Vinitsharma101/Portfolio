import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const projects: Project[] = [
    {
      title: "Music Streaming Platform",
      description:
        "A full-stack music streaming application with features like playlist creation, artist following, and personalized recommendations.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      images: [
        {
          url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Music streaming app interface",
        },
        {
          url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Music player view",
        },
        {
          url: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Playlist management",
        },
      ],
      githubUrl: "https://github.com/Vinitsharma101/MusicPLayer...-MERN-",
      liveUrl: "https://soulifyy.vercel.app/",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency tracking application with price alerts, portfolio management, and historical data visualization.",
      technologies: ["React", "Chart.js", "Firebase", "CoinGecko API"],
      images: [
        {
          url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
          alt: "Crypto dashboard",
        },
        {
          url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Price charts",
        },
        {
          url: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
          alt: "Portfolio view",
        },
      ],
      githubUrl: "https://github.com/Vinitsharma101/KoinXbackend-assignment",
      liveUrl: "https://github.com/Vinitsharma101/KoinXbackend-assignment",
    },
    {
      title: "Secure Authentication System",
      description:
        "A reusable backend authentication system with JWT-based authentication, password hashing, and secure user management.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Bcrypt",
        "Firebase",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "User authentication dashboard",
        },
        {
          url: "https://files.oaiusercontent.com/file-2bJVFxCiovdqnAyBxRnnuf?se=2025-03-02T13%3A23%3A47Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db8ebfe8c-1582-4b4d-847a-3ad932efb26b.webp&sig=UP43AsZs6fwT9ykLNIUQndIETZiuwjRzDpPRxEpLanY%3D",
          alt: "JWT token validation screen",
        },
      ],
      githubUrl:
        "https://github.com/Vinitsharma101/Auth-Backend-gatekeeper-api-",
      liveUrl: "https://github.com/Vinitsharma101/Auth-Backend-gatekeeper-api-",
    },
    {
      title: "Language Translator App",
      description:
        "Mobile application that provides real-time translation between multiple languages with speech recognition and text-to-speech capabilities.",
      technologies: [
        "React Native",
        "Redux",
        "Google Translate API",
        "Firebase",
      ],
      images: [
        
        {
          url: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Language selection",
        },
        {
          url: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Voice recognition feature",
        },
      ],
      githubUrl: "https://github.com/Vinitsharma101",
      liveUrl: "https://github.com/Vinitsharma101",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A mobile chat application built with React Native, enabling real-time messaging, media sharing, and notifications.",
      technologies: ["React Native", "Firebase", "Socket.io", "Redux", "Expo"],
      images: [
        {
          url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Chat interface with user messages",
        },
        {
          url: "https://imgs.search.brave.com/P9JidKoNfl3ue8pp9Z4lR454EcUl9W4tbXpFCTCHmjc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/LzIwMjMvMDEvaW1h/Z2U5LTIucG5n",
          alt: "Contact list with online users",
        },
        
      ],
      githubUrl: "https://github.com/Vinitsharma101/Chat-app",
      liveUrl: "https://github.com/Vinitsharma101/Chat-app",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">Projects</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Showcasing my recent work and the technologies I've used to build innovative solutions.
          </p>
          
          <div className="space-y-32">
            {projects.map((project, projectIndex) => (
              <ProjectCard key={projectIndex} project={project} index={projectIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isEven = index % 2 === 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}>
      {/* Project Images Carousel */}
      <div className="w-full md:w-3/5 relative group">
        <div className="relative overflow-hidden rounded-xl bg-black/30 border border-gray-800 aspect-video shadow-xl">
          {/* Main Image */}
          <div className="absolute inset-0 transition-opacity duration-500">
            <img 
              src={project.images[currentImageIndex].url} 
              alt={project.images[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImageIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnail Preview */}
        <div className="hidden md:flex justify-center mt-4 space-x-3">
          {project.images.map((image, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                i === currentImageIndex 
                  ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-dark-surface' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image.url} 
                alt={`Thumbnail ${i + 1}`}
                className="w-16 h-12 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Project Info */}
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className={`p-6 md:p-8 rounded-xl bg-gradient-to-br from-dark-bg to-black/80 border border-gray-800 shadow-lg relative overflow-hidden ${
          isEven ? 'md:-ml-16 z-10' : 'md:-mr-16 z-10'
        }`}>
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </a>
              )}
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;