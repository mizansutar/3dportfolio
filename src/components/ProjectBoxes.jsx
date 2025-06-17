import React, { useEffect, useRef } from 'react';
import './ProjectBoxes.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectBoxes = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    boxesRef.current.forEach((box, i) => {
      gsap.fromTo(box,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <section className="project-section">
      <h2 className="project-title">Projects</h2>
      <div className="project-grid">
        {[1, 2, 3, 4].map((item, i) => (
          <div
            key={i}
            className="project-box"
            ref={el => boxesRef.current[i] = el}
          >
            <h3>Project {item}</h3>
            <p>Details about project {item} go here.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectBoxes;
