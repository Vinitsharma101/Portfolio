import React from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  ExternalLink,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column - Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a Computer Science undergraduate at Chandigarh University
                (2022-2026) with a passion for full-stack development. I
                specialize in building modern, responsive web and mobile
                applications using the MERN stack and React Native.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in C++, JavaScript and Data Structures
                & Algorithms (DSA), I aim to create impactful digital solutions.
                I have experience working with real-time applications, API
                development, and cloud technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I’m deeply passionate about solving real-world problems through
                technology and constantly strive to improve my skills. Whether
                it’s learning new frameworks like Next.js or exploring
                cutting-edge tools, I’m always eager to stay ahead in the
                ever-evolving tech landscape.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-medium text-white mb-3">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-accent-blue mr-2">•</span>
                    <span>Email: vinitsharmapc827@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column - Tech Enthusiast Container */}
            <div>
              <div className="relative p-6 bg-black/50 rounded-xl border border-gray-800 overflow-hidden h-full">
                {/* Background tech logos (decorative) */}
                <div className="absolute inset-0 opacity-10 flex flex-wrap justify-center items-center gap-4 p-4">
                  {Array(20)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={`bg-${index}`}
                        className="text-gray-400 transform rotate-12"
                      >
                        {index % 5 === 0 ? (
                          <Code size={28} />
                        ) : index % 5 === 1 ? (
                          <Database size={28} />
                        ) : index % 5 === 2 ? (
                          <Globe size={28} />
                        ) : index % 5 === 3 ? (
                          <Server size={28} />
                        ) : (
                          <Smartphone size={26} />
                        )}
                      </div>
                    ))}
                </div>

                {/* Tech Enthusiast Label */}
                <div className="relative z-10 mb-8">
                  <div className="text-gray-400 mb-1">Tech Enthusiast</div>
                  <h4 className="text-xl font-semibold text-white">
                    Passionate about cutting-edge development technologies
                  </h4>
                </div>

                <div className="relative z-10 space-y-4 pt-5">
                  <p className="text-gray-300">
                    I'm constantly exploring new technologies and frameworks to
                    enhance my development skills and create better solutions.
                  </p>

                  <p className="text-gray-300">
                    My journey in tech is driven by curiosity and a desire to
                    build applications that make a difference.
                  </p>

                  <div className="pt-4">
                    <a
                      href="#tech"
                      className="inline-flex items-center  px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all text-sm"
                    >
                      View My Tech Stack
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
