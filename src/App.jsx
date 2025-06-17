import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Model1 from './components/modelfirst/model1';
import SunMoon from './components/bulb/SunMoon';
import Hero from './pages/hero';

function App() {
  const [isMoon, setIsMoon] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIsMoon(prev => !prev), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`app-container ${isMoon ? 'moon-mode' : 'sun-mode'}`}>
        {!isMobile && !isMoon && (
          <div className="sky-clouds">
            <div className="cloud small" style={{ top: '10%', left: '5%' }} />
            <div className="cloud mid" style={{ top: '20%', left: '30%' }} />
            <div className="cloud big" style={{ top: '30%', left: '10%' }} />
            <div className="cloud mid" style={{ top: '40%', left: '60%' }} />
            <div className="cloud small" style={{ top: '50%', left: '80%' }} />
          </div>
        )}

        <Navbar />

        {!isMobile && <SunMoon isMoon={isMoon} />}

        {isMobile ? (
          <>
            <div className="hero-section">
              <Hero isMoon={isMoon} />
            </div>
            <div className="projects-section">
              <Model1 isMoon={isMoon} />
            </div>
          </>
        ) : (
          <>
            <div className="hero-info">
              <Hero isMoon={isMoon} />
            </div>
            <div className="canvas-wrapper">
              <Model1 isMoon={isMoon} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
