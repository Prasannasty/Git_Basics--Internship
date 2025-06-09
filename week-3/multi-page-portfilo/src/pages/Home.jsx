import React from "react";
import { Container, Typography, Button, Box, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to my website!
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Hi, I'm Prasanna
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        I specialize in building modern, responsive web applications using React, JavaScript, and CSS
        frameworks. Passionate about clean code, intuitive UX, and solving real-world problems through
        technology.
      </Typography>

     <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2, flexWrap: "wrap" }}>
  <Button variant="contained" size="large" component={RouterLink} to="/contact">
    Let's Connect
  </Button>

  <Button
    variant="outlined"
    size="large"
    href="/resume.pdf"
    download
  >
    Download Resume
  </Button>
</Box>
      
    </Container>
  );
};

export default Home;
