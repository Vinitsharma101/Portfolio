
import Home from './screens/Home';
import Navbar from './components/Navbar';
import About from './screens/About';
import TechStack from './screens/TechStack';
import Projects from './screens/Projects';
import Contact from './screens/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTopButton from './components/ScrollToTopButton';
import  { useState } from 'react';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        <Home />
      </section>
      {/* About Section */}
      <About />
      {/* Tech Stack Section */}
      <TechStack />
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Modal */}
      {isContactOpen && <Contact onClose={() => setIsContactOpen(false)} />}
      <ScrollToTopButton onOpenContact={() => setIsContactOpen(true)} />
    </div>
  );
}

export default App;