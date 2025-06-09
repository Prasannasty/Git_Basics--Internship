import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        My Projects
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Here are some of the projects I have worked on. Click below to explore the
        code on GitHub or view more details.
      </Typography>

      <Grid container spacing={4}>
        {projects.map(({ id, title, description, github }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>

                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  component={RouterLink}
                  to={`/projects/${id}`}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center" color="text.secondary" fontSize={14}>
        <Typography variant="caption">
          *More projects and updates coming soon.
        </Typography>
      </Box>
    </Container>
  );
};

export default Projects;
