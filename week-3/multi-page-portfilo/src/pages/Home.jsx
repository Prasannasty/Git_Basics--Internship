import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f9fc",
        py: { xs: 6, sm: 8 },  // more padding on larger screens
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}>
          Welcome to my website!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
          Hi, I'm Prasanna
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          I specialize in building modern, responsive web applications using React, JavaScript, and CSS
          frameworks. Passionate about clean code, intuitive UX, and solving real-world problems through
          technology.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 2,
            flexWrap: "wrap",
            "& > *": { minWidth: { xs: "100%", sm: "auto" } }, // buttons full width on xs
          }}
        >
          <Button variant="contained" size="large" component={RouterLink} to="/contact" fullWidth={{ xs: true, sm: false }}>
            Let's Connect
          </Button>

          <Button
            variant="outlined"
            size="large"
            href="/resume.pdf"
            download
            fullWidth={{ xs: true, sm: false }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
