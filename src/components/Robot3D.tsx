import { useEffect, useRef, useState } from 'react';

const Robot3D = () => {
  const robotRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / centerX) * 15; // Max 15 degrees
      const rotateX = ((centerY - e.clientY) / centerY) * 10; // Max 10 degrees
      
      setMousePos({ x: rotateY, y: rotateX });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <div 
      ref={robotRef}
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none"
      style={{
        transform: `translate(-50%, -50%) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div 
        className={`relative cursor-pointer pointer-events-auto transition-all duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        } ${isClicked ? 'animate-bounce' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Robot Body */}
        <div className="relative w-24 h-32 mx-auto">
          {/* Head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-accent to-primary rounded-lg shadow-lg animate-float">
            {/* Eyes */}
            <div className="absolute top-4 left-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-4 right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {/* Antenna */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-4 bg-primary"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full animate-glow-pulse"></div>
          </div>
          
          {/* Body */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-card to-muted rounded-lg border border-border">
            {/* Chest Panel */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-primary/20 to-accent/20 rounded border border-primary/30">
              <div className="absolute top-1 left-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-muted-foreground rounded"></div>
            </div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-16 -left-2 w-4 h-12 bg-gradient-to-b from-card to-muted rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-16 -right-2 w-4 h-12 bg-gradient-to-b from-card to-muted rounded-full animate-float" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Legs */}
          <div className="absolute top-28 left-2 w-3 h-8 bg-gradient-to-b from-muted to-card rounded-full"></div>
          <div className="absolute top-28 right-2 w-3 h-8 bg-gradient-to-b from-muted to-card rounded-full"></div>
          
          {/* Rotating Gears */}
          <div className="absolute top-20 left-0 w-4 h-4 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 bg-primary"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-primary"></div>
          </div>
          <div className="absolute top-20 right-0 w-4 h-4 border-2 border-accent rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 bg-accent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-accent"></div>
          </div>
        </div>
        
        {/* Interaction Effects */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
        )}
        
        {isClicked && (
          <div className="absolute -inset-4 rounded-full border-2 border-accent animate-ping"></div>
        )}
      </div>
    </div>
  );
};

export default Robot3D;