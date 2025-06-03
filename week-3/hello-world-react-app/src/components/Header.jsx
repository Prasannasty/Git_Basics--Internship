import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'rgba(76, 175, 80, 0.2)', 
    color: '#2e7d32', 
    textAlign: 'center',
    padding: '1rem',
    width: '100vw',
    boxSizing: 'border-box',
  };

  return (
    <header style={headerStyle}>
      <h1>Prasanna Shetty</h1>
    </header>
  );
};

export default Header;
