// src/components/Footer.jsx
import React from 'react';
import './Clock.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} navadhiti.</p>
    </div>
  );
};

export default Footer;
