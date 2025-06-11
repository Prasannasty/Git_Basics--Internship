import React from "react";
import { Box, Container, Typography, IconButton, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: 2,
        px: 3,
        background: "linear-gradient(to right, #3f51b5, #ce93d8)",
        color: "white",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1300,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Centered text using full width and alignment */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Prasanna Shetty. All rights reserved.
          </Typography>
          <Typography variant="caption">
            Built with React, MUI — Showcasing my web development journey.
          </Typography>
        </Box>

        {/* Social Icons aligned to the right */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            component={Link}
            href="https://github.com/navadhiti-2025?tab=repositories"
            target="_blank"
            color="inherit"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
            target="_blank"
            color="inherit"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://twitter.com/YOUR-TWITTER-HANDLE"
            target="_blank"
            color="inherit"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
