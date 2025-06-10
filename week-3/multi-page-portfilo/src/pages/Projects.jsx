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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import projects from "../data/projectsData";

const cardHeight = 500;

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Explore some of my key projects. Each one demonstrates practical skills in design,
        coding, and problem solving.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map(({ id, title, description, github, image, features }) => (
          <Grid item xs={12} md={6} key={id}>
            <Card
              sx={{
                height: cardHeight,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 4,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  height: cardHeight * 0.4,
                  objectFit: "cover",
                }}
              />

              <CardContent sx={{ flexGrow: 1, px: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {description}
                </Typography>
                <List dense>
                  {features?.map((feature, index) => (
                    <ListItem key={index} sx={{ py: 0 }}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: "green" }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", px: 3, pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    if (isAuthenticated) {
                      navigate(`/projects/${id}`);
                    } else {
                      navigate(`/login?redirect=/projects/${id}`);
                    }
                  }}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={6} textAlign="center" color="text.secondary" fontSize={14}>
        <Typography variant="caption">*More projects and updates coming soon.</Typography>
      </Box>
    </Container>
  );
};

export default Projects;
