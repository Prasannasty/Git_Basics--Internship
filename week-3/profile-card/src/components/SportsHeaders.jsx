import React from "react";

const SportsHeader = () => {
  const headerStyle = {
    background: "linear-gradient(to right, #0b3d91, #1e88e5)",
    color: "#fff",
    padding: "1.5rem 2rem",
    textAlign: "center",
    width: "100%",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: "relative", // or "fixed" if you want sticky
    top: 0,
    left: 0,
    zIndex: 1000
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
    letterSpacing: "1px",
    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
  };

  const subtitleStyle = {
    marginTop: "0.6rem",
    fontSize: "1.2rem",
    fontStyle: "italic",
    fontWeight: "300",
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}> Indian Cricket Legends</h1>
      <p style={subtitleStyle}>Celebrating the stars of Indian cricket with pride</p>
    </header>
  );
};

export default SportsHeader;
