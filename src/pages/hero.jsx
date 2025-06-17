import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import resume from './resume.pdf';
import gsap from 'gsap';

const Hero = ({ isMoon }) => {
  const containerRef = useRef(null);
  const wordRef = useRef(null);
  const descRef = useRef(null);

  const words = [
    "developer",
    "AI Engineer",
    "problem solver",
    "JS lover",
    "open-source contributor",
    "tech visionary",
    "React enthusiast",
    "Node.js expert",
    "ML experimenter",
    "UI/UX explorer"
  ];

  const descriptions = {
    developer: "I craft scalable and interactive applications that solve real-world problems.",
    "AI Engineer": "Designing intelligent systems that learn, adapt, and evolve using modern AI techniques.",
    "problem solver": "Breaking down complex problems into elegant code-based solutions.",
    "JS lover": "Harnessing JS to power everything from web to logic and data manipulation.",
    "open-source contributor": "Pushing value into the community through shared innovations.",
    "tech visionary": "Exploring cutting-edge technology to shape the future.",
    "React enthusiast": "Building reactive and fast UIs that users love.",
    "Node.js expert": "Creating APIs and backend architectures that scale and perform.",
    "ML experimenter": "Applying machine learning to bring predictive intelligence to software.",
    "UI/UX explorer": "Crafting human-centric interfaces for seamless interaction."
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    words.forEach((word, i) => {
      tl.to(wordRef.current, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          wordRef.current.innerText = word;
          descRef.current.innerText = descriptions[word];
        }
      }).to(wordRef.current, { duration: 0.5, opacity: 1 });
    });

    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className={`hero-container ${isMoon ? 'dark-card' : 'light-card'}`}>
      <div className="text-hero">
        <h1 className="typing-line">
          Shaping <span ref={wordRef} className="word-highlight">developer</span>
        </h1>
        <p ref={descRef} className="description">
          I craft scalable and interactive applications that solve real-world problems.
        </p>
        <h2>Intro to React Project</h2>
        <h3>Welcome to the Real World</h3>
        <div className="buttons">
          <a href={resume} className="btn" download>
            <FaDownload /> Download Resume
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-btn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
