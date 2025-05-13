import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={textRef} className={`${className} animated-text-wrapper`}>
      <div className="animated-text-inner">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`animated-letter ${isVisible ? "visible" : ""}`}
            style={{
              transitionDelay: `${delay + index * 50}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
