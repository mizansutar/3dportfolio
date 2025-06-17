import React, { useEffect, useState } from 'react';
import './StarsRain.css';

const StarsRain = () => {
  const [stars, setStars] = useState([]);

useEffect(() => {
  const interval = setInterval(() => {
    const newStars = Array.from({ length: 15 }).map(() => ({
      id: Date.now() + Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 2 + Math.random() * 2,
    }));
    setStars(prev =>
      [...prev.filter(star => Date.now() - star.id < 3000), ...newStars]
    );
  }, 200); // Faster spawn rate

  return () => clearInterval(interval);
}, []);


  return (
    <div className="stars-rain-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="falling-star"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsRain;
