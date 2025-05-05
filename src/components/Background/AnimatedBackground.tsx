
import { useEffect, useRef } from 'react';
import '../../styles/animatedBackground.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  element: HTMLDivElement;
}

const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Create particles
    const createParticles = () => {
      // Clean up existing particles first
      particles.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      
      particles.current = [];
      
      // Calculate number of particles based on screen size
      const particleCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
      
      for (let i = 0; i < particleCount; i++) {
        const element = document.createElement('div');
        element.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.animationDuration = `${Math.random() * 5 + 3}s`;
        element.style.animationDelay = `${Math.random() * 2}s`;
        
        backgroundRef.current?.appendChild(element);
        
        particles.current.push({
          x,
          y,
          size,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          element
        });
      }
    };

    // Animation frame for moving particles
    const moveParticles = () => {
      particles.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
        
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });
      
      requestAnimationFrame(moveParticles);
    };

    // Initialize particles
    createParticles();
    moveParticles();

    // Handle window resize
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Clean up particles
      particles.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
    };
  }, []);

  return <div ref={backgroundRef} className="animated-background" />;
};

export default AnimatedBackground;
