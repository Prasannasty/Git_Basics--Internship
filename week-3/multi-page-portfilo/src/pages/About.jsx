import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Me
      </Typography>

      <Typography variant="body1" paragraph>
        Hello! I'm Prasanna, a passionate Frontend Developer and Designer specializing in building
        responsive, user-friendly web applications. I love crafting clean, efficient code and
        intuitive user interfaces that solve real-world problems.
      </Typography>

      <Typography variant="body1" paragraph>
        With a strong foundation in React, JavaScript, and CSS, I enjoy turning creative ideas into
        beautiful, functional digital experiences. When I'm not coding, I like learning new
        technologies, improving my design skills, and collaborating on open-source projects.
      </Typography>

      <Box mt={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Skills & Technologies
        </Typography>
        <ul>
          <li>React, React Router</li>
          <li>JavaScript (ES6+)</li>
          <li>CSS, MUI</li>
          <li>Responsive & Mobile-First Design</li>
          <li>Git, GitHub</li>
        </ul>
      </Box>
    </Container>
  );
};

export default About;
