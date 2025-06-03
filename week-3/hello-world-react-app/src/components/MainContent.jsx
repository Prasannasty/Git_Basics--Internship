import React from 'react';

const MainContent = () => {
  const mainContentStyle = {
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1.2rem',
  };

  return (
    <main style={mainContentStyle}>
      <p>Welcome to my React app! This is the main content area.</p>
    </main>
  );
};

export default MainContent;