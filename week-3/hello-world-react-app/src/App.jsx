import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const App = () => {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle = {
    flex: 1,
  };

  return (
    <div style={appStyle}>
      <Header />
      <div style={mainContentStyle}>
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;