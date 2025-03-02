
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';
import Navbar from './components/Navbar';
import About from './screens/About';
import TechStack from './screens/TechStack';
import Projects from './screens/Projects';
import Contact from './screens/Contact';
import AnimatedBackground from './components/AnimatedBackground';
// import Cylinder from './3DPortfolio/Cylinder';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      {/* Navbar Component */}
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="flex-grow flex flex-col md:flex-row pt-16 content z-10"
      >
        {/* Left side - Name and Info (1/2) */}
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center p-8 md:p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium text-gray-400">Hello, I'm</h2>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text-name mt-2">
                Vinit Sharma
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mt-4">
                MERN Stack and App Developer
              </p>
            </div>

            <p className="text-gray-400 text-lg">
              I create modern, responsive web and mobile applications using the
              MERN stack and React Native.
            </p>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:vinitsharmapc827@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                About Me
                <ExternalLink size={18} className="ml-2" />
              </a>

              <a
                href="/resume.pdf"
                download="Vinit_Sharma_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-dark-surface border border-gray-700 hover:border-blue-500 rounded-lg text-white font-medium transition-all group"
              >
                Download Resume
                <Download
                  size={18}
                  className="ml-2 group-hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - 3D Model Viewer */}
        <div className="w-full md:w-1/2 h-screen relative">
        <img src="/assets/hero5.png" alt="imggg" className='w-full max-h-[100vh] '/>
      
      {/* <Cylinder /> */}
        </div>
      </section>
      {/* About Section */}
      <About />
      {/* Tech Stack Section */}
      <TechStack />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;