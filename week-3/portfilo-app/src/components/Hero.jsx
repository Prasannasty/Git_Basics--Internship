import React from 'react';
import { Box, Typography, Button, Divider, useTheme } from '@mui/material';
import '../styles/Hero.css';
import codingImage from '../assets/photo.svg';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      className="hero-wrapper"
      sx={{
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
          : 'linear-gradient(to right, #e0eafc, #cfdef3)',
        color: theme.palette.text.primary,
      }}
    >
      <Box className="hero-left">
        <Typography variant="h2" className="hero-title" gutterBottom>
          Hello, I'm <span className="hero-highlight">Prasanna</span>
        </Typography>

        <Typography variant="h6" className="hero-subtitle" gutterBottom>
          Frontend Developer passionate about creating <br /> elegant and intuitive user interfaces.
        </Typography>

        <Divider className="hero-divider" />

   
        <Button
          variant="contained"
          className="hero-button"
          size="large"
          href="#contact"
        >
          Get in Touch
        </Button>
      </Box>
<Box className="hero-right">
  <img
    src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png"
    alt="Coding illustration"
    className="hero-image"
  />
</Box>
    </Box>
  );
};

export default Hero;
