import React from 'react';
import { Code, Database, Globe, Server, Smartphone, FileCode, Layers, Workflow, GitBranch, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'other';
  description?: string;
}

const TechStack: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: 'React.js', 
      icon: <Code size={24} />, 
      category: 'frontend',
      description: 'Building interactive UIs with component-based architecture'
    },
    { 
      name: 'Next.js', 
      icon: <Globe size={24} />, 
      category: 'frontend',
      description: 'Server-side rendering and static site generation'
    },
    { 
      name: 'React Native', 
      icon: <Smartphone size={24} />, 
      category: 'frontend',
      description: 'Cross-platform mobile app development'
    },
    { 
      name: 'HTML/CSS/TailwindCSS', 
      icon: <FileCode size={24} />, 
      category: 'frontend',
      description: 'Crafting responsive and beautiful interfaces'
    },
    { 
      name: 'Node.js', 
      icon: <Server size={24} />, 
      category: 'backend',
      description: 'JavaScript runtime for server-side applications'
    },
    { 
      name: 'Express.js', 
      icon: <Workflow size={24} />, 
      category: 'backend',
      description: 'Fast, unopinionated web framework for Node.js'
    },
    { 
      name: 'Firebase', 
      icon: <Cloud size={24} />, 
      category: 'backend',
      description: 'Backend-as-a-service with real-time capabilities'
    },
    { 
      name: 'MongoDB', 
      icon: <Database size={24} />, 
      category: 'database',
      description: 'NoSQL database for modern applications'
    },
    { 
      name: 'Firebase', 
      icon: <Database size={24} />, 
      category: 'database',
      description: 'Relational database management'
    },
    { 
      name: 'Git', 
      icon: <GitBranch size={24} />, 
      category: 'other',
      description: 'Version control and collaboration'
    },
    { 
      name: 'Cloud Computing', 
      icon: <Cloud size={24} />, 
      category: 'other',
      description: 'Deploying and scaling applications'
    },
    { 
      name: 'Data Structures & Algorithms', 
      icon: <Layers size={24} />, 
      category: 'other',
      description: 'Problem-solving and optimization'
    },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend', color: 'from-blue-500 to-cyan-400' },
    { id: 'backend', name: 'Backend', color: 'from-purple-500 to-pink-500' },
    { id: 'database', name: 'Database', color: 'from-green-500 to-emerald-400' },
    { id: 'other', name: 'Other Skills', color: 'from-amber-500 to-orange-400' }
  ];

  return (
    <section id="tech" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text">Tech Stack</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            My toolkit for creating modern, scalable, and user-friendly applications across web and mobile platforms.
          </p>
          
          <div className="grid grid-cols-1 gap-16">
            {categories.map((category) => (
              <div key={category.id} className="relative">
                {/* Category Header with Gradient Line */}
                <div className="flex items-center mb-8">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <div className={`h-0.5 ml-6 flex-grow bg-gradient-to-r ${category.color}`}></div>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map((skill, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-dark-surface to-black border border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/30"
                      >
                        {/* Glowing corner effect */}
                        <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                        
                        <div className="relative p-6 z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                              {skill.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                          </div>
                          
                          {skill.description && (
                            <p className="text-gray-400 text-sm">{skill.description}</p>
                          )}
                        </div>
                        
                        {/* Bottom gradient line */}
                        <div className={`h-1 w-0 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500 ease-out`}></div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Floating tech icons background (decorative) */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.02] flex flex-wrap justify-center items-center gap-16 p-4 overflow-hidden">
            {Array(30).fill(0).map((_, index) => (
              <div 
                key={`float-${index}`} 
                className="text-white transform rotate-12 animate-pulse"
                style={{ 
                  animationDuration: `${8 + index % 5}s`,
                  opacity: 0.1 + (index % 10) / 100
                }}
              >
                {index % 6 === 0 ? <Code size={40} /> : 
                 index % 6 === 1 ? <Database size={40} /> : 
                 index % 6 === 2 ? <Globe size={40} /> : 
                 index % 6 === 3 ? <Server size={40} /> : 
                 index % 6 === 4 ? <Smartphone size={40} /> :
                 <Cloud size={40} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;