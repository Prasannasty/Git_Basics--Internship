import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
  component="footer"
  sx={{
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    py: 3,
    px: 2,
    backgroundColor: (theme) =>
      theme.palette.mode === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    zIndex: 1300, 
  }}
>

      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Navadhiti.
        </Typography>

        <Box>
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
            href="https://github.com/navadhiti-2025?tab=repositories"
            target="_blank"
            color="inherit"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://github.com/navadhiti-2025?tab=repositories"
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
