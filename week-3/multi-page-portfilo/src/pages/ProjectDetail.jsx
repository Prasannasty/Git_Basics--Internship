import React, { useState } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import projects from "../data/projectsData";
import {
  Container,
  Typography,
  Button,
  Box,
  Link,
  Breadcrumbs,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  CardMedia,
  Grid,
  Divider,
} from "@mui/material";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showSkills, setShowSkills] = useState(false);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Project not found
        </Typography>
        <Button variant="contained" onClick={() => navigate("/projects")}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  const {
    title,
    details,
    description,
    image,
    github,
    live,
    skills = [],
    features = [],
  } = project;

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 6 }}>
      {/* Breadcrumbs with clickable project title */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link
          component={RouterLink}
          underline="hover"
          to="/projects"
          sx={{ color: "primary.main" }}
        >
          Projects
        </Link>

        {/* Project overview breadcrumb clickable */}
        <Link
          component={RouterLink}
          underline="hover"
          to={`/projects/${projectId}`}
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          {title}
        </Link>

        {/* Skills toggle breadcrumb */}
        {skills.length > 0 && (
          <Typography
            onClick={() => setShowSkills(!showSkills)}
            sx={{
              cursor: "pointer",
              color: showSkills ? "primary.main" : "text.secondary",
              fontWeight: showSkills ? "bold" : "normal",
              "&:hover": { color: "primary.main" },
            }}
          >
            Skills
          </Typography>
        )}
      </Breadcrumbs>

      {/* Main Project Card */}
      <Card
        sx={{
          minHeight: "800px",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: 6,
          bgcolor: "#fafafa",
        }}
      >
        {/* Project Image (Top 30%) */}
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />

        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {details || description}
          </Typography>

          {/* Features List */}
          {features.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Key Features:
              </Typography>
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {features.map((feature, i) => (
                  <li key={i}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {feature}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          )}

          <Divider sx={{ my: 3 }} />

          {/* Skills Section */}
          {showSkills && skills.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Tech Stack & Skill Levels
              </Typography>
              <Stack spacing={2}>
                {skills.map(({ name, progress }, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    sx={{ bgcolor: "#eeeeee", p: 1, borderRadius: 1 }}
                  >
                    <Typography sx={{ minWidth: 100 }}>{name}</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                      <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <Typography sx={{ minWidth: 35, textAlign: "right" }}>
                      {progress}%
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}

          {/* Buttons aligned left and right */}
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Box textAlign="center" mt={4}>
        <Button variant="outlined" onClick={() => navigate("/projects")}>
          ← Back to Projects
        </Button>
      </Box>
    </Container>
  );
};

export default ProjectDetail;
