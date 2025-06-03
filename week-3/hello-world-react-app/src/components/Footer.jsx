import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <footer style={footerStyle}>
      <p>Today's Date: {currentDate}</p>
    </footer>
  );
};

export default Footer;