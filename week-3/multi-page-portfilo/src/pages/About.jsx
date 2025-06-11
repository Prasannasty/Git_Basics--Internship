import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Card,
  CardContent,
  styled,
  useTheme,
} from "@mui/material";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  "&:before": {
    content: '"\\2022"',
    backgroundColor: "transparent",
    color: theme.palette.secondary.main, // use secondary main for bullets
    fontWeight: "bold",
    display: "inline-block",
    width: "1em",
    marginLeft: "-1em",
  },
  paddingLeft: "1em",
}));

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 0, mb: 8, px: { xs: 2, md: 0 } }}>
      <Card
  elevation={4}
  sx={{
    borderRadius: 3,
    boxShadow: theme.shadows[4],
    backgroundImage: "linear-gradient(135deg,rgb(226, 231, 231) 0%,rgb(69, 175, 240) 100%)",
    color: "#fff", // optional: set text color to contrast with gradient
  }}
>

        <CardContent sx={{ p: { xs: 3, md: 6 } }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              textAlign: "center",
              mb: 4,
            }}
          >
            About me
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#374151" }} // soft dark grey
          >
            Hello! I'm Prasanna, a passionate Frontend Developer and Designer
            specializing in building responsive, user-friendly web
            applications. I love crafting clean, efficient code and intuitive
            user interfaces that solve real-world problems.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#374151" }}
          >
            With a strong foundation in React, JavaScript, and CSS, I enjoy
            turning creative ideas into beautiful, functional digital
            experiences. When I'm not coding, I like learning new technologies,
            improving my design skills, and collaborating on open-source
            projects.
          </Typography>

          <Box mt={4}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", color: theme.palette.secondary.main, mb: 2 }}
            >
              Skills & Technologies
            </Typography>
            <List sx={{ textAlign: "left", color:"black" }}>
              <StyledListItem>React, React Router</StyledListItem>
              <StyledListItem>JavaScript (ES6+)</StyledListItem>
              <StyledListItem>CSS, MUI</StyledListItem>
              <StyledListItem>Responsive & Mobile-First Design</StyledListItem>
              <StyledListItem>Git, GitHub</StyledListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
