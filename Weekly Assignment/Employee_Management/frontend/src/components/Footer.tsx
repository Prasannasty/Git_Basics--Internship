import React from 'react';
import './HeaderFooter.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Employee Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
