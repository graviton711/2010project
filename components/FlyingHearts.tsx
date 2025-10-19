
import React, { useState, useEffect } from 'react';

interface Heart {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
}

const FlyingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`, // 5s to 10s
        animationDelay: `${Math.random() * 2}s` // 0s to 2s
      };
      
      setHearts(prevHearts => [...prevHearts, newHeart]);

      // Remove the heart after animation to keep the DOM clean
      setTimeout(() => {
        setHearts(prevHearts => prevHearts.filter(h => h.id !== newHeart.id));
      }, 10000); // Duration (10s) + delay (max 2s) > 10000ms
    };

    const intervalId = setInterval(createHeart, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-20">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 text-red-400 text-2xl animate-float-up"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FlyingHearts;
