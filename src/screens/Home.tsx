import React, { useEffect, useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Server,
  Smartphone,
} from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import ParticleBackground from "../components/ParticleBackground";
import "./Home.css";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center px-20 overflow-hidden">
      <ParticleBackground />

      <div className="flex w-full justify-between items-center">
        <div
          ref={containerRef}
          className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 relative z-10 hero-content ${
            isLoaded ? "loaded" : ""
          }`}
        >
          <div className="space-y-8">
            <div className="intro-section">
              <div className="overflow-hidden">
                <h2 className="text-xl font-medium text-blue-300 transform translate-y-0 animate-fade-in-up delay-200">
                  Hello, I'm
                </h2>
              </div>

              <div className="name-container relative">
                <AnimatedText
                  text="Vinit Sharma"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 relative z-10"
                  delay={400}
                />
                <div className="name-underline"></div>
              </div>

              <div className="typing-container mt-4">
                <div className="flex items-center">
                  <span className="text-xl md:text-2xl text-gray-300 typing-text">
                    Full Stack and App Developer
                  </span>
                  <span className="typing-cursor"></span>
                </div>
              </div>
            </div>

            <div className="tech-icons flex space-x-4 overflow-hidden">
              <div
                className="tech-icon-wrapper animate-fade-in-up"
                style={{ animationDelay: "600ms" }}
              >
                <Code size={24} className="text-blue-400" />
              </div>
              <div
                className="tech-icon-wrapper animate-fade-in-up"
                style={{ animationDelay: "700ms" }}
              >
                <Server size={24} className="text-purple-400" />
              </div>
              <div
                className="tech-icon-wrapper animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              >
                <Smartphone size={24} className="text-pink-400" />
              </div>
            </div>

            <div className="description-container overflow-hidden">
              <p className="text-gray-400 text-lg transform translate-y-0 animate-fade-in-up delay-600">
                I'm a passionate Full Stack and App Developer with a strong
                background in building innovative digital solutions.
              </p>
            </div>

            <div className="social-links flex space-x-5 pt-4 overflow-hidden">
              <a
                href="https://github.com"
                className="social-icon-wrapper animate-fade-in-up"
                style={{ animationDelay: "700ms" }}
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="social-icon-wrapper animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:vinitsharmapc827@gmail.com"
                className="social-icon-wrapper animate-fade-in-up"
                style={{ animationDelay: "900ms" }}
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="action-buttons pt-6 flex flex-wrap gap-4 overflow-hidden">
              <div
                className="button-wrapper animate-fade-in-up"
                style={{ animationDelay: "1000ms" }}
              >
                <a href="#about" className="primary-button group">
                  <span className="button-text">About Me</span>
                  <ExternalLink
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                  <div className="button-glow"></div>
                </a>
              </div>

              <div
                className="button-wrapper animate-fade-in-up"
                style={{ animationDelay: "1100ms" }}
              >
                <a
                  href="/resume.pdf"
                  download="Vinit_Sharma_Resume.pdf"
                  className="secondary-button group"
                >
                  <span className="button-text">Download Resume</span>
                  <Download
                    size={18}
                    className="ml-2 group-hover:translate-y-1 transition-transform"
                  />
                </a>
                
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-1/2 h-screen relative">
          <img
            src="/assets/hero5.png"
            alt="imggg"
            className="w-full h-[105vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
