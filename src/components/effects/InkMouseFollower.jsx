import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const InkMouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [inkDrops, setInkDrops] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update mouse position
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Only create ink drops when drawing or randomly with small probability
      if (isDrawing || Math.random() < 0.03) {
        createInkDrop(e.clientX, e.clientY);
      }
    };

    // Handle mouse press for continuous drawing
    const handleMouseDown = () => {
      setIsDrawing(true);
    };

    // Stop drawing when mouse released
    const handleMouseUp = () => {
      setIsDrawing(false);
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrawing]);
  
  // Function to create a new ink drop
  const createInkDrop = (x, y) => {
    // Generate unique ID for this ink drop
    const id = Date.now() + Math.random();
    
    // Create new ink drop with random properties
    const newDrop = {
      id,
      x,
      y,
      size: Math.random() * 20 + 5, // Random size between 5-25px
      opacity: Math.random() * 0.7 + 0.3, // Random opacity
      rotation: Math.random() * 360, // Random rotation
      variant: Math.floor(Math.random() * 4), // Different ink splatter variants
    };
    
    // Add to state and limit to 50 drops to improve performance
    setInkDrops(prevDrops => {
      const updatedDrops = [newDrop, ...prevDrops];
      if (updatedDrops.length > 50) {
        return updatedDrops.slice(0, 50);
      }
      return updatedDrops;
    });
  };
  
  // Function to remove an ink drop
  const removeInkDrop = (id) => {
    setInkDrops(prevDrops => prevDrops.filter(drop => drop.id !== id));
  };
  
  // Main ink cursor component
  const mainCursor = {
    x: mousePosition.x - 10,
    y: mousePosition.y - 10,
  };
  
  return (
    <div className="ink-follower-container" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {/* Main cursor */}
      <motion.div
        className="ink-cursor"
        style={{
          position: 'absolute',
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          mixBlendMode: 'multiply',
          filter: 'blur(1px)',
        }}
        animate={{
          x: mainCursor.x,
          y: mainCursor.y,
          scale: isDrawing ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      
      {/* Ink drops */}
      {inkDrops.map((drop) => (
        <motion.div
          key={drop.id}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: drop.size,
            height: drop.size,
            x: drop.x - drop.size / 2,
            y: drop.y - drop.size / 2,
            backgroundColor: 'black',
            borderRadius: '50%',
            rotate: drop.rotation,
            mixBlendMode: 'multiply',
            filter: 'blur(1px)',
            zIndex: 9998,
          }}
          initial={{ 
            opacity: drop.opacity,
            scale: 0, 
            borderRadius: '50%',
          }}
          animate={{
            opacity: [drop.opacity, drop.opacity * 0.7],
            scale: [0, 1],
            borderRadius: ['50%', drop.variant === 0 ? '50% 20% 40% 30%' : 
                                  drop.variant === 1 ? '30% 50% 20% 40%' : 
                                  drop.variant === 2 ? '20% 40% 50% 30%' : 
                                  '40% 30% 30% 50%'],
          }}
          transition={{ 
            duration: 0.5,
          }}
          onAnimationComplete={() => {
            // Start fading out animation after a delay
            setTimeout(() => {
              removeInkDrop(drop.id);
            }, Math.random() * 5000 + 2000); // Random lifetime between 2-7 seconds
          }}
        />
      ))}
      
      {/* Dripping effect */}
      {isDrawing && inkDrops.slice(0, 5).map((drop) => (
        <motion.div
          key={`drip-${drop.id}`}
          style={{
            position: 'absolute',
            width: drop.size / 3,
            borderRadius: '40% 30% 50% 40%',
            background: 'black',
            opacity: drop.opacity * 0.8,
            x: drop.x,
            top: drop.y,
            zIndex: 9997,
          }}
          animate={{
            height: [0, Math.random() * 50 + 20],
            y: [0, Math.random() * 100 + 50],
            opacity: [drop.opacity * 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default InkMouseFollower; 