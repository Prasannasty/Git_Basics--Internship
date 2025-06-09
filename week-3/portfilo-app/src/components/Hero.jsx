import React from 'react';
import { Box, Typography, Button, Divider, useTheme } from '@mui/material';
import '../styles/Hero.css';

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


        <Button
          variant="contained"
          className="hero-button"
          size="large"
          href="#contact"
          sx={{ mr: 2 }}
        >
          Get in Touch
        </Button>

        <Button
  variant="outlined"
  className="hero-button"
  size="large"
  component="a"
  href="/resume.pdf"
  download="Prasanna_Resume.pdf"
  sx={{
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      borderColor: theme.palette.primary.main,
    },
  }}
>
  Download Resume
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
