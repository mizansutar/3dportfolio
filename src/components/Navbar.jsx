import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar glassy`}>
      <div className="logo">ONAC</div>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
      <ul className={`nav-links ${open ? 'active' : ''}`}>
        <li style={{ animationDelay: '0.1s' }}><a href="#projects">Projects</a></li>
        <li style={{ animationDelay: '0.2s' }}><a href="#about">About</a></li>
        <li style={{ animationDelay: '0.3s' }}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
