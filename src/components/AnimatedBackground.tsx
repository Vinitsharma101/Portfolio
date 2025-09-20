import React, { useEffect, useRef } from "react";
import figmaIcon from "/assets/Figma.png";
import linkedinIcon from "/assets/LinkedIn.png";
import nextjsIcon from "/assets/Next.js.png";
import nodejsIcon from "/assets/Node.js.png";
import reactIcon from "/assets/React.png";
import vscodeIcon from "/assets/VS Code.png";

const iconPaths = [
  figmaIcon,
  "/assets/Git.png",
  "/assets/JavaScript.png",
  
  linkedinIcon,
  
  nextjsIcon,
  nodejsIcon,
  reactIcon,
  
  vscodeIcon,
];

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const icons = Array.from(container.children) as HTMLImageElement[];

    icons.forEach((icon) => {
      const speedX = (Math.random() - 0.5) * 5;
      const speedY = (Math.random() - 0.5) * 5;
      const rotationSpeed = (Math.random() - 0.5) * 7;
      let rotation = Math.random() * 360;
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;

      const moveIcon = () => {
        x += speedX * 1.5;
        y += speedY * 1.5;
        rotation += rotationSpeed *5;

        if (x > window.innerWidth - 50 || x < 0)
          x = Math.max(0, Math.min(x, window.innerWidth - 50));
        if (y > window.innerHeight - 50 || y < 0)
          y = Math.max(0, Math.min(y, window.innerHeight - 50));

        icon.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        requestAnimationFrame(moveIcon);
      };

      moveIcon();
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ background: "rgba(0,0,0,0.1)" }}
    >
      {iconPaths.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Tech Icon"
          className="absolute float-icon"
          style={{
            width: "50px",
            height: "50px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.8,
          }}
          onError={(e) => {
            console.error(`Failed to load image: ${src}`);
            console.error(e);
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
